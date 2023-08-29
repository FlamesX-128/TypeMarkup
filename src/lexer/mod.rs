mod tokenizers;

use tokenizers::{tokenizer, TokenInfo};

use self::tokenizers::Token;

// - - - Context - - -

#[derive(Clone, Debug)]
pub struct Context {
    chars: Vec<char>,
    curr: Option<char>,
    x: usize,
}

impl DoubleEndedIterator for Context {
    fn next_back(&mut self) -> Option<Self::Item> {
        self.x -= 1;

        self.curr = self.chars.get(self.x - 1).copied();
        self.curr
    }
}

impl Iterator for Context {
    type Item = char;

    fn next(&mut self) -> Option<Self::Item> {
        self.x += 1;

        self.curr = self.chars.get(self.x - 1).copied();
        self.curr
    }
}

impl Context {
    fn current(&mut self) -> Option<char> {
        self.curr
    }
}

impl Context {
    fn new(chars: Vec<char>) -> Self {
        Self { chars, curr: None, x: 0 }
    }
}

// - - - Analyzer - - -

pub fn analyzer(document: &str) -> Vec<TokenInfo> {
    let mut identifiers = Vec::new();

    for row in document.lines() {
        let mut scope = Context::new(
            row.chars().collect()
        );

        while let Some(c) = scope.next() {
            if c == ' ' { continue; }

            identifiers.push(tokenizer(&mut scope));
        }

        identifiers.push(TokenInfo::new(
            Token::NewLine,
            None
        ))
    }

    return identifiers;
}
