import { ParserScope, Token } from 'TypeMarkup'

function referenceAnalyzer(this: ParserScope) {
    this.next()

    if (
        [Token.Identifier, Token.String].includes(this.currElement!.type) === false
    )
        throw new Error('Expected identifier for reference name')

    this.referenceName = this.currElement!.data as string
}

export { referenceAnalyzer }
