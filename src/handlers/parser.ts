import { NodeElement, ParserScope, Token, TokenElement } from 'TypeMarkup'

// Analyzers
import { identifierAnalyzer } from './parser-analyzers/01-identifier.ts'
import { attributeAnalyzer } from './parser-analyzers/02-attribute.ts'

import { stringAnalyzer } from './parser-analyzers/03-string.ts'

import { referenceDefAnalyzer } from './parser-analyzers/04-referenceDef.ts'
import { referenceAnalyzer } from './parser-analyzers/05-reference.ts'

import { tabAnalyzer } from './parser-analyzers/07-tab.ts'
import { endOfLineAnalyzer } from './parser-analyzers/08-eol.ts'

//import { macroAnalyzer } from './parser-analyzers/09-macro.ts'
import { unknownAnalyzer } from './parser-analyzers/10-unknown.ts'

const analyzers: Record<string, (this: ParserScope) => void> = {
    [Token.Identifier]: identifierAnalyzer,
    [Token.Attribute]: attributeAnalyzer,

    [Token.String]: stringAnalyzer,

    [Token.ReferenceDef]: referenceDefAnalyzer,
    [Token.Reference]: referenceAnalyzer,

    [Token.Tab]: tabAnalyzer,
    [Token.EOL]: endOfLineAnalyzer,

    //[Token.Macro]: macroAnalyzer,
    [Token.Unknown]: unknownAnalyzer,
}

function analyzer(this: ParserScope): NodeElement[] {
    while (this.inRange()) {
        analyzers[this.currElement!.type]?.call(this)

        this.next()
    }

    return this.values
}

const parser = (tokens: TokenElement[], file: string): NodeElement[] => {
    const scope = new ParserScope(tokens, file)
    scope.analyzers = analyzers

    return analyzer.call(scope)
}

export { parser }
