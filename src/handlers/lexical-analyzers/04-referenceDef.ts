import { LexerScope, Token, TokenElement } from 'TypeMarkup'

function referenceDefAnalyzer(this: LexerScope) {
    if (this.currElement !== '*') return null

    return new TokenElement(
        Token.ReferenceDef,
        null,
        {
            start: this.cursor,
            end: this.cursor + 1
        }
    )
}

export { referenceDefAnalyzer }
