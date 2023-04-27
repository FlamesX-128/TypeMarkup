import { ParserScope, Token } from 'TypeMarkup'

function referenceDefAnalyzer(this: ParserScope) {
    this.next()

    if (this.currElement?.type !== Token.Identifier)
        throw new Error('Expected identifier for reference name')

    this.referenceDef = this.currElement.data as string
}

export { referenceDefAnalyzer }
