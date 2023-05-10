import { Message, Token } from 'TypeMarkup'

import { ParserScope } from '../definitions.ts'

function referenceDeclSolver(this: ParserScope) {
    this.next()

    if (this.currElement?.type !== Token.Identifier) {
        this.emit(
            Message.InvalidReferenceDecl, this.currElement!.pos, Token['Identifier'], this.currElement!.type
        )

        this.prev()

        return 
    }

    this.referenceDecl = this.currElement.data as string
}

export { referenceDeclSolver }
