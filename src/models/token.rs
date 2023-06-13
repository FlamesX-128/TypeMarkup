#[derive(Clone, Copy, Debug, PartialEq)]
pub enum Token {
    Identifier,

    Minus,
    Plus,
    Slash,

    Ampersand,
    Asterisk,
    Pipe,
    At,

    CloseParen,
    OpenParen,

    DoubleQuotes,
    SingleQuotes,
    Semicolon,

    CloseBrace,
    OpenBrace,

    NewLine,
    Space,
    Tab,

    Unknown,
}

impl Token {
    pub fn new(data: &dyn std::fmt::Display) -> Token {
        let str = data.to_string();

        let mut chars = str.chars();
        let char = chars.next().unwrap_or(' ');

        match char {
            'A'..='Z' | 'a'..='z' | '0'..='9' | '_' => Token::Identifier,

            '-' => Token::Minus,
            '+' => Token::Plus,
            '/' => Token::Slash,

            '&' => Token::Ampersand,
            '*' => Token::Asterisk,
            '|' => Token::Pipe,
            '@' => Token::At,

            ')' => Token::CloseParen,
            '(' => Token::OpenParen,

            '"' => Token::DoubleQuotes,
            '\'' => Token::SingleQuotes,
            ';' => Token::Semicolon,

            '}' => Token::CloseBrace,
            '{' => Token::OpenBrace,

            '\n' => Token::NewLine,
            '\t' => Token::Tab,

            '\r' => Token::Space,
            ' ' => Token::Space,

            _ => Token::Unknown,
        }
    }

    pub fn to_string(&self) -> &'static str {
        match &self {
            Token::Identifier => "Identifier",

            Token::Minus => "Minus",
            Token::Plus => "Plus",
            Token::Slash => "Slash",

            Token::Ampersand => "Ampersand",
            Token::Asterisk => "Asterisk",
            Token::Pipe => "Pipe",
            Token::At => "At",

            Token::CloseParen => "CloseParen",
            Token::OpenParen => "OpenParen",

            Token::DoubleQuotes => "DoubleQuotes",
            Token::SingleQuotes => "SingleQuotes",
            Token::Semicolon => "Semicolon",

            Token::CloseBrace => "CloseBrace",
            Token::OpenBrace => "OpenBrace",

            Token::NewLine => "NewLine",
            Token::Space => "Space",
            Token::Tab => "Tab",

            Token::Unknown => "Unknown",
        }
    }
}

#[derive(Clone, Debug)]
pub struct TokenInfo {
    pub identifier: Token,
    pub value: Option<String>,
    pub cursor: usize,
}

impl PartialEq for TokenInfo {
    fn eq(&self, other: &Self) -> bool {
        self.identifier == other.identifier
    }

    fn ne(&self, other: &Self) -> bool {
        self.identifier != other.identifier
    }
}

impl TokenInfo {
    pub fn new(identifier: Token, value: Option<String>, cursor: usize) -> TokenInfo {
        TokenInfo {
            identifier,
            value,
            cursor,
        }
    }
}
