import { LexerScope, Token, TokenElement } from 'TypeMarkup'

// Analyzers
import { commentAnalyzer } from './lexical-analyzers/00-comment.ts'

import { identifierAnalyzer } from './lexical-analyzers/01-identifier.ts'
import { attributeAnalyzer } from './lexical-analyzers/02-attribute.ts'

import { stringAnalyzer } from './lexical-analyzers/03-string.ts'

import { referenceDefAnalyzer } from './lexical-analyzers/04-referenceDef.ts'
import { referenceAnalyzer } from './lexical-analyzers/05-reference.ts'

import { spaceAnalyzer } from './lexical-analyzers/06-space.ts'
import { tabAnalyzer } from './lexical-analyzers/07-tab.ts'
import { endOfLineAnalyzer } from './lexical-analyzers/08-eol.ts'

import { macroAnalyzer } from './lexical-analyzers/09-macro.ts'
import { unknownAnalyzer } from './lexical-analyzers/10-unknown.ts'

const analyzers: ((this: LexerScope) => TokenElement | null)[] = [
    commentAnalyzer,

    identifierAnalyzer,
    attributeAnalyzer,

    stringAnalyzer,

    referenceDefAnalyzer,
    referenceAnalyzer,

    spaceAnalyzer,
    tabAnalyzer,
    endOfLineAnalyzer,

    macroAnalyzer,
    unknownAnalyzer
]

function analyzer(this: LexerScope): TokenElement[] {
    while (this.inRange()) {
        const token = analyzers
            .map(
                (analyzer) => analyzer.call(this)
            )
            .filter(
                (token) => token !== null
            )[0]

        if (token !== null) {
            if (token.type !== Token.Space) this.result.push(token)
        }

        this.next()
    }

    return this.result
}

const lexer = (content: string): TokenElement[] => {
    return analyzer.call(new LexerScope(content))
}

export { lexer }
