use super::Attribute;

const VALID_VALUES: &'static [&'static str] = &["false", "true"];
const VALID_TAGS: &'static [&'static str] = &["script"];

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

pub const ASYNC: Attribute = Attribute {
    name: "async",
    desc: "It specifies that the script will be executed asynchronously as soon as it is available.",
    is_valid_value: Some(is_valid_value),
    is_deprecated: None,
    is_valid_tag: Some(is_valid_tag)
};
