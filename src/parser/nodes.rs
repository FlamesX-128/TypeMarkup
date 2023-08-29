use std::{error, fmt};

// - - - Error - - -

#[derive(Clone, Copy, Debug, PartialEq)]
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

impl Error {
    pub fn new(err: Self) -> Result<(), Self> {
        Err(err)
    }
}

// - - - DOM Types - - -

#[derive(Clone, Debug, Default)]
pub struct Element {
    pub name: String,
}

#[derive(Clone, Debug, Default)]
pub struct Attribute {
    pub name: String,
    pub value: String,
}

#[derive(Clone, Debug, Default)]
pub struct Text {
    pub value: String,
}

#[derive(Clone, Debug, Default)]
pub struct ProcessingInstruction {
    pub name: String,
    pub args: Vec<String>,
}

#[derive(Clone, Debug, Default)]
pub struct Comment {
    pub value: String,
}

// - - - Node - - -

#[derive(Clone, Debug)]
pub enum Node {
    NestedNodes(Vec<Node>),      // CUSTOM NODE TYPE 0
    RightAlignedNode(Box<Node>), // CUSTOM NODE TYPE 1
    LeftAlignedNode(Box<Node>),  // CUSTOM NODE TYPE 2

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
                        None => Error::new(Error::NoNNestedNode),
                    }
                }
            }
            _ => Error::new(Error::NoNNestedNode),
        }
    }

    pub fn push(&mut self, node: Node) -> Result<(), Error> {
        match self {
            Node::NestedNodes(nodes) => Ok(nodes.push(node)),
            _ => Error::new(Error::NoNNestedNode),
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
