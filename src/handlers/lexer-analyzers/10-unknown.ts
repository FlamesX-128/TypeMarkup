import { LexerScope, Token, TokenElement } from 'TypeMarkup'

function unknownAnalyzer(this: LexerScope) {
    return new TokenElement(
        Token.Unknown,
        this.currElement!,
        {
            start: this.cursor,
            end: this.cursor + 1
        }
    )
}

export { unknownAnalyzer }
