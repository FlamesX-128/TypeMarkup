import { ParserScope, Token } from 'TypeMarkup'

function referenceAnalyzer(this: ParserScope) {
    this.next()

    if (
        [Token.Identifier, Token.String].includes(this.currElement!.type) === false
    ) {
        /*this.invalidElement(
            'error', `An identifier was expected after the reference call, but ${this.currElement!.type} was found.`,
            this.currElement!.pos
        )*/

        this.prev()

        return
    }

    this.assignReferenceCall(this.currElement!.data as string)
}

export { referenceAnalyzer }
