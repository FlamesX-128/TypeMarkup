import { ParserScope } from 'TypeMarkup'

function tabAnalyzer(this: ParserScope) {
    this.indent++
}

export { tabAnalyzer }
