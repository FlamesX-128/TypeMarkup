use std::{rc::Rc, cell::RefCell};

use crate::models::{token::TokenInfo, node::Node};

mod analyzer;

pub fn parser(tokens: Vec<TokenInfo>) -> Rc<RefCell<Node>> {
    analyzer::parser(tokens)
}
