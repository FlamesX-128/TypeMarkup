use crate::{
    modules::parser::analyzer::WorkSpace, models::{
        token::Token,
        node::Node
    }
};

fn wrong_attribute_decl<T>(ws: &mut WorkSpace, value: T)
where
    T: AsRef<str>,
{   
    let data = format!(
        "wrong attribute declaration: \"{}\"", value.as_ref().to_string()
    );

    ws.prev();
    ws.append_child(
        Node::new_syntax_error(data, ws.cursor, ws.depth)
    )
}

pub fn handler(ws: &mut WorkSpace) {
    let info = ws.curr_identifier().unwrap();

    let token = match ws.next() {
        None
            => return wrong_attribute_decl(ws, "EOF"),

        Some(token) => token,
    };

    let name = match token.identifier {
        Token::Identifier
            | Token::DoubleQuotes
            | Token::SingleQuotes
                => token.value.unwrap(),

        _
            => return wrong_attribute_decl(ws, token.identifier.to_string())
    };

    let data = match ws.next() {
        Some(token) => match token.identifier {
            Token::DoubleQuotes
                | Token::SingleQuotes
                => token.value,

            Token::NewLine
                | Token::Semicolon
                => { ws.prev(); None }

            _
                => return wrong_attribute_decl(ws, token.identifier.to_string())
        },
        None
            => { ws.prev(); None },
    };

    ws.append_child(
        Node::new_attribute(name, data, ws.depth, info.cursor)
    )

}
