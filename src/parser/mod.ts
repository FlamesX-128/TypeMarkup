import { MessageElement, NodeElement, Scope, TokenElement } from 'TypeMarkup'

import { PostParserScope } from './post-analyzer/definitions.ts'
import { ParserScope } from './analyzer/definitions.ts'

import { analyzer, solvers } from './analyzer/mod.ts'
import { postAnalyzer } from './post-analyzer/mod.ts'
import { preAnalyzer } from './pre-analyzer/mod.ts'

const parserAnalyzer = (filePath: string, identifiers: TokenElement[]): [MessageElement[], NodeElement[]] => {
    const preAnalyzerScope = new Scope<TokenElement>(filePath, identifiers)
    const preAnalyzerResult = preAnalyzer.call(preAnalyzerScope)

    const parserScope = new ParserScope(filePath, preAnalyzerResult, solvers)
    const [parserMessages, parserNodes] = analyzer.call(parserScope)

    const postParserScope = new PostParserScope(filePath, parserNodes)
    const [postParserMessages, postParserNodes] = postAnalyzer.call(postParserScope)

    return [
        parserMessages.concat(postParserMessages), postParserNodes
    ]
}

export { parserAnalyzer }
