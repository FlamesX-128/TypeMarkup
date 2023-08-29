use super::Attribute;

const VALID_TAGS: &'static [&'static str] = &["form"];

fn is_valid_value(_value: Option<String>) -> Result<(), &'static str> {
    Ok(())
}

fn is_valid_tag(value: Option<String>) -> Result<(), &'static str> {
    if VALID_TAGS.contains(&value.unwrap().as_str()) {
        return Ok(())
    }

    Err("Invalid tag")
}

pub const ACTION: Attribute = Attribute {
    name: "action",
    desc: "The action attribute specifies where to send the form-data when a form is submitted.",
    is_valid_value: Some(is_valid_value),
    is_deprecated: None,
    is_valid_tag: Some(is_valid_tag)
};
