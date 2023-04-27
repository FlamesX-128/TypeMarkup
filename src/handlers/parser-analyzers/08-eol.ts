import { ParserScope } from 'TypeMarkup'

function endOfLineAnalyzer(this: ParserScope) {
    this.indent = 0
}

export { endOfLineAnalyzer }
