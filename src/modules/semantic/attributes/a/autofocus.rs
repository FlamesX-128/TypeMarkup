use super::Attribute;

const VALID_VALUES: &'static [&'static str] = &["false", "true"];
const VALID_TAGS: &'static [&'static str] = &["button", "input", "select", "textarea"];

fn is_valid_value(value: Option<String>) -> Result<(), &'static str> {
    if VALID_VALUES.contains(&value.unwrap().as_str()) {
        return Ok(())
    }

    Err("Invalid value")
}

fn is_valid_tag(value: Option<String>) -> Result<(), &'static str> {
    if VALID_TAGS.contains(&value.unwrap().as_str()) {
        return Ok(())
    }

    Err("Invalid tag")
}

pub const AUTOFOCUS: Attribute = Attribute {
    name: "autofocus",
    desc: "It specifies that the element should automatically get focus when the page loads.",
    is_valid_value: Some(is_valid_value),
    is_deprecated: None,
    is_valid_tag: Some(is_valid_tag)
};
