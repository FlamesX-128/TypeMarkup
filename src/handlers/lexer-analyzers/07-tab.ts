import { LexerScope, Token, TokenElement } from 'TypeMarkup'

function tabAnalyzer(this: LexerScope) {
    if (this.currElement !== '\t') return null

    return new TokenElement(
        Token.Tab,
        null,
        {
            start: this.cursor,
            end: this.cursor + 1
        }
    )
}

export { tabAnalyzer }
