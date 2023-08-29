use crate::lexer;

use import_modules::import;

import!({
    "directory": "src/lexer/tokenizers",
    "inter_process": "pub mod r#{};"
});

// - - - Token - - -

#[derive(Clone, Copy, Debug, PartialEq)]
pub enum Token {
    Identifier,

    Number,
    Plus,
    Minus,
    Asterisk,
    Slash,
    Equals,
    GreaterThan,
    LessThan,
    Percent,

    Ampersand,
    At,
    Hash,
    Pipe,

    DoubleQuotes,
    SingleQuotes,

    Semicolon,
    NewLine,
    Tab,

    Unknown,
}

impl From<char> for Token {
    fn from(value: char) -> Self {
        match value {
            'a'..='z' | 'A'..='Z' => Self::Identifier,

            '0'..='9' => Self::Number,
            '+' => Self::Plus,
            '-' => Self::Minus,
            '*' => Self::Asterisk,
            '/' => Self::Slash,
            '=' => Self::Equals,
            '>' => Self::GreaterThan,
            '<' => Self::LessThan,
            '%' => Self::Percent,

            '"' => Self::DoubleQuotes,
            '\'' => Self::SingleQuotes,

            '&' => Self::Ampersand,
            '@' => Self::At,
            '#' => Self::Hash,
            '|' => Self::Pipe,

            ';' => Self::Semicolon,
            '\n' => Self::NewLine,
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
        Self { identifier, value }
    }
}

// - - - Tokenizer - - -

pub fn tokenizer(ctx: &mut lexer::Context) -> TokenInfo {
    println!("-- {:?}", ctx.current());
    println!("-- {:?}", ctx.current());

    match ctx.current().unwrap() {
        'a'..='z' | 'A'..='Z' => identifier::identifier(ctx),

        '0'..='9' => math::number(ctx),
        '+' => math::plus(),
        '-' => math::minus(),
        '*' => math::asterisk(),
        '/' => math::slash(),
        '=' => math::equals(),
        '>' => math::greater_than(),
        '<' => math::less_than(),
        '%' => math::percent(),

        '"' => quotes::double_quotes(ctx),
        '\'' => quotes::single_quotes(ctx),

        '&' => misc::ampersand(),
        '@' => misc::at(),
        '#' => misc::hash(),
        '|' => misc::pipe(),

        ';' => misc::semicolon(),
        '\n' => misc::new_line(),
        '\t' => misc::tab(),

        _ => TokenInfo::new(Token::Unknown, None),
    }
}
