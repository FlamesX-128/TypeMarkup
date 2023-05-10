import { AllTags } from './definitions.ts'

const text = [
    "a",
    "abbr",
    "acronym",
    "b",
    "bdi",
    "bdo",
    "br",
    "cite",
    "code",
    "data",
    "dfn",
    "em",
    "i",
    "kbd",
    "mark",
    "q",
    "rp",
    "rt",
    "rtc",
    "ruby",
    "s",
    "samp",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "time",
    "u",
    "var"
]

const tags: Record<AllTags, { include?: AllTags[], exclude?: AllTags[], singleton?: true } | null> = {
    a: null,
    abbr: null,
    address: null,
    area: { singleton: true },
    article: null,
    aside: null,
    audio: null,
    b: null,
    base: { singleton: true },
    bdi: null,
    bdo: null,
    blockquote: null,
    body: {
        exclude: [
            'html', 'head'
        ]
    },
    br: { singleton: true },
    button: null,
    canvas: {
        include: []
    },
    caption: null,
    cite: null,
    code: null,
    col: { singleton: true },
    colgroup: {
        include: [
            'col', 'div'
        ]
    },
    command: { singleton: true },
    data: null,
    datalist: null,
    dd: null,
    del: null,
    details: null,
    dfn: null,
    dialog: null,
    div: null,
    dl: null,
    dt: null,
    em: null,
    embed: { singleton: true },
    fieldset: null,
    figcaption: null,
    figure: null,
    footer: null,
    form: null,
    h1: {
        include: headersIncluded as AllTags[]
    },
    h2: {
        include: headersIncluded as AllTags[]
    },
    h3: {
        include: headersIncluded as AllTags[]
    },
    h4: {
        include: headersIncluded as AllTags[]
    },
    h5: {
        include: headersIncluded as AllTags[]
    },
    h6: {
        include: headersIncluded as AllTags[]
    },
    head: {
        include: [
            'title', 'style', 'base', 'link', 'meta', 'script', 'noscript'
        ],
    },
    header: null,
    hr: { singleton: true },
    html: { include: ['head', 'body'], },
    i: null,
    iframe: null,
    img: { singleton: true },
    input: { singleton: true },
    ins: null,
    kbd: null,
    keygen: { singleton: true },
    label: null,
    legend: null,
    li: null,
    link: { singleton: true },
    main: null,
    map: null,
    mark: null,
    menu: {
        include: [
            'div',
            'menu',
            'menuitem'
        ]
    },
    menuitem: null,
    meta: { singleton: true },
    meter: null,
    nav: null,
    noscript: null,
    object: null,
    ol: {
        include: [
            'div',
            'li'
        ]
    },
    optgroup: null,
    option: null,
    output: null,
    p: null,
    param: { singleton: true },
    picture: null,
    pre: null,
    progress: null,
    q: null,
    rp: null,
    rt: null,
    ruby: null,
    s: null,
    samp: null,
    script: {
        include: []
    },
    section: null,
    select: null,
    small: null,
    source: { singleton: true },
    span: null,
    strong: null,
    style: {
        include: []
    },
    sub: null,
    summary: null,
    sup: null,
    table: {
        include: [
            "caption",
            "colgroup",
            "col",
            'div',
            "thead",
            "tbody",
            "tfoot",
            "tr",
            "th",
            "td",
        ]
    },
    tbody: {
        include: [
            'div',
            "tr",
            "th",
            "td"
        ]
    },
    td: null,
    template: null,
    textarea: null,
    tfoot: {
        include: [
            'div',
            "tr",
            "th",
            "td"
        ]
    },
    th: null,
    thead: {
        include: [
            'div',
            "tr",
            "th",
            "td"
        ]
    },
    time: null,
    title: null,
    tr: null,
    track: { singleton: true },
    u: null,
    ul: {
        include: [
            'div',
            'li'
        ]
    },
    var: null,
    video: null,
    wbr: { singleton: true },

    applet: null,
    basefont: { singleton: true },
    center: null,
    dir: null,
    font: null,
    frame: { singleton: true },
    frameset: null,
    isindex: { singleton: true },
    noframes: null,
    strike: null,
    tt: null
}

const validTagChild = (tag: string, child: string): boolean => {
    const declaration = tags[tag as AllTags]

    if (declaration === null) return true

    if (
        declaration.exclude !== undefined && declaration.exclude.includes(child as AllTags)
    ) return false

    if (
        declaration.include !== undefined && declaration.include.includes(child as AllTags)
    ) return true

    return false
}

const isSingleton = (tag: string): boolean => {
    const declaration = tags[tag as AllTags]

    if (declaration === null) return false

    return declaration.singleton === true
}

const exists = (tag: string): boolean => {
    return (tag in tags)
}

export * from './definitions.ts'

export {
    validTagChild,
    isSingleton,
    exists
}
