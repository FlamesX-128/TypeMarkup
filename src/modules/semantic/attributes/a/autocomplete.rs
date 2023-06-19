use super::Attribute;

const VALID_VALUES: &'static [&'static str] = &["off", "on"];
const VALID_TAGS: &'static [&'static str] = &["form", "input"];

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

pub const AUTOCOMPLETE: Attribute = Attribute {
    name: "autocomplete",
    desc: "The autocomplete attribute specifies whether a form or an input field should have autocomplete on or off.",
    is_valid_value: Some(is_valid_value),
    is_deprecated: None,
    is_valid_tag: Some(is_valid_tag)
};
