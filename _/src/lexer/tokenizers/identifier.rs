use crate::lexer;

#[allow(dead_code)]
pub fn identifier(ctx: &mut lexer::Context) -> Option<lexer::TokenInfo> {
    let mut value = String::new();
    let mut escaped = false;

    value.push(ctx.current()?);

    while let Some(c) = ctx.next() {
        if escaped 
    }

    Some(lexer::TokenInfo::new(lexer::Token::Identifier, Some(value)))
}
