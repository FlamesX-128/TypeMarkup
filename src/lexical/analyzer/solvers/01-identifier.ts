import { Token, TokenElement } from 'TypeMarkup'
import { Scope } from '../definitions.ts'

function identifierSolver(this: Scope) {
    if (this.currChar!.match(/[A-z]/) === null) return null

    const colStart = this.col
    let value = ''

    do {
        value += this.currChar
        this.next()
    } while (
        this.inRange() && this.currChar!.match(/[A-z]|[-]|[0-9]/) !== null
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

export { identifierSolver }
