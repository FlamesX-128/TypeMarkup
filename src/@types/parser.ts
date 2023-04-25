import type { Token } from './lexer.ts'

type ConcreteParserTree = {
    name?: string
    attributes: Record<string, string>
    childrens: ConcreteParserTree[]
}

interface Scope {
    content: Token[]

    cursor: number
    currToken: Token

    updateCursor(this: Scope): Token
    backCursor(this: Scope): Token
}

interface LocalScope {
    concretePT: ConcreteParserTree[]
    pointers: Record<string, ConcreteParserTree>
    tabs: number
}

type Handler = (
    this: Scope, local: LocalScope
) => void

type Worker = (
    this: Scope, local: LocalScope
) => boolean

export type { ConcreteParserTree, Worker, Handler, LocalScope, Scope }
