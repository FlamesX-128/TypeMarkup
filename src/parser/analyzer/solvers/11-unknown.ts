import { Message } from '../../../linter/definitions.ts'
import { ParserScope } from '../definitions.ts'

function unknownSolver(this: ParserScope) {
    this.emit(
        Message.InvalidToken, this.currElement!.pos, this.currElement!.data as string
    )

    this.next()
}

export { unknownSolver }
