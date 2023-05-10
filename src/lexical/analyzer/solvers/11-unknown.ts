import { Token, TokenElement } from 'TypeMarkup'
import { Scope } from '../definitions.ts'

function unknownSolver(this: Scope) {
    const colStart = this.col
    let value = ''

    do {
        value += this.currChar
        this.next()
    } while (
        this.inRange() && [' ', '\n', '\t'].includes(this.currChar || '') === false
    )

    this.prev()

    return new TokenElement(
        Token.Unknown,
        this.currChar!,
        {
            rowStart: this.row,
            colStart: colStart,
            colEnd: this.col,
            rowEnd: this.row + 1
        }
    )
}

export { unknownSolver }
