import { LexerScope, Token, TokenElement } from 'TypeMarkup'

function spaceAnalyzer(this: LexerScope) {
    if (this.currElement !== ' ') return null

    return new TokenElement(
        Token.Space,
        null,
        {
            rowStart: this.row,
            colStart: this.col,
            colEnd: this.col + 1,
            rowEnd: this.row + 1
        }
    )
}

export { spaceAnalyzer }
