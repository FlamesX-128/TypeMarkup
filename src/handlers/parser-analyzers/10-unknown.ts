import { ParserScope } from 'TypeMarkup'

function unknownAnalyzer(this: ParserScope) {
    this.invalidElement(
        'error', `Unknown element "${this.currElement!.data}" was found.`,
        this.currElement!.pos
    )
}

export { unknownAnalyzer }
