import { Node, NodeElement, Token, TokenElement } from "TypeMarkup";

import * as color from "https://deno.land/std@0.185.0/fmt/colors.ts";

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

const singletonTags = [
    'area',
    'base',
    'br',
    'col',
    'embed',
    'hr',
    'img',
    'input',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr'
];

class ParserScope extends Scope<TokenElement> {
    public analyzers: Record<string, (this: ParserScope) => void> = {}
    public readonly values: NodeElement[] = []
    public readonly file: string

    public attributes: Record<string, string | null> | null = null
    public indent = 0

    public referenceName: string | null = null
    public referenceDef: string | null = null

    constructor(
        content: TokenElement[] = [], file: string
    ) {
        super(content)
        this.file = file
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

        if (node !== undefined && node.childNode !== null && node.indent <= indent)
            return this.assignLastNodeByLevel([node.childNode], indent, value, referenceName)

        if (referenceName !== null) {
            const node = this.getLastNodeById(nodes, referenceName)

            if (node === null) {
                this.invalidElement(
                    'error', `The reference ${referenceName} was not found at the current tabulation level in the code.`,
                    this.currElement!.pos
                )

                return value
            }

            if (node.childNodes === null) node.childNodes = []

            return this.assignLastNodeByLevel(
                node.childNodes, indent, value, null
            )
        }

        if (
            node !== undefined && singletonTags.includes(node.data) &&
            (node.childNodes !== null || node.childNode !== null)
        ) {
            this.invalidElement(
                'warning', `The tag "${node.data}" cannot have children as it is a singleton tag.`,
                this.currElement!.pos
            )
        }

        if (node === undefined && indent !== 0) {
            this.invalidElement(
                'error', 'An incorrect level of tabulation has been detected in the code.',
                this.currElement!.pos
            )

            return value
        }

        if (indent === 0) {
            nodes.push(value)
            return value
        }

        if (node.childNodes === null) node.childNodes = []

        return this.assignLastNodeByLevel(node.childNodes, indent - 1, value, referenceName)
    }

    assignNodeAttributes(node: NodeElement) {
        if (
            node.nodeType === Node.Text && this.attributes !== null
        ) this.invalidAttributeOnTextNode(node)

        node.attributes = { ...this.attributes || {} }
        this.attributes = null
    }

    assignNodeId(node: NodeElement) {
        node.id = this.referenceDef
        this.referenceDef = null
    }

    // - - -
    invalidElement(type: 'error' | 'warning', message: string, pos: NodeElement['pos']) {
        let EOL_1 = pos.start - 1
        let EOL_2 = -1

        for (let i = pos.start; i >= 0; i--) {
            if (this.file[i] !== '\n') continue

            EOL_1 = i
            break
        }

        for (let i = pos.end!; i <= this.file.length; i++) {
            if (this.file[i] !== '\n') continue

            EOL_2 = i
            break
        }

        const colorType = type === 'error' ? color.red : color.yellow

        console.log(
            colorType(type) + `: ${message}\n`
            + `  ${pos.start} -> ` + color.underline(`${this.file.slice(EOL_1 + 1, EOL_2).replaceAll('\t', '')}\n`)
        )
    }

    invalidAttributeOnTextNode(node: NodeElement) {
        this.invalidElement('warning', 'Unexpected attribute on text node.', node.pos)
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
