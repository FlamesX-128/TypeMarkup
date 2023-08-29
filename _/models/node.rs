use std::{cell::RefCell, rc::Rc};

#[derive(Clone, Debug)]
pub struct Element {
    pub name: String,
    pub children_nodes: Vec<Rc<RefCell<Node>>>,

    pub cursor: usize,
    pub depth: usize,
}

impl Element {
    pub fn append_child_depth(&mut self, depth: usize, node: Rc<RefCell<Node>>) {
        if depth <= 0 { return self.append_child(node); }

        let children_nodes = self.children_nodes.clone();

        if let Some(parent) = children_nodes.last() {
            let mut parent = parent.borrow_mut();
            let ref mut parent = *parent;

            match parent {
                Node::Element(ref mut element) => {
                    element.append_child_depth(depth - 1, node);
                },
                _ => {
                    println!("parent: {:#?}", parent);
                    panic!("wrong node type 1")
                }
            }
    
            return
        }

    }

    pub fn append_child(&mut self, node: Rc<RefCell<Node>>) {
        self.children_nodes.push(node);
    }
}

#[derive(Clone, Debug)]
pub struct Attribute {
    pub name: String,
    pub data: Option<String>,

    pub cursor: usize,
    pub depth: usize,
}

#[derive(Clone, Debug)]
pub struct Text {
    pub data: String,

    pub cursor: usize,
    pub depth: usize,
}

#[derive(Clone, Debug)]
pub struct EntityReference {
    pub name: String,

    pub cursor: usize,
    pub depth: usize,
}

#[derive(Clone, Debug)]
pub struct Entity {
    pub name: String,
    pub data: String,

    pub cursor: usize,
    pub depth: usize,
}

#[derive(Clone, Debug)]
pub struct RedirectElement {
    pub name: String,

    pub cursor: usize,
    pub depth: usize,
}

#[derive(Clone, Debug)]
pub struct Pointer {
    pub name: String,

    pub cursor: usize,
    pub depth: usize,
}

#[derive(Clone, Debug)]
pub struct Syntax {
    pub data: String,

    pub cursor: usize,
    pub depth: usize,
}

#[derive(Clone, Debug)]
pub enum Node {
    ElementSequence(Element), // html -> head
    Element(Element), // html

    Attribute(Attribute), // id="main"
    Text(Text), // #text -> "Hello, world!"

    EntityReference(EntityReference), // &nbsp;
    Entity(Entity), // ! pepe "pepe"

    Document(Element), // #document

    RedirectElement(RedirectElement), // *& html
    Pointer(Pointer), // * html

    SyntaxWarning(Syntax),
    SyntaxError(Syntax),
}

impl Node {
    pub fn new_element_sequence(name: String, cursor: usize, depth: usize) -> Rc<RefCell<Self>> {
        Rc::new(RefCell::new(Self::ElementSequence(Element {
            name,
            children_nodes: vec![],

            cursor,
            depth,
        })))
    }

    pub fn new_element(name: String, cursor: usize, depth: usize) -> Rc<RefCell<Self>> {
        Rc::new(RefCell::new(Self::Element(Element {
            name,
            children_nodes: vec![],

            cursor,
            depth,
        })))
    }

    pub fn new_attribute(name: String, data: Option<String>, cursor: usize, depth: usize) -> Rc<RefCell<Self>> {
        Rc::new(RefCell::new(Self::Attribute(Attribute {
            name,
            data,

            cursor,
            depth,
        })))
    }

    pub fn new_text(data: String, cursor: usize, depth: usize) -> Rc<RefCell<Self>> {
        Rc::new(RefCell::new(Self::Text(Text {
            data,

            cursor,
            depth,
        })))
    }

    pub fn new_entity_reference(name: String, cursor: usize, depth: usize) -> Rc<RefCell<Self>> {
        Rc::new(RefCell::new(Self::EntityReference(EntityReference {
            name,

            cursor,
            depth,
        })))
    }

    pub fn new_entity(name: String, data: String, cursor: usize, depth: usize) -> Rc<RefCell<Self>> {
        Rc::new(RefCell::new(Self::Entity(Entity {
            name,
            data,

            cursor,
            depth,
        })))
    }

    pub fn new_document(cursor: usize, depth: usize) -> Rc<RefCell<Self>> {
        Rc::new(RefCell::new(Self::Document(Element {
            name: String::from("document"),
            children_nodes: vec![],

            cursor,
            depth,
        })))
    }

    pub fn new_redirect_element(name: String, cursor: usize, depth: usize) -> Rc<RefCell<Self>> {
        Rc::new(RefCell::new(Self::RedirectElement(RedirectElement {
            name,

            cursor,
            depth,
        })))
    }

    pub fn new_pointer(name: String, cursor: usize, depth: usize) -> Rc<RefCell<Self>> {
        Rc::new(RefCell::new(Self::Pointer(Pointer {
            name,

            cursor,
            depth,
        })))
    }

    pub fn new_syntax_warning(data: String, cursor: usize, depth: usize) -> Rc<RefCell<Self>> {
        Rc::new(RefCell::new(Self::SyntaxWarning(Syntax {
            data,

            cursor,
            depth,
        })))
    }

    pub fn new_syntax_error(data: String, cursor: usize, depth: usize) -> Rc<RefCell<Self>> {
        Rc::new(RefCell::new(Self::SyntaxError(Syntax {
            data,

            cursor,
            depth,
        })))
    }

}
