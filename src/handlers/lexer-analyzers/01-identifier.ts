import { LexerScope, Token, TokenElement } from 'TypeMarkup'

function identifierAnalyzer(this: LexerScope) {
    if (this.currElement!.match(/[A-z]/) === null) return null

    const start = this.cursor
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
            start: start,
            end: this.cursor
        }
    )
}

export { identifierAnalyzer }
