import { Token, TokenElement } from 'TypeMarkup'
import { Scope } from '../definitions.ts'

function endOfLineSolver(this: Scope) {
    if (['\n', '\r'].includes(this.currChar!) === false) return null

    return new TokenElement(
        Token.EOL,
        null,
        {
            rowStart: this.row,
            colStart: this.col,
            colEnd: this.col + 1,
            rowEnd: this.row + 1
        }
    )
}

export { endOfLineSolver }
