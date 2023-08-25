mod tokenizers;

use tokenizers::TokenInfo;

use self::tokenizers::Token;

// - - - Context - - -

#[derive(Clone, Debug)]
pub struct Context<'a> {
    chars: std::str::Chars<'a>,
    x: usize,
}

impl Iterator for Context<'_> {
    type Item = char;

    fn next(&mut self) -> Option<Self::Item> {
        self.x += 1;
        self.chars.next()
    }
}

impl<'a> Context<'a> {
    fn current(&mut self) -> Option<char> {
        self.chars.nth(self.x)
    }
}

impl<'a> Context<'a> {
    fn new(chars: std::str::Chars<'a>) -> Self {
        Self { chars, x: 0 }
    }
}

// - - - Tokenizer - - -

fn tokenizer(ctx: &mut Context) -> Option<TokenInfo> {
    match ctx.current()? {
        _ => None,
    }
}

// - - - Analyzer - - -

pub fn analyzer(document: &str) -> Vec<TokenInfo> {
    let mut identifiers = Vec::new();

    for row in document.lines() {
        let mut scope = Context::new(row.chars());

        while let Some(_) = scope.next() {
            if let Some(token) = tokenizer(&mut scope) {
                identifiers.push(token);
            }
        }

        identifiers.push(
            TokenInfo::new(Token::NewLine, None) 
        )
    }

    return identifiers;
}
