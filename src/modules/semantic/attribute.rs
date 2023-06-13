use lazy_static::lazy_static;

pub struct Deprecated {
    pub version: &'static str,
    pub message: &'static str,
}

pub struct Attribute {
    pub check: Option<fn(String, Option<String>) -> bool>,
    pub deprecated: Option<Deprecated>,
    pub void: bool,
}

impl Attribute {
    fn new(void: bool, check: Option<fn(String, Option<String>) -> bool>, deprecated: Option<Deprecated>) -> Self {
        Self {
            void,
            check,
            deprecated,
        }
    }
}

lazy_static! {
    pub static ref ACCEPT: Attribute = Attribute::new(false, None, None);
    pub static ref ACCEPT_CHARSET: Attribute = Attribute::new(false, None, None);

    pub static ref ACCESSKEY: Attribute = Attribute::new(false, Some(|String, value: Option<String>| {
        match value {
            Some(value) => {
                if value.len() == 1 {
                    true
                } else {
                    false
                }
            },
            None => false,
        }
    }), None);

    pub static ref ACTION: Attribute = Attribute::new(false, None, None);
    pub static ref ALIGN: Attribute = Attribute::new(false, None, None);
    pub static ref ALT: Attribute = Attribute::new(false, None, None);
    pub static ref ASYNC: Attribute = Attribute::new(false, None, None);
    pub static ref AUTOCOMPLETE: Attribute = Attribute::new(false, None, None);
    pub static ref AUTOFOCUS: Attribute = Attribute::new(false, None, None);
    pub static ref AUTOPLAY: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref BGCOLOR: Attribute = Attribute::new(false, None, None);
    pub static ref BORDER: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref CHARSET: Attribute = Attribute::new(false, None, None);
    pub static ref CHECKED: Attribute = Attribute::new(false, None, None);
    pub static ref CITE: Attribute = Attribute::new(false, None, None);
    pub static ref CLASS: Attribute = Attribute::new(false, None, None);
    pub static ref COLOR: Attribute = Attribute::new(false, None, None);
    pub static ref COLS: Attribute = Attribute::new(false, None, None);
    pub static ref COLSPAN: Attribute = Attribute::new(false, None, None);
    pub static ref CONTENT: Attribute = Attribute::new(false, None, None);
    pub static ref CONTENTEDITABLE: Attribute = Attribute::new(false, None, None);
    pub static ref CONTROLS: Attribute = Attribute::new(false, None, None);
    pub static ref COORDS: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref DATA: Attribute = Attribute::new(false, None, None);
    pub static ref DATA_: Attribute = Attribute::new(false, None, None);
    pub static ref DATETIME: Attribute = Attribute::new(false, None, None);
    pub static ref DEFAULT: Attribute = Attribute::new(false, None, None);
    pub static ref DEFER: Attribute = Attribute::new(false, None, None);
    pub static ref DIR: Attribute = Attribute::new(false, None, None);
    pub static ref DIRNAME: Attribute = Attribute::new(false, None, None);
    pub static ref DISABLED: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref DOWNLOAD: Attribute = Attribute::new(false, None, None);
    pub static ref DRAGGABLE: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref ENCTYPE: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref FOR: Attribute = Attribute::new(false, None, None);
    pub static ref FORM: Attribute = Attribute::new(false, None, None);
    pub static ref FORMACTION: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref HEADERS: Attribute = Attribute::new(false, None, None);
    pub static ref HEIGHT: Attribute = Attribute::new(false, None, None);
    pub static ref HIDDEN: Attribute = Attribute::new(false, None, None);
    pub static ref HIGH: Attribute = Attribute::new(false, None, None);
    pub static ref HREF: Attribute = Attribute::new(false, None, None);
    pub static ref HREFLANG: Attribute = Attribute::new(false, None, None);
    pub static ref HTTP_EQUIV: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref ID: Attribute = Attribute::new(false, None, None);
    pub static ref ISMAP: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref KIND: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref LABEL: Attribute = Attribute::new(false, None, None);
    pub static ref LANG: Attribute = Attribute::new(false, None, None);
    pub static ref LIST: Attribute = Attribute::new(false, None, None);
    pub static ref LOOP: Attribute = Attribute::new(false, None, None);
    pub static ref LOW: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref MAX: Attribute = Attribute::new(false, None, None);
    pub static ref MAXLENGTH: Attribute = Attribute::new(false, None, None);
    pub static ref MEDIA: Attribute = Attribute::new(false, None, None);
    pub static ref METHOD: Attribute = Attribute::new(false, None, None);
    pub static ref MIN: Attribute = Attribute::new(false, None, None);
    pub static ref MULTIPLE: Attribute = Attribute::new(false, None, None);
    pub static ref MUTED: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref NAME: Attribute = Attribute::new(false, None, None);
    pub static ref NOVALIDATE: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref ONABORT: Attribute = Attribute::new(false, None, None);
    pub static ref ONAFTERPRINT: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref ONBEFOREPRINT: Attribute = Attribute::new(false, None, None);
    pub static ref ONBEFOREUNLOAD: Attribute = Attribute::new(false, None, None);
    pub static ref ONBLUR: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref ONCANPLAY: Attribute = Attribute::new(false, None, None);
    pub static ref ONCANPLAYTHROUGH: Attribute = Attribute::new(false, None, None);
    pub static ref ONCHANGE: Attribute = Attribute::new(false, None, None);
    pub static ref ONCLICK: Attribute = Attribute::new(false, None, None);
    pub static ref ONCONTEXTMENU: Attribute = Attribute::new(false, None, None);
    pub static ref ONCOPY: Attribute = Attribute::new(false, None, None);
    pub static ref ONCUECHANGE: Attribute = Attribute::new(false, None, None);
    pub static ref ONCUT: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref ONDBLCLICK: Attribute = Attribute::new(false, None, None);
    pub static ref ONDRAG: Attribute = Attribute::new(false, None, None);
    pub static ref ONDRAGEND: Attribute = Attribute::new(false, None, None);
    pub static ref ONDRAGENTER: Attribute = Attribute::new(false, None, None);
    pub static ref ONDRAGLEAVE: Attribute = Attribute::new(false, None, None);
    pub static ref ONDRAGOVER: Attribute = Attribute::new(false, None, None);
    pub static ref ONDRAGSTART: Attribute = Attribute::new(false, None, None);
    pub static ref ONDROP: Attribute = Attribute::new(false, None, None);
    pub static ref ONDURATIONCHANGE: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref ONENDED: Attribute = Attribute::new(false, None, None);
    pub static ref ONERROR: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref ONFOCUS: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref ONHASHCHANGE: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref ONINPUT: Attribute = Attribute::new(false, None, None);
    pub static ref ONINVALID: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref ONKEYDOWN: Attribute = Attribute::new(false, None, None);
    pub static ref ONKEYPRESS: Attribute = Attribute::new(false, None, None);
    pub static ref ONKEYUP: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref ONLOAD: Attribute = Attribute::new(false, None, None);
    pub static ref ONLOADEDDATA: Attribute = Attribute::new(false, None, None);
    pub static ref ONLOADEDMETADATA: Attribute = Attribute::new(false, None, None);
    pub static ref ONLOADSTART: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref ONMOUSEDOWN: Attribute = Attribute::new(false, None, None);
    pub static ref ONMOUSEMOVE: Attribute = Attribute::new(false, None, None);
    pub static ref ONMOUSEOUT: Attribute = Attribute::new(false, None, None);
    pub static ref ONMOUSEOVER: Attribute = Attribute::new(false, None, None);
    pub static ref ONMOUSEUP: Attribute = Attribute::new(false, None, None);
    pub static ref ONMOUSEWHEEL: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref ONOFFLINE: Attribute = Attribute::new(false, None, None);
    pub static ref ONONLINE: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref ONPAGEHIDE: Attribute = Attribute::new(false, None, None);
    pub static ref ONPAGESHOW: Attribute = Attribute::new(false, None, None);
    pub static ref ONPASTE: Attribute = Attribute::new(false, None, None);
    pub static ref ONPAUSE: Attribute = Attribute::new(false, None, None);
    pub static ref ONPLAY: Attribute = Attribute::new(false, None, None);
    pub static ref ONPLAYING: Attribute = Attribute::new(false, None, None);
    pub static ref ONPOPSTATE: Attribute = Attribute::new(false, None, None);
    pub static ref ONPROGRESS: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref ONRATECHANGE: Attribute = Attribute::new(false, None, None);
    pub static ref ONRESET: Attribute = Attribute::new(false, None, None);
    pub static ref ONRESIZE: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref ONSCROLL: Attribute = Attribute::new(false, None, None);
    pub static ref ONSEARCH: Attribute = Attribute::new(false, None, None);
    pub static ref ONSEEKED: Attribute = Attribute::new(false, None, None);
    pub static ref ONSEEKING: Attribute = Attribute::new(false, None, None);
    pub static ref ONSELECT: Attribute = Attribute::new(false, None, None);
    pub static ref ONSTALLED: Attribute = Attribute::new(false, None, None);
    pub static ref ONSTORAGE: Attribute = Attribute::new(false, None, None);
    pub static ref ONSUBMIT: Attribute = Attribute::new(false, None, None);
    pub static ref ONSUSPEND: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref ONTIMEUPDATE: Attribute = Attribute::new(false, None, None);
    pub static ref ONTOGGLE: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref ONUNLOAD: Attribute = Attribute::new(false, None, None);
    pub static ref ONVOLUMECHANGE: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref ONWAITING: Attribute = Attribute::new(false, None, None);
    pub static ref ONWHEEL: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref OPEN: Attribute = Attribute::new(false, None, None);
    pub static ref OPTIMUM: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref PATTERN: Attribute = Attribute::new(false, None, None);
    pub static ref PLACEHOLDER: Attribute = Attribute::new(false, None, None);
    pub static ref POSTER: Attribute = Attribute::new(false, None, None);
    pub static ref PRELOAD: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref READONLY: Attribute = Attribute::new(false, None, None);
    pub static ref REL: Attribute = Attribute::new(false, None, None);
    pub static ref REQUIRED: Attribute = Attribute::new(false, None, None);
    pub static ref REVERSED: Attribute = Attribute::new(false, None, None);
    pub static ref ROWS: Attribute = Attribute::new(false, None, None);
    pub static ref ROWSPAN: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref SANDBOX: Attribute = Attribute::new(false, None, None);
    pub static ref SCOPE: Attribute = Attribute::new(false, None, None);
    pub static ref SELECTED: Attribute = Attribute::new(false, None, None);
    pub static ref SHAPE: Attribute = Attribute::new(false, None, None);
    pub static ref SIZE: Attribute = Attribute::new(false, None, None);
    pub static ref SIZES: Attribute = Attribute::new(false, None, None);
    pub static ref SPAN: Attribute = Attribute::new(false, None, None);
    pub static ref SPELLCHECK: Attribute = Attribute::new(false, None, None);
    pub static ref SRC: Attribute = Attribute::new(false, None, None);
    pub static ref SRCDOC: Attribute = Attribute::new(false, None, None);
    pub static ref SRCLANG: Attribute = Attribute::new(false, None, None);
    pub static ref SRCSET: Attribute = Attribute::new(false, None, None);
    pub static ref START: Attribute = Attribute::new(false, None, None);
    pub static ref STEP: Attribute = Attribute::new(false, None, None);
    pub static ref STYLE: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref TABINDEX: Attribute = Attribute::new(false, None, None);
    pub static ref TARGET: Attribute = Attribute::new(false, None, None);
    pub static ref TITLE: Attribute = Attribute::new(false, None, None);
    pub static ref TRANSLATE: Attribute = Attribute::new(false, None, None);
    pub static ref TYPE: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref USEMAP: Attribute = Attribute::new(false, None, None);
    pub static ref VALUE: Attribute = Attribute::new(false, None, None);
}

lazy_static! {
    pub static ref WIDTH: Attribute = Attribute::new(false, None, None);
    pub static ref WRAP: Attribute = Attribute::new(false, None, None);
}
