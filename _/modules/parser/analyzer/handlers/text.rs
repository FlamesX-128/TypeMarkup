use crate::{modules::parser::analyzer::WorkSpace, models::node::Node};

pub fn handler(ws: &mut WorkSpace) {
    let info = ws.curr_identifier().unwrap();

    ws.append_child(
        Node::new_text(info.value.unwrap(), ws.depth, info.cursor)
    )
}
