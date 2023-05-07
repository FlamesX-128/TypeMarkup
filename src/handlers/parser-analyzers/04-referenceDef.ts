import { ParserScope, Token } from 'TypeMarkup'

function referenceDefAnalyzer(this: ParserScope) {
    this.next()

    if (this.currElement?.type !== Token.Identifier) {
        /*this.invalidElement(
            'error', `An identifier was expected after the reference definition, but ${this.currElement!.type} was found.`,
            this.currElement!.pos
        )*/

        this.prev()

        return 
    }

    this.referenceDef = this.currElement.data as string
}

export { referenceDefAnalyzer }
