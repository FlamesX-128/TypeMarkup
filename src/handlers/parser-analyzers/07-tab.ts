import { ParserScope, Token } from 'TypeMarkup'

function tabAnalyzer(this: ParserScope) {
    /*this.next()

    if (this.currElement?.type === Token.EOL) {
        this.invalidElement(
            'warning', `Unnecessary tabulations have been detected in the code.`,
            this.currElement!.pos
        )
    }

    this.prev()

    this.indent++*/

    this.next()

    if (this.currElement?.type !== Token.EOL) {
        this.indent++
        this.prev()

        return
    }

    this.prev()

    this.invalidElement(
        'warning', `Unnecessary tabulations have been detected in the code.`,
        this.currElement!.pos
    )
}

export { tabAnalyzer }
