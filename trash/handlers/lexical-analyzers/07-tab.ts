import { LexerScope, Token, TokenElement } from 'TypeMarkup'

function tabAnalyzer(this: LexerScope) {
    if (this.currElement !== '\t') return null

    return new TokenElement(
        Token.Tab,
        null,
        {
            rowStart: this.row,
            colStart: this.col,
            colEnd: this.col + 1,
            rowEnd: this.row + 1
        }
    )
}

export { tabAnalyzer }
