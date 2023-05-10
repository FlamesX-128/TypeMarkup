import { AllTags } from 'TypeMarkup'

interface TagDefinition {
    name: AllTags,
    attributesIncluded?: string[]
    attributesExcluded?: string[]
    childrenExcluded?: AllTags[]
    childrenIncluded?: AllTags[]
    version?: string
}

const html: TagDefinition = {
    name: 'html',
    childrenIncluded: [
        'head',
        'body'
    ]
}

const head: TagDefinition = {
    name: 'head',
    childrenIncluded: [
        'title',
        'style',
        'base',
        'link',
        'meta',
        'script',
        'noscript'
    ]
}

const body: TagDefinition = {
    name: 'body',
    childrenExcluded: [
        'head',
        'body'
    ]
}

