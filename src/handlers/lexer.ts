import { LexerScope, Token, TokenElement } from 'TypeMarkup'

// Analyzers
import { commentAnalyzer } from './lexer-analyzers/00-comment.ts'

import { identifierAnalyzer } from './lexer-analyzers/01-identifier.ts'
import { attributeAnalyzer } from './lexer-analyzers/02-attribute.ts'

import { stringAnalyzer } from './lexer-analyzers/03-string.ts'

import { referenceDefAnalyzer } from './lexer-analyzers/04-referenceDef.ts'
import { referenceAnalyzer } from './lexer-analyzers/05-reference.ts'

import { spaceAnalyzer } from './lexer-analyzers/06-space.ts'
import { tabAnalyzer } from './lexer-analyzers/07-tab.ts'
import { endOfLineAnalyzer } from './lexer-analyzers/08-eol.ts'

import { macroAnalyzer } from './lexer-analyzers/09-macro.ts'
import { unknownAnalyzer } from './lexer-analyzers/10-unknown.ts'

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
            if (token.type !== Token.Space)
                this.values.push(token)
        }

        this.next()
    }

    return this.values
}

const lexer = (content: string): TokenElement[] => {
    return analyzer.call(new LexerScope([...content]))
}

export { lexer }
