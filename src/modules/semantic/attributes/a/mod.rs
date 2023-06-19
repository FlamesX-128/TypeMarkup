use super::Attribute;

use import_modules::import_pub_modules;

import_pub_modules!("src/modules/semantic/attributes/a/", "^((?!(mod|async).rs).)*$");

pub mod r#async;
