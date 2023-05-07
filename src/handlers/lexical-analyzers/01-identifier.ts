import { LexerScope, Token, TokenElement } from 'TypeMarkup'

function identifierAnalyzer(this: LexerScope) {
    if (this.currElement!.match(/[A-z]/) === null) return null

    const colStart = this.col
    let value = ''

    do {
        value += this.currElement
        this.next()
    } while (
        this.inRange() && this.currElement!.match(/[A-z]|[-]|[0-9]/) !== null
    )

    this.prev()

    return new TokenElement(
        Token.Identifier,
        value,
        {
            rowStart: this.row,
            colStart: colStart,
            colEnd: this.col + 1,
            rowEnd: this.row + 1
        }
    )
}

export { identifierAnalyzer }
