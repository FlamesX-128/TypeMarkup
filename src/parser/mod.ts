/*
| 'Az' // alphabet-case
    | '\'' // string
    | '-'  // attribute
    | '{'  // open-scope
    | '}'  // close-scope
    | '*'  // pointer
    | '>'  // goto
    | '&'  // reference
    | '@'  // decorator
    | ','  // comma
    | '_'  // unknown
*/
import { TokenTypes, LexerToken } from '../types/mod.ts'

const global_attributes = {
    'A-9': [
        'accesskey', 'class', 'id', 'lang', 'style', 'title'
    ],

    'true|false': [
        'contenteditable', 'draggable'
    ],

    'ltr|rtl|auto': [
        'dir',
    ],

    '0-9': [
        'tabindex'
    ],

    '*': [
        'hidden', 'spellcheck', 'translate',
    ]
}

interface Syntax {
    type: 'error' | 'warning' | 'info',
    message: string,
}

// deno-lint-ignore ban-ts-comment
// @ts-ignore
const symbols: {
    [key in TokenTypes]: [TokenTypes, (value: string) => TokenTypes[] | undefined]
} = {
    //'A9': [],
    //'\'': [],
    //'-':  []
    //'{':  [],
    //'}':  [],
    '*':  ['A9', () => ['&', 'A9']],
    '>':  ['A9', () => ['A9']],
    '&':  ['A9', () => ['A9']],
    //'@':  [],
    //',':  [],
    //'_':  [],
}

interface ParserTree {
    reference_name: string,
    pointer_name: string,
    tag_name: string,
    attributes: {
        value: string,
        name: string,
    }[]
    macros: {
        value: string,
        name: string,
    }[]
}

interface ParserScope {
    expected: TokenTypes[],
    tokens: LexerToken<TokenTypes>[],
    token: LexerToken<TokenTypes>,
    cursor: number
}

function parser_reader(this: ParserScope, tree: ParserTree) {
    while (this.cursor < this.tokens.length) {
        if (this.expected.length !== 0) {
            if (this.expected.includes(this.token.type)) {
                this.expected.shift()

            }

        }

        if (this.token.type in symbols) {
            this.expected = [ symbols[this.token.type][0] ]

        }

    }

}

function parser(ss: LexerToken<TokenTypes>[]) {
    return parser_reader.call({
        expected: [],
        tokens: ss,
        token: ss[0],
        cursor: 0
    }, {})
}









console.log(parser([
    { type: "*", pos: { start: 1, end: null }, value: null },
    { type: "A9", pos: { start: 3, end: 7 }, value: "html" },
    { type: "-", pos: { start: 8, end: null }, value: null },
    { type: "A9", pos: { start: 10, end: 14 }, value: "lang" },
    { type: "'", pos: { start: 15, end: 18 }, value: "en" },
    { type: "A9", pos: { start: 20, end: 24 }, value: "html" },
    { type: "&", pos: { start: 26, end: null }, value: null },
    { type: "A9", pos: { start: 28, end: 32 }, value: "html" },
    { type: "A9", pos: { start: 33, end: 37 }, value: "head" },
    { type: "{", pos: { start: 38, end: null }, value: null },
    { type: "-", pos: { start: 41, end: null }, value: null },
    { type: "A9", pos: { start: 43, end: 50 }, value: "charset" },
    { type: "'", pos: { start: 51, end: 57 }, value: "utf-8" },
    { type: "A9", pos: { start: 60, end: 64 }, value: "meta" },
    { type: "-", pos: { start: 67, end: null }, value: null },
    { type: "A9", pos: { start: 69, end: 79 }, value: "http-equiv" },
    { type: "'", pos: { start: 80, end: 96 }, value: "x-ua-compatible" },
    { type: "-", pos: { start: 99, end: null }, value: null },
    { type: "A9", pos: { start: 101, end: 108 }, value: "content" },
    { type: "'", pos: { start: 109, end: 117 }, value: "ie=edge" },
    { type: "A9", pos: { start: 120, end: 124 }, value: "meta" },
    { type: "-", pos: { start: 127, end: null }, value: null },
    { type: "A9", pos: { start: 129, end: 136 }, value: "content" },
    {
      type: "'",
      pos: { start: 137, end: 175 },
      value: "width=device-width, initial-scale=1.0"
    },
    { type: "-", pos: { start: 178, end: null }, value: null },
    { type: "A9", pos: { start: 180, end: 184 }, value: "name" },
    { type: "'", pos: { start: 185, end: 194 }, value: "viewport" },
    { type: "A9", pos: { start: 197, end: 201 }, value: "meta" },
    { type: "}", pos: { start: 202, end: null }, value: null },
    { type: "&", pos: { start: 205, end: null }, value: null },
    { type: "A9", pos: { start: 207, end: 211 }, value: "html" },
    { type: "A9", pos: { start: 212, end: 216 }, value: "body" },
    { type: ">", pos: { start: 217, end: null }, value: null },
    { type: "A9", pos: { start: 219, end: 222 }, value: "div" },
    { type: "{", pos: { start: 223, end: null }, value: null },
    { type: "'", pos: { start: 226, end: 239 }, value: "force insert" },
    { type: "}", pos: { start: 241, end: null }, value: null }
])
)