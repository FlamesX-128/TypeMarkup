use std::collections::HashMap;

use lazy_static::lazy_static;

pub struct Attribute {
    pub name: &'static str
}

lazy_static! {
    pub static ref ATTRIBUTES: HashMap<&'static str, &'static Attribute> = {
        let mut hash: HashMap<&'static str, &'static Attribute> = HashMap::new();

        //hash.insert(TEST.name, &TEST);

        hash
    };
}
