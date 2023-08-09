use super

pub fn double_quotes(ctx: &mut Context) -> Option<TokenInfo> {
    let mut value = String::new();

    let mut escape = false;
    let mut close = false;

    while let Some(column) = ctx.next() {
        if column == '\\' && escape == false {
            escape = true;
            continue;
        }

        if column == '"' && escape == false {
            close = true;
            break;
        }

        value.push(column);
        escape = false;
    }

    let token = TokenInfo::new(
        Token::Identifier,
        value,
        Some(close),
        DebugInfo::new(ctx.y, ctx.x),
    );

    return Some(token);
}

pub fn single_quotes(ctx: &mut Context) -> Option<TokenInfo> {
    let mut value = String::new();

    let mut escape = false;
    let mut close = false;

    while let Some(column) = ctx.next() {
        if column == '\\' && escape == false {
            escape = true;
            continue;
        }

        if column == '\'' && escape == false {
            close = true;
            break;
        }

        value.push(column);
        escape = false;
    }

    let token = TokenInfo::new(
        Token::Identifier,
        value,
        Some(close),
        DebugInfo::new(ctx.y, ctx.x),
    );

    return Some(token);
}
