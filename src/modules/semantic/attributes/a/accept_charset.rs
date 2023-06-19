use super::Attribute;

const VALID_TAGS: &'static [&'static str] = &["form"];

fn is_valid_value(value: Option<String>) -> Result<(), &'static str> {
    Ok(())
}

fn is_valid_tag(value: Option<String>) -> Result<(), &'static str> {
    if VALID_TAGS.contains(&value.unwrap().as_str()) {
        return Ok(())
    }

    Err("Invalid tag")
}

pub const ACCEPT_CHARSET: Attribute = Attribute {
    name: "accept-charset",
    desc: "The accept-charset attribute specifies the character encodings that are to be used for the form submission.",
    is_valid_value: Some(is_valid_value),
    is_deprecated: None,
    is_valid_tag: Some(is_valid_tag)
};
