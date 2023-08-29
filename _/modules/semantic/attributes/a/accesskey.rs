use super::Attribute;

fn is_valid_value(_value: Option<String>) -> Result<(), &'static str> {
    Ok(())
}

pub const ACCESSKEY: Attribute = Attribute {
    name: "accesskey",
    desc: "The accesskey attribute specifies a shortcut key to activate/focus an element.",
    is_valid_value: Some(is_valid_value),
    is_deprecated: None,
    is_valid_tag: None
};
