import cloneDeep from "https://cdn.skypack.dev/lodash.clonedeep";

import { NodeElement, TokenElement } from "TypeMarkup";

class Scope<T> {
    public readonly contentSize: number
    public readonly content: T[]

    public currElement?: T
    public cursor = 0

    constructor(
        content: T[] = []
    ) {

        this.contentSize = content.length
        this.content = content

        this.currElement = content[0]
    }

    public inRange(): boolean {
        return this.cursor < this.content.length
    }

    public next(): boolean {
        this.currElement = this.content[++this.cursor]

        return this.inRange()
    }

    public prev(): boolean {
        this.currElement = this.content[--this.cursor]

        return this.inRange()
    }

}

class ParserScope extends Scope<TokenElement> {
    public readonly analyzers: Record<string, (this: ParserScope) => void> = {}
    public readonly values: NodeElement[] = []

    public attributes: Record<string, string | null> | null = null
    public indent = 0

    public referenceName: string | null = null
    public referenceDef: string | null = null

    constructor(
        content: TokenElement[] = []
    ) {
        super(content)
    }

    getLastNodeById(nodes: NodeElement[], referenceName: string | null): NodeElement | null {
        for (const node of nodes) {
            if (node.id === referenceName) return node

            if (node.childNodes !== null)
                return this.getLastNodeById(node.childNodes, referenceName)

            if (node.childNode !== null)
                return this.getLastNodeById([node.childNode], referenceName)
            
        }

        return null
    }

    assignLastNodeByLevel(
        nodes: NodeElement[], indent: number, value: NodeElement,
        referenceName: string | null
    ): NodeElement {
        const node: NodeElement | undefined = nodes[nodes.length - 1]

        console.log(referenceName, indent, node, value)
    
        if (node !== undefined && node.childNode !== null && node.indent <= indent)
            return this.assignLastNodeByLevel([node.childNode], indent, value, referenceName)

        /*if (referenceName !== null) for (const child of nodes) {
            if (child.id !== referenceName) continue
            
            if (child.childNodes === null) child.childNodes = []

            return this.assignLastNodeByLevel(
                child.childNodes, indent, value, referenceName
            )
        }*/

        if (referenceName !== null) {
            const node = this.getLastNodeById(nodes, referenceName)

            console.log("ref: ", node)

            if (node === null) throw new Error('Reference not found')

            if (node.childNodes === null) node.childNodes = []

            return this.assignLastNodeByLevel(
                node.childNodes, indent, value, null
            )
        }

        if (node === undefined && indent !== 0)
            throw new Error('Unexpected level')
    
        if (indent === 0) {
            nodes.push(value)
            return value
        }
    
        if (node.childNodes === null) node.childNodes = []
    
        return this.assignLastNodeByLevel(node.childNodes, indent - 1, value, referenceName)
    }

    assignNodeAttributes(node: NodeElement) {
        node.attributes = this.attributes!
        this.attributes = null
    }

    assignNodeId(node: NodeElement) {
        node.id = this.referenceDef
        this.referenceDef = null
    }
}

class LexerScope extends Scope<string> {
    public readonly values: TokenElement[] = []

    constructor(
        content: string[] = []
    ) {
        super(content)
    }
}

export { LexerScope, ParserScope, Scope }
