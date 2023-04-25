import type { Scope, Handler } from '../@types/lexer.ts'
import { Token } from '../@types/lexer.ts'

//
import comment from './lexer/00-comment.ts'
import unknown from './lexer/01-unknown.ts'

import pointer from './lexer/02-pointer.ts'
import reference from './lexer/03-reference.ts'

import attribute from './lexer/04-attribute.ts'
import macro from './lexer/05-macro.ts'

import identifier from './lexer/06-identifier.ts'
import string from './lexer/07-string.ts'

import endLine from './lexer/08-endline.ts'
import tab from './lexer/09-tab.ts'

const solvers: Handler[] = [
    pointer,
    reference,

    attribute,
    macro,

    identifier,
    string,

    endLine,
    tab,

    comment,
    unknown
]

function reader(this: Scope): Token[] {
    const contentLength = this.content.length
    const data: Token[] = []

    while (this.cursor < contentLength) {
        this.currChar = this.content[this.cursor]

        for (const handler of Object.values(solvers)) {
            const token = handler.call(this)

            if (token !== null) {
                data.push(token)

                break
            }
        }

        this.cursor++
    }

    return data
}

const lexer = (content: string): Token[] => {
    const context: Partial<Scope> = {
        content: content,
        cursor: 0,
        updateCursor(this: Scope) {
            const prevChar = this.currChar

            this.cursor++
            this.currChar = this.content[this.cursor]

            return prevChar
        }
    }

    return reader.call(context as Scope)
}

export { lexer, solvers }
