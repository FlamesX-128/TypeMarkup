import { LexerScope, Token, TokenElement } from 'TypeMarkup'

function spaceAnalyzer(this: LexerScope) {
    if (this.currElement !== ' ') return null

    return new TokenElement(
        Token.Space,
        null,
        {
            start: this.cursor,
            end: this.cursor + 1
        }
    )
}

export { spaceAnalyzer }
