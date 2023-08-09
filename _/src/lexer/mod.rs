pub mod tokenizers;

use std::str::Chars;

use crate::DebugInfo;

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

    // - - -
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

#[derive(Clone, Debug)]
pub struct TokenInfo {
    pub debug_info: DebugInfo,
    pub identifier: Token,
    pub value: String,
    pub close: bool,
}

impl TokenInfo {
    pub fn new(
        identifier: Token,
        value: String,
        close: Option<bool>,
        debug_info: DebugInfo,
    ) -> Self {
        Self {
            identifier,
            value,
            close: close.unwrap_or(true),
            debug_info,
        }
    }
}

// - - -
struct Context<'a> {
    y: usize,
    x: usize,
    column: Chars<'a>,
}

impl<'a> Context<'a> {
    fn new(y: usize, column: Chars<'a>) -> Self {
        Self { column, y, x: 0 }
    }
}

impl<'a> Context<'a> {
    fn next(&mut self) -> Option<char> {
        self.x += 1;
        self.column.next()
    }

    fn prev(&mut self) -> Option<char> {
        self.x -= 1;
        self.column.nth(self.x)
    }
}

// - - -

fn comment(ctx: &mut Context) -> Option<TokenInfo> {
    let mut value = String::new();

    while let Some(column) = ctx.next() {
        if column == '\n' {
            break;
        }

        value.push(column);
    }

    let token = TokenInfo::new(Token::Identifier, value, None, DebugInfo::new(ctx.y, ctx.x));

    return Some(token);
}

fn identifier(ctx: &mut Context) -> Option<TokenInfo> {
    let mut value = String::new();
    ctx.prev();

    while let Some(column) = ctx.next() {
        if column == ' ' {
            break;
        }

        value.push(column);
    }

    let token = TokenInfo::new(Token::Identifier, value, None, DebugInfo::new(ctx.y, ctx.x));

    return Some(token);
}

// - - -

pub fn anylezer<T>(document: T) -> Vec<TokenInfo>
where
    T: AsRef<str>,
{
    let mut identifiers = Vec::new();

    for (y, row) in document.as_ref().lines().enumerate() {
        let mut scope = Context::new(y, row.chars());

        while let Some(column) = scope.next() {
            if column == ' ' {
                continue;
            }

            let result = match column {
                'a'..='z' | 'A'..='Z' => identifier(&mut scope),
                '"' => double_quotes(&mut scope),
                '\'' => single_quotes(&mut scope),
                '#' => comment(&mut scope),
                _ => None,
            };

            if let Some(data) = result {
                identifiers.push(data);
            }
        }
    }

    return identifiers;
}
