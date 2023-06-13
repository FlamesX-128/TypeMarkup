use crate::{models::node::Node, modules::parser::analyzer::WorkSpace};

pub fn handler(ws: &mut WorkSpace, sequence: bool) {
    let info = ws.curr_identifier().unwrap();

    let func = match sequence {
        false => Node::new_element,
        true => Node::new_element_sequence,
    };

    ws.append_child(
        func(info.value.unwrap(), ws.depth, info.cursor)
    )
}
