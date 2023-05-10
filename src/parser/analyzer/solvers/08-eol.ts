import { ParserScope } from '../definitions.ts'

function endOfLineSolver(this: ParserScope) {
    this.indent = 0
}

export { endOfLineSolver }
