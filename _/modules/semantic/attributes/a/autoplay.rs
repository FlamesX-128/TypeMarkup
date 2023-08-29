use super::Attribute;

const VALID_TAGS: &'static [&'static str] = &["audio", "video"];

fn is_valid_value(value: Option<String>) -> Result<(), &'static str> {
    if value.is_none() {
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

pub const AUTOPLAY: Attribute = Attribute {
    name: "autoplay",
    desc: "When present, the audio/video will automatically start playing as soon as it can do so without stopping.",
    is_valid_value: Some(is_valid_value),
    is_deprecated: None,
    is_valid_tag: Some(is_valid_tag)
};
