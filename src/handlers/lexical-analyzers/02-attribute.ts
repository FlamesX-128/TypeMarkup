import { LexerScope, Token, TokenElement } from 'TypeMarkup'

function attributeAnalyzer(this: LexerScope) {
    if (this.currElement !== '-') return null

    return new TokenElement(
        Token.Attribute,
        null,
        {
            start: this.cursor,
            end: this.cursor + 1
        }
    )
}

export { attributeAnalyzer }
