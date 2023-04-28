import { ParserScope, Token } from 'TypeMarkup'

function attributeAnalyzer(this: ParserScope) {
    this.next()

    if (this.currElement?.type !== Token.Identifier) {
        this.invalidElement(
            'error', `An identifier was expected after the attribute definition, but ${this.currElement!.type} was found.`,
            this.currElement!.pos
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

export { attributeAnalyzer }
