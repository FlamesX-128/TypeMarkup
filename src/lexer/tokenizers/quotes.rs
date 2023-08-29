use crate::lexer;

pub fn double_quotes(ctx: &mut lexer::Context) -> lexer::TokenInfo {
    let mut chars = String::new();
    let mut escaped = false;

    while let Some(c) = ctx.next() {
        match (escaped, c) {
            (false, '\\') => escaped = true,
            (true, _) => {
                chars.push(c);
                escaped = false;
            }
            (false, '"') => break,
            _ => chars.push(c),
        }
    }

    lexer::TokenInfo::new(
        lexer::Token::DoubleQuotes,
        Some(chars)
    )
}

pub fn single_quotes(ctx: &mut lexer::Context) -> lexer::TokenInfo {
    let mut chars = String::new();
    let mut escaped = false;

    while let Some(c) = ctx.next() {
        match (escaped, c) {
            (false, '\\') => escaped = true,
            (true, _) => {
                chars.push(c);
                escaped = false;
            }
            (false, '\'') => break,
            _ => chars.push(c),
        }
    }

    lexer::TokenInfo::new(
        lexer::Token::SingleQuotes,
        Some(chars)
    )
}
