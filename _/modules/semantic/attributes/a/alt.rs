use super::Attribute;

const VALID_TAGS: &'static [&'static str] = &["area", "img", "input"];

fn is_valid_value(value: Option<String>) -> Result<(), &'static str> {
    Ok(())
}

fn is_valid_tag(value: Option<String>) -> Result<(), &'static str> {
    if VALID_TAGS.contains(&value.unwrap().as_str()) {
        return Ok(())
    }

    Err("Invalid tag")
}

pub const ALT: Attribute = Attribute {
    name: "alt",
    desc: "The alt attribute provides alternative information for an image if a user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader).",
    is_valid_value: Some(is_valid_value),
    is_deprecated: None,
    is_valid_tag: Some(is_valid_tag)
};
