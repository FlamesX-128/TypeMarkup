// deno-lint-ignore-file no-explicit-any
import { Scope, LexerToken, Token, TokenTypes } from '../types/mod.ts'
import { TEXT_PATTERN, END_LINE_PATTERN, BLANK_PATTERN } from '../misc/mod.ts'

const basic_symbols = [
    '{',  // scope-start
    '}',  // scope-end
    '-',  // attribute
    '*',  // pointer
    '>',  // goto
    '&',  // reference
    '@',  // decorator
    ',',  // comma
]

function lexer_analyzer(this: Scope): LexerToken<any> | undefined {
    if (BLANK_PATTERN.includes(this.char)) return undefined

    if (basic_symbols.includes(this.char)) {
        return new Token(
            (this.char as TokenTypes), { start: this.cursor, end: null }, null
        )
    
    }

    if (this.char === '#') {
        while (!END_LINE_PATTERN.includes(this.char))
            this.update_cursor()

        return undefined
    }

    if (this.char === '\'') {
        let content = '', escape = false
        const start = this.cursor

        this.update_cursor()

        while (
            this.cursor < this.document.length &&
            this.char !== '\'' || escape
        ) {
            if (escape) { escape = false; continue }
            else if ((this.char as string) === '\\') escape = true

            content += this.char
            this.update_cursor()
        }

        return new Token(
            '\'', { start: start, end: this.cursor }, content
        )

    }

    if (TEXT_PATTERN.includes(this.char)) {
        const start = this.cursor
        let content = ''

        while (
            this.cursor < this.document.length &&
            TEXT_PATTERN.includes(this.char)
        ) {
            content += this.char
            this.update_cursor()
        }

        return new Token(
            'A9', { start: start, end: this.cursor }, content
        )

    }

    return new Token(
        '_', { start: this.cursor, end: null }, null
    )

}

function lexer_reader(this: Scope): LexerToken<any>[] {
    const data: LexerToken<any>[] = []

    while (this.cursor < this.document.length) {
        const token = lexer_analyzer.call(this)
        if (token) data.push(token)

        this.update_cursor()
    }

    return data
}

const lexer = (str: string): LexerToken<any>[] => lexer_reader.call({
    cursor: 0, document: str, char: str[0], start: 0,

    update_cursor() {
        this.char = this.document[++this.cursor]?.toLowerCase()

    }

})

console.log(lexer(`
* html - lang 'en' html

& html head {
	- charset 'utf-8'
	meta

	- http-equiv 'X-UA-Compatible'
	- content 'IE=edge'
	meta

	- content 'width=device-width, initial-scale=1.0'
	- name 'viewport'
	meta
}

& html body > div {
	'force insert'
}

`))

export { lexer };
