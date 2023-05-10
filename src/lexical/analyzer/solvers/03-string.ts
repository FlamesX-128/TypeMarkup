import { Token, TokenElement } from 'TypeMarkup'
import { Scope } from '../definitions.ts'

function stringSolver(this: Scope) {
    if (this.currChar !== '\'') return null

    const colStart = this.col

    let escape = false
    let value = ''

    this.next()

    while (
        this.inRange() && (this.currChar !== '\'' || escape)
    ) {
        if (escape === true) {
            escape = false;

            continue
        }

        // @ts-ignore - Typescript doesn't know that this is a string
        if (this.currChar === '\\') {
            escape = true;

            continue
        }

        value += this.currChar
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

export { stringSolver }
