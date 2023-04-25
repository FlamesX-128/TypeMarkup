import type { Scope } from '../../@types/lexer.ts'
import { Token } from '../../@types/lexer.ts'

function handler(this: Scope): Token | null {
    if(
        [' '].includes(this.currChar)
    ) return null

    return new Token(
        Token.Unknown,
        this.currChar,
        {
            start: this.cursor,
            end: this.cursor + 1
        }
    )
}

export default handler
