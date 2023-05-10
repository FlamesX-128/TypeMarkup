import * as Attributes from './definitions.ts'
export * from './definitions.ts'

interface Attribute {
    values: (string | RegExp)[] | null,
    void:  boolean | null
}

const globalAttributes: Record<Attributes.GlobalAttributes, Attribute> = {
    accesskey: { values: [/./], void: null },
    class: { values: [/./], void: null },
    contenteditable: { values: ['true', 'false'], void: null },
    dir: { values: ['ltr', 'rtl', 'auto'], void: null },
    draggable: { values: ['true', 'false', 'auto'], void: null },
    hidden: { values: null, void: true },
    id: { values: [/./], void: null },
    lang: { values: [/./], void: null },
    spellcheck: { values: ['true', 'false'], void: null },
    style: { values: [/./], void: null },
    tabindex: { values: [/\d+/], void: null },
    title: { values: [/./], void: null },
    translate: { values: ['yes', 'no'], void: null },
    'aria-*': { values: [/./], void: null },
    'data-*': { values: [/./], void: null }
}

const aTagAttributes: Record<Attributes.ATagAttributes, Attribute> = {
    ...globalAttributes,
    download: {
        values: null,
        void: null
    },
    href: {
        values: null,
        void: null
    },
    hreflang: {
        values: null,
        void: null
    },
    media: {
        values: null,
        void: null
    },
    ping: {
        values: null,
        void: null 
    },
    referrerpolicy: {
        values: [
            'no-referrer', 'no-referrer-when-downgrade', 'origin', 'origin-when-cross-origin',
            'same-origin', 'strict-origin', 'strict-origin-when-cross-origin', 'unsafe-url'
        ],
        void: null
    },
    rel: {
        values: [
            'alternate', 'author', 'bookmark', 'external', 'help', 'license', 'next', 'nofollow',
            'noreferrer', 'noopener', 'noreferrer', 'prev', 'search', 'tag'
        ], void: null
    },
    target: {
        values: ['_blank', '_self', '_parent', '_top'],
        void: null 
    },
    type: {
        values: null,
        void: null 
    }
}

const acronymTagAttributes: Record<Attributes.AcronymTagAttributes, Attribute> = {
    ...globalAttributes
}

const addressTagAttributes = acronymTagAttributes
const appletTagAttributes = acronymTagAttributes

const areaTagAttributes: Record<Attributes.AreaTagAttributes, Attribute> = {
    ...globalAttributes,
    ...aTagAttributes,
    alt: {
        values: null,
        void: null
    },
    coords: {
        values: null,
        void: null
    },
    shape: {
        values: null,
        void: null
    }
}

const articleTagAttributes = acronymTagAttributes
const asideTagAttributes = acronymTagAttributes

const audioTagAttributes: Record<Attributes.AudioTagAttributes, Attribute> = {
    ...globalAttributes,
    autoplay: {
        values: null,
        void: true
    },
    controls: {
        values: null,
        void: true
    },
    loop: {
        values: null,
        void: true
    },
    muted: {
        values: null,
        void: true
    },
    preload: {
        values: ['none', 'metadata', 'auto'],
        void: null
    },
    src: {
        values: null,
        void: null
    }
}

const bTagAttributes = acronymTagAttributes

const baseTagAttributes: Record<Attributes.BaseTagAttributes, Attribute> = {
    ...globalAttributes,
    href: {
        values: null,
        void: null
    },
    target: {
        values: ['_blank', '_self', '_parent', '_top'],
        void: null
    }
}

const basefontTagAttributes = acronymTagAttributes
const bdiTagAttributes = acronymTagAttributes

const bdoTagAttributes: Record<Attributes.BdoTagAttributes, Attribute> = {
    ...globalAttributes,
    dir: {
        values: ['ltr', 'rtl'],
        void: null
    }
}

const bigTagAttributes = acronymTagAttributes

const blockquoteTagAttributes: Record<Attributes.BlockquoteTagAttributes, Attribute> = {
    ...globalAttributes,
    cite: {
        values: null,
        void: null
    }
}

const bodyTagAttributes = acronymTagAttributes
const brTagAttributes = acronymTagAttributes

const buttonTagAttributes: Record<Attributes.ButtonTagAttributes, Attribute> = {
    ...globalAttributes,
    autofocus: {
        values: null,
        void: true,
    },
    disabled: {
        values: null,
        void: true,
    },
    form: {
        values: null,
        void: null,
    },
    formaction: {
        values: null,
        void: null,
    },
    formenctype: {
        values: ['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain'],
        void: null,
    },
    formmethod: {
        values: ['get', 'post'],
        void: null,
    },
    formnovalidate: {
        values: null,
        void: true,
    },
    formtarget: {
        values: ['_blank', '_self', '_parent', '_top'],
        void: null,
    },
    name: {
        values: null,
        void: null,
    },
    type: {
        values: ['button', 'reset', 'submit'],
        void: null,
    },
    value: {
        values: null,
        void: null,
    }
}

