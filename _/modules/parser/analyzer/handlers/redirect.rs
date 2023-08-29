use crate::{
    models::{
        node::Node,
        token::Token,
    },
    modules::parser::analyzer::WorkSpace,
};

fn wrong_fragment_decl<T>(ws: &mut WorkSpace, value: T)
where
    T: AsRef<str>,
{   
    let data = format!(
        "wrong redirect element: \"{}\"", value.as_ref().to_string()
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
            return wrong_fragment_decl(ws, "EOF"),
    };

    let ref_name = match token.identifier {
        Token::Identifier
            | Token::DoubleQuotes
            | Token::SingleQuotes => {
                token.value.unwrap()
            }
        
        _ =>
            return wrong_fragment_decl(ws, token.value.unwrap()),
    };

    let token = match ws.next() {
        Some(token) => token,
        None =>
            return wrong_fragment_decl(ws, "EOF"),
    };

    match token.identifier {
        Token::Identifier
            | Token::DoubleQuotes
            | Token::SingleQuotes => {
                let name = token.value.unwrap();

                ws.append_child(
                    Node::new_pointer(name, token.cursor, ws.depth)
                )
            }

        Token::Semicolon
            => (),

        _ =>
            return wrong_fragment_decl(ws, token.value.unwrap()),
    };

    ws.append_child(
        Node::new_redirect_element(ref_name, info.cursor, ws.depth)
    )
}
