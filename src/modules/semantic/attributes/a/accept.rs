use super::Attribute;

const VALID_TAGS: &'static [&'static str] = &["input"];

fn is_valid_tag(value: Option<String>) -> Result<(), &'static str> {
    if VALID_TAGS.contains(&value.unwrap().as_str()) {
        return Ok(())
    }

    Err("Invalid tag")
}

pub const ACCEPT: Attribute = Attribute {
    name: "accept",
    desc: "The accept attribute specifies the types of files that the server accepts (that can be submitted through a file upload).",
    is_valid_value: None,
    is_deprecated: None,
    is_valid_tag: Some(is_valid_tag)
};
