import { ParserScope, Token } from 'TypeMarkup'

function attributeAnalyzer(this: ParserScope) {
    this.next()

    if (this.currElement?.type !== Token.Identifier)
        throw new Error('Expected identifier for attribute name')

    const name = this.currElement.data as string
    this.next()

    const value = this.currElement?.data as string

    if (this.attributes === null) this.attributes = {}
    this.attributes[name] = value
}

export { attributeAnalyzer }
