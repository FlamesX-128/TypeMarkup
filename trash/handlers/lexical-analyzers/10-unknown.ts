import { LexerScope, Token, TokenElement } from 'TypeMarkup'

function unknownAnalyzer(this: LexerScope) {
    const colStart = this.col
    let value = ''

    do {
        value += this.currElement
        this.next()
    } while (
        this.inRange() && [' ', '\n', '\t'].includes(this.currElement || '') === false
    )

    this.prev()

    return new TokenElement(
        Token.Unknown,
        this.currElement!,
        {
            rowStart: this.row,
            colStart: colStart,
            colEnd: this.col,
            rowEnd: this.row + 1
        }
    )
}

export { unknownAnalyzer }
