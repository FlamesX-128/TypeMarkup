import type { Scope } from '../../@types/lexer.ts'
import { Token } from '../../@types/lexer.ts'

function handler(this: Scope): Token | null {
    if (this.currChar.match(/[A-z]/) === null) return null

    const contentLength = this.content.length
    const start = this.cursor

    let value = ''

    while (
        this.cursor < contentLength && this.currChar.match(/[A-z]|[-]/) !== null
    ) {
        value += this.updateCursor()
    }

    this.cursor--

    return new Token(
        Token.Identifier,
        value,
        {
            start: start,
            end: this.cursor
        }
    )
}

export default handler
