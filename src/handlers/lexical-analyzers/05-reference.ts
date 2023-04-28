import { LexerScope, Token, TokenElement } from 'TypeMarkup'

function referenceAnalyzer(this: LexerScope) {
    if (this.currElement !== '&') return null

    return new TokenElement(
        Token.Reference,
        null,
        {
            start: this.cursor,
            end: this.cursor + 1
        }
    )
}

export { referenceAnalyzer }
