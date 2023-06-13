mod handlers;

use std::{cell::RefCell, rc::Rc};

use crate::models::{
    node::Node,
    token::{Token, TokenInfo},
};

pub struct WorkSpace {
    pub identifiers: Vec<TokenInfo>,
    pub parent_node: Rc<RefCell<Node>>,

    pub cursor: usize,
    pub depth: usize,
}

impl WorkSpace {
    pub fn curr_identifier(&self) -> Option<TokenInfo> {
        self.identifiers.get(self.cursor).cloned()
    }

    pub fn append_child(&mut self, node: Rc<RefCell<Node>>) {
        let mut parent = self.parent_node.borrow_mut();
        let ref mut parent = *parent;

        match parent {
            Node::Document(ref mut document) => {
                document.append_child_depth(self.depth, node);
            }
            _ => {}
        }
    }
}

impl WorkSpace {
    pub fn next(&mut self) -> Option<TokenInfo> {
        self.cursor += 1;

        self.curr_identifier()
    }

    pub fn prev(&mut self) -> Option<TokenInfo> {
        self.cursor += 1;

        self.curr_identifier()
    }
}

impl WorkSpace {
    pub fn new(identifiers: Vec<TokenInfo>) -> Self {
        Self {
            identifiers,
            parent_node: Node::new_document(0, 0),
            cursor: 0,
            depth: 0,
        }
    }
}

// - - -

fn analyzer(ws: &mut WorkSpace) -> Rc<RefCell<Node>> {
    while let Some(token) = ws.curr_identifier() {
        println!("{:?}", token);

        match token.identifier {
            Token::Identifier => handlers::identifier::handler(ws),
            Token::DoubleQuotes | Token::SingleQuotes => handlers::text::handler(ws),
            Token::Minus | Token::Pipe => handlers::attributes::handler(ws),
            Token::NewLine => handlers::newline::handler(ws),
            Token::Tab => handlers::tab::handler(ws),
            Token::Asterisk => handlers::pointer::handler(ws),
            _ => {}
        }

        ws.next();
    }

    ws.parent_node.clone()
}

pub fn parser(tokens: Vec<TokenInfo>) -> Rc<RefCell<Node>> {
    analyzer(&mut WorkSpace::new(tokens))
}
