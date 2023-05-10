import { Token, TokenElement } from 'TypeMarkup'
import { Scope } from '../definitions.ts'

function tabSolver(this: Scope) {
    if (this.currChar !== '\t') return null

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

export { tabSolver }
