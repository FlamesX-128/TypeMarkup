import { Message, Token } from 'TypeMarkup'

import { ParserScope } from '../definitions.ts'

function attributeSolver(this: ParserScope) {
    this.next()

    if (this.currElement?.type !== Token.Identifier) {
        this.emit(
            Message.InvalidAttributeDecl, this.currElement!.pos, Token['Identifier'], this.currElement!.type
        )

        return this.prev()
    }

    const name = this.currElement.data as string
    this.next()

    const value = this.currElement?.data as string

    if (this.attributes === null) this.attributes = {}
    this.attributes[name] = value

    if (!value) this.prev()
}

export { attributeSolver }
