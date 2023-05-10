import { Message, NodeElement, ParserScope, Token, TokenElement } from 'TypeMarkup'

// Analyzers
import { identifierAnalyzer } from './parser-analyzers/01-identifier.ts'
import { attributeAnalyzer } from './parser-analyzers/02-attribute.ts'

import { stringAnalyzer } from './parser-analyzers/03-string.ts'

import { referenceDefAnalyzer } from './parser-analyzers/04-referenceDef.ts'
import { referenceAnalyzer } from './parser-analyzers/05-reference.ts'

import { tabAnalyzer } from './parser-analyzers/07-tab.ts'
import { endOfLineAnalyzer } from './parser-analyzers/08-eol.ts'

import { macroAnalyzer } from './parser-analyzers/09-macro.ts'
import { unknownAnalyzer } from './parser-analyzers/10-unknown.ts'
import { MacroScope } from '../core/import.ts'

const analyzers: Record<number, (this: ParserScope) => void> = {
    [Token.Identifier]: identifierAnalyzer,
    [Token.Attribute]: attributeAnalyzer,

    [Token.String]: stringAnalyzer,

    [Token.ReferenceDef]: referenceDefAnalyzer,
    [Token.Reference]: referenceAnalyzer,

    [Token.Tab]: tabAnalyzer,
    [Token.EOL]: endOfLineAnalyzer,

    [Token.Unknown]: unknownAnalyzer,
}

function preAnalyzer(identifiers: TokenElement[]): TokenElement[] {
    /*for (const identifier of identifiers) {
        if (identifier.type === Token.Macro) {
            macroAnalyzer.call(new MacroScope(), identifier)
        }
    }*/

    return [] 
}

function analyzer(this: ParserScope): NodeElement[] {
    while (this.inRange()) {
        analyzers[this.currElement!.type]?.call(this)

        this.next()
    }

    return this.result
}

function posAnalyzer(this: ParserScope, nodes: NodeElement[]): NodeElement[] {
    let node = nodes.find((node) => node.redirect !== null)

    while (node !== undefined) {
        if (node.childNodes !== null) {
            posAnalyzer.call(this, node.childNodes)
        }

        const elementIndex = nodes.findLastIndex(
            (element) => element.id === node!.redirect
        )

        let element = nodes[elementIndex]

        if (elementIndex === -1) {
            this.invalidReferenceCall(node.redirect!, node.position)

            nodes.splice(nodes.indexOf(node!), 1)
            node = nodes.find((node) => node.redirect !== null)

            continue
        }

        while (element.childNode !== null) {
            element = element.childNode
        }

        if (element.childNodes === null) {
            element.childNodes = []
        }

        element.childNodes.push(node!)
        nodes.splice(nodes.indexOf(node!), 1)

        node = nodes.find((node) => node.redirect !== null)
    }

    return nodes
}

const parser = (filePath: string, tokens: TokenElement[]): [Message[], NodeElement[]] => {
    const parserScope = new ParserScope(analyzers, filePath, tokens)

    return [parserScope.messages, posAnalyzer.call(
        parserScope, analyzer.call(parserScope)
    )]
}

export { parser }
