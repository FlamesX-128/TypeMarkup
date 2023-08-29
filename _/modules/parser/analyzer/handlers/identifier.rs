use crate::{models::token::Token, modules::parser::analyzer::WorkSpace};

pub fn handler(ws: &mut WorkSpace) {
    let mut sequence = false;

    while let Some(token) = ws.curr_identifier() {
        match token.identifier {
            Token::DoubleQuotes | Token::SingleQuotes => super::text::handler(ws),
            Token::Minus | Token::Pipe => super::attributes::handler(ws),
            Token::Identifier => {
                super::element::handler(ws, sequence);
                sequence = true;
            }
            Token::NewLine | Token::Semicolon => {
                break;
            }
            _ => {}
        }

        ws.next();
    }
}
