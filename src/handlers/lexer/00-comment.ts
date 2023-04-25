import type { Scope } from '../../@types/lexer.ts'
import { Token } from '../../@types/lexer.ts'

function handler(this: Scope): Token | null {
    if(this.currChar !== '#') return null

    const contentLength = this.content.length

    while (
        this.cursor < contentLength && ['\n', '\r'].includes(this.currChar) === false
    ) {
        this.updateCursor()
    }

    return null
}

export default handler
