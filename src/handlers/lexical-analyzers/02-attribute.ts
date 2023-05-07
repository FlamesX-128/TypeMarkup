import { LexerScope, Token, TokenElement } from 'TypeMarkup'

function attributeAnalyzer(this: LexerScope) {
    if (this.currElement !== '-') return null

    return new TokenElement(
        Token.Attribute,
        null,
        {
            rowStart: this.row,
            colStart: this.col,
            colEnd: this.col + 1,
            rowEnd: this.row + 1
        }
    )
}

export { attributeAnalyzer }
