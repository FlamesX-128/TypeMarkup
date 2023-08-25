use import_modules::import;

import!({
   "directory": "src/lexer/tokenizers",
   "inter_process": "pub mod r#{};"
});

// - - - Token - - -

#[derive(Clone, Copy, Debug, PartialEq)]
pub enum Token {
    Identifier,

    RightArrow,
    LeftArrow,

    Minus,
    Slash,
    Ampersand,
    Asterisk,
    At,

    DoubleQuotes,
    SingleQuotes,
    Semicolon,

    NewLine,
    Space,
    Tab,

    Unknown,
}

impl From<char> for Token {
    fn from(value: char) -> Self {
        match value {
            'a'..='z' | 'A'..='Z' => Self::Identifier,

            '>' => Self::RightArrow,
            '<' => Self::LeftArrow,

            '-' => Self::Minus,
            '/' => Self::Slash,
            '&' => Self::Ampersand,
            '*' => Self::Asterisk,
            '@' => Self::At,

            '"' => Self::DoubleQuotes,
            '\'' => Self::SingleQuotes,
            ';' => Self::Semicolon,

            '\n' => Self::NewLine,
            ' ' => Self::Space,
            '\t' => Self::Tab,

            _ => Self::Unknown,
        }
    }
}

impl From<u8> for Token {
    fn from(value: u8) -> Self {
        Self::from(value as char)
    }
}

// - - - Token Info - - -

#[derive(Clone, Debug)]
pub struct TokenInfo {
    pub identifier: Token,
    pub value: Option<String>, 
}

impl TokenInfo {
    pub fn new(identifier: Token, value: Option<String>) -> Self {
        Self {
            identifier, value
        }
    }
}
