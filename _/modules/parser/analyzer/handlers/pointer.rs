use crate::{
    models::{
        node::Node,
        token::Token,
    },
    modules::parser::analyzer::WorkSpace,
};

fn wrong_pointer_decl<T>(ws: &mut WorkSpace, value: T)
where
    T: AsRef<str>,
{   
    let data = format!(
        "wrong pointer declaration: \"{}\"", value.as_ref().to_string()
    );

    ws.prev();
    ws.append_child(
        Node::new_syntax_error(data, ws.cursor, ws.depth)
    )
}

pub fn handler(ws: &mut WorkSpace) {
    let info = ws.curr_identifier().unwrap();

    let token = match ws.next() {
        Some(token) => token,
        None =>
            return wrong_pointer_decl(ws, "EOF"),
    };

    match token.identifier {
        Token::Identifier | Token::DoubleQuotes | Token::SingleQuotes => {
            let name = token.value.unwrap();

            ws.append_child(
                Node::new_pointer(name, info.cursor, ws.depth)
            )
        }

        Token::Ampersand =>
            super::redirect::handler(ws),

        _ =>
            return wrong_pointer_decl(ws, token.identifier.to_string()),
    };

}
