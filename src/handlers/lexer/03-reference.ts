import type { Scope } from '../../@types/lexer.ts'
import { Token } from '../../@types/lexer.ts'

function handler(this: Scope): Token | null {
    if (this.currChar !== '&') return null

    return new Token(
        Token.Reference,
        null,
        {
            start: this.cursor,
            end: this.cursor + 1
        }
    )
}

export default handler
