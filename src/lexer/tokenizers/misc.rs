use crate::lexer;

pub fn ampersand() -> lexer::TokenInfo {
    lexer::TokenInfo::new(
        lexer::Token::Ampersand,
        None
    )
}

pub fn at() -> lexer::TokenInfo {
    lexer::TokenInfo::new(
        lexer::Token::At,
        None
    )
}

pub fn hash() -> lexer::TokenInfo {
    lexer::TokenInfo::new(
        lexer::Token::Hash,
        None
    )
}

pub fn pipe() -> lexer::TokenInfo {
    lexer::TokenInfo::new(
        lexer::Token::Pipe,
        None
    )
}

// - - -

pub fn semicolon() -> lexer::TokenInfo {
    lexer::TokenInfo::new(
        lexer::Token::Semicolon,
        None
    )
}

pub fn new_line() -> lexer::TokenInfo {
    lexer::TokenInfo::new(
        lexer::Token::NewLine,
        None
    )
}

pub fn tab() -> lexer::TokenInfo {
    lexer::TokenInfo::new(
        lexer::Token::Tab,
        None
    )
}
