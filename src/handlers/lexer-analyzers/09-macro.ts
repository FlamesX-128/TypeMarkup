import { LexerScope, Token, TokenElement } from 'TypeMarkup'

function macroAnalyzer(this: LexerScope) {
    if (this.currElement !== '@') return null

    return new TokenElement(
        Token.Macro,
        null,
        {
            start: this.cursor,
            end: this.cursor + 1
        }
    )
}

export { macroAnalyzer }
