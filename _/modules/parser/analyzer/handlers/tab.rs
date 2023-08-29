use crate::modules::parser::analyzer::WorkSpace;

pub fn handler(ws: &mut WorkSpace) {
    ws.depth += 1;
}
