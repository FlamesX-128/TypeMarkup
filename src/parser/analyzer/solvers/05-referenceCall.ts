import { Message, Token } from 'TypeMarkup'

import { ParserScope } from '../definitions.ts'

function referenceCallSolver(this: ParserScope) {
    this.next()

    if (
        [Token.Identifier, Token.String].includes(this.currElement!.type) === false
    ) {
        this.emit(
            Message.InvalidReferenceCall, this.currElement!.pos, Token['Identifier'], this.currElement!.type
        )

        this.prev()

        return
    }

    this.referenceCall = this.currElement!.data as string
}

export { referenceCallSolver }
