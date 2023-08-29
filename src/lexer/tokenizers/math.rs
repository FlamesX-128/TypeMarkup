use crate::lexer;

pub fn number(ctx: &mut lexer::Context) -> lexer::TokenInfo {
    let mut value = String::new();

    value.push(ctx.current().unwrap());

    while let Some(c) = ctx.next() {
        match c {
            '0'..='9' | '.' => value.push(c),
            _ => break,
        }
    }

    ctx.next_back();

    lexer::TokenInfo::new(lexer::Token::Number, Some(value))
}

pub fn plus() -> lexer::TokenInfo {
    lexer::TokenInfo::new(lexer::Token::Plus, None)
}

pub fn minus() -> lexer::TokenInfo {
    lexer::TokenInfo::new(lexer::Token::Minus, None)
}

pub fn asterisk() -> lexer::TokenInfo {
    lexer::TokenInfo::new(lexer::Token::Asterisk, None)
}

pub fn slash() -> lexer::TokenInfo {
    lexer::TokenInfo::new(lexer::Token::Slash, None)
}

pub fn equals() -> lexer::TokenInfo {
    lexer::TokenInfo::new(lexer::Token::Equals, None)
}

pub fn greater_than() -> lexer::TokenInfo {
    lexer::TokenInfo::new(lexer::Token::GreaterThan, None)
}

pub fn less_than() -> lexer::TokenInfo {
    lexer::TokenInfo::new(lexer::Token::LessThan, None)
}

pub fn percent() -> lexer::TokenInfo {
    lexer::TokenInfo::new(lexer::Token::Percent, None)
}
