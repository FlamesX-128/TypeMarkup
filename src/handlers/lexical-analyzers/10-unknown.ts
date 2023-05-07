import { LexerScope, Token, TokenElement } from 'TypeMarkup'

function unknownAnalyzer(this: LexerScope) {
    /*const cursorStart = this.cursor
    let value = ''

    while(
        this.inRange() && [' ', '\n', '\t'].indexOf(this.currElement!) === -1
    ) {
        value += this.currElement
        this.next()
    }*/

    return new TokenElement(
        Token.Unknown,
        this.currElement!,
        {
            rowStart: this.row,
            colStart: this.col,
            colEnd: this.col + 1,
            rowEnd: this.row + 1
        }
    )
}

export { unknownAnalyzer }
