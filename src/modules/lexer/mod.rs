use crate::models::token::TokenInfo;

mod analyzer;

pub fn lexer(content: String) -> Vec<TokenInfo> {
    analyzer::lexer(content)
}
