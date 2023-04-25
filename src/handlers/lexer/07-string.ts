import type { Scope } from '../../@types/lexer.ts'
import { Token } from '../../@types/lexer.ts'

function handler(this: Scope): Token | null {
    if (this.currChar !== '\'') return null

    const contentLength = this.content.length
    const cursorStart = this.cursor

    let escape = false, value = ''

    this.updateCursor()

    while (
        this.cursor < contentLength && (this.currChar !== '\'' || escape)
    ) {
        if (escape === true) {
            escape = false;

            continue
        }

        // @ts-ignore - TypeScript thinks this.currChar can be only '\''
        if (this.currChar === '\\') {
            escape = true;

            continue
        }

        value += this.updateCursor()
    }

    //this.cursor--

    return new Token(
        Token.String,
        value,
        {
            start: cursorStart,
            end: this.cursor
        }
    )
}

export default handler
