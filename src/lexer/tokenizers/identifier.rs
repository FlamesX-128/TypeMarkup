use crate::lexer;

pub fn identifier(ctx: &mut lexer::Context) -> lexer::TokenInfo {
    let mut value = String::new();
    let val = ctx.current().unwrap();

    value.push(val);

    while let Some(c) = ctx.next() {
        match c {
            'a'..='z' | 'A'..='Z' | '0'..='9' | '_' | '-' => value.push(c),
            _ => break,
        }
    }

    ctx.next_back();

    lexer::TokenInfo::new(lexer::Token::Identifier, Some(value))
}
