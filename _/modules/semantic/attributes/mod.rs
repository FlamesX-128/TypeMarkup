use std::collections::HashMap;

use import_modules::import_pub_modules;
use lazy_static::lazy_static;

import_pub_modules!("src/modules/semantic/attributes/", "^((?!mod.rs).)*$");

pub struct Attribute {
    pub name: &'static str,
    pub desc: &'static str,
    pub is_valid_value: Option<fn(Option<String>) -> Result<(), &'static str>>,
    pub is_deprecated: Option<fn(Option<String>) -> Result<(), &'static str>>,
    pub is_valid_tag: Option<fn(Option<String>) -> Result<(), &'static str>>,
}

impl Attribute {}
