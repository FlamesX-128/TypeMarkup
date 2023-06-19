use super::Attribute;

const VALID_TAGS: &'static [&'static str] = &[];

fn is_deprecated(value: Option<String>) -> Result<(), &'static str> {
    Ok(())
}

pub const ALIGN: Attribute = Attribute {
    name: "align",
    desc: "Specifies the alignment according to surrounding elements.",
    is_valid_value: None,
    is_deprecated: Some(is_deprecated),
    is_valid_tag: None
};
