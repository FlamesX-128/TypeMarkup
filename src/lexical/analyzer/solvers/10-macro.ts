import { Token, TokenElement } from 'TypeMarkup'
import { Scope } from '../definitions.ts'

function macroSolver(this: Scope) {
    if (this.currChar !== '@') return null

    return new TokenElement(
        Token.Macro,
        null,
        {
            rowStart: this.row,
            colStart: this.col,
            colEnd: this.col + 1,
            rowEnd: this.row + 1
        }
    )
}

export { macroSolver }
