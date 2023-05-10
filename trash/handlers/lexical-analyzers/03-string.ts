import { LexerScope, Token, TokenElement } from 'TypeMarkup'

function stringAnalyzer(this: LexerScope) {
    if (this.currElement !== '\'') return null

    const colStart = this.col

    let escape = false
    let value = ''

    this.next()

    while (
        this.inRange() && (this.currElement !== '\'' || escape)
    ) {
        if (escape === true) {
            escape = false;

            continue
        }

        // @ts-ignore - Typescript doesn't know that this is a string
        if (this.currElement === '\\') {
            escape = true;

            continue
        }

        value += this.currElement
        this.next()
    }

    return new TokenElement(
        Token.String,
        value,
        {
            rowStart: this.row,
            colStart: colStart,
            colEnd: this.col + 1,
            rowEnd: this.row + 1
        }
    )
}

export { stringAnalyzer }
