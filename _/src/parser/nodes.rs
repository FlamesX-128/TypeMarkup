use crate::DebugInfo;

use std::{error, fmt};

// - - -

#[derive(Clone, Debug, PartialEq)]
pub enum Error {
    NoNNestedNode,
}

impl error::Error for Error {}

impl fmt::Display for Error {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            Error::NoNNestedNode => write!(f, "non-nested node found."),
        }
    }
}

// - - -

#[derive(Clone, Debug)]
pub struct Element {
    pub debug_info: DebugInfo,
    pub name: String,
}

impl Element {
    pub fn new(name: String, debug_info: DebugInfo) -> Self {
        Self { name, debug_info }
    }
}

#[derive(Clone, Debug)]
pub struct Attribute {
    pub debug_info: DebugInfo,
    pub name: String,
    pub value: String,
}

impl Attribute {
    pub fn new(name: String, value: String, debug_info: DebugInfo) -> Self {
        Self {
            name,
            value,
            debug_info,
        }
    }
}

#[derive(Clone, Debug)]
pub struct Text {
    pub debug_info: DebugInfo,
    pub value: String,
}

impl Text {
    pub fn new(value: String, debug_info: DebugInfo) -> Self {
        Self { value, debug_info }
    }
}

#[derive(Clone, Debug)]
pub struct ProcessingInstruction {
    pub debug_info: DebugInfo,
    pub name: String,
    pub args: Vec<String>,
}

impl ProcessingInstruction {
    pub fn new(name: String, args: Vec<String>, debug_info: DebugInfo) -> Self {
        Self {
            name,
            args,
            debug_info,
        }
    }
}

#[derive(Clone, Debug)]
pub struct Comment {
    pub debug_info: DebugInfo,
    pub value: String,
}

impl Comment {
    pub fn new(value: String, debug_info: DebugInfo) -> Self {
        Self { value, debug_info }
    }
}

// - - -

#[derive(Clone, Debug)]
pub enum Node {
    NestedNodes(Vec<Node>),      // NODE TYPE A-0
    RightAlignedNode(Box<Node>), // NODE TYPE A-1
    LeftAlignedNode(Box<Node>),  // NODE TYPE A-2

    Element(Element),     // DOM NODE TYPE 1
    Attribute(Attribute), // DOM NODE TYPE 2
    Text(Text),           // DOM NODE TYPE 3

    ProcessingInstruction(ProcessingInstruction), // DOM NODE TYPE 7
    Comment(Comment),                             // DOM NODE TYPE 8
}

impl Node {
    pub fn push_at_depth(&mut self, depth: usize, node: Node) -> Result<(), Error> {
        match self {
            Node::NestedNodes(nodes) => {
                if depth == 0 {
                    Ok(nodes.push(node))
                } else {
                    match nodes.last_mut() {
                        Some(last) => last.push_at_depth(depth - 1, node),
                        None => Err(Error::NoNNestedNode),
                    }
                }
            }
            _ => Err(Error::NoNNestedNode),
        }
    }

    pub fn push(&mut self, node: Node) -> Result<(), Error> {
        match self {
            Node::NestedNodes(nodes) => Ok(nodes.push(node)),
            _ => Err(Error::NoNNestedNode),
        }
    }
}

impl PartialEq for Node {
    fn eq(&self, other: &Self) -> bool {
        match (self, other) {
            (Node::NestedNodes(_), Node::NestedNodes(_)) => true,
            (Node::RightAlignedNode(_), Node::RightAlignedNode(_)) => true,

            (Node::Element(_), Node::Element(_)) => true,
            (Node::Attribute(_), Node::Attribute(_)) => true,
            (Node::Text(_), Node::Text(_)) => true,

            (Node::ProcessingInstruction(_), Node::ProcessingInstruction(_)) => true,
            (Node::Comment(_), Node::Comment(_)) => true,

            _ => false,
        }
    }
}
