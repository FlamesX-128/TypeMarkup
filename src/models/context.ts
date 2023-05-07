import { Message, Node, NodeElement, Position, Token, TokenElement } from 'TypeMarkup'

class LexerScope {
    public readonly content: string

    public currElement: string | undefined
    public cursor = 0

    public result: TokenElement[] = []

    public rows: number[] = []
    public row = 0
    public col = 0

    constructor(
        content: string = ''
    ) {
        this.currElement = content.at(0)
        this.content = content;

        [...content.matchAll(/\n/g)].forEach(
            (row) => this.rows.push(row.index!)
        )
    }

    public inRange(): boolean {
        return this.cursor < this.content.length
    }

    private updatePosition(reverse: boolean): boolean {
        this.currElement = this.content[this.cursor += reverse ? -1 : 1]
        this.col += reverse ? -1 : 1

        const row = this.row + 0

        this.row = this.rows.reduce(
            (acc, row) => row < this.cursor ? acc + 1 : acc, 0
        )

        if (row !== this.row) this.col = 0

        return this.inRange()
    }

    public next(): boolean {
        return this.updatePosition(false)
    }

    public prev(): boolean {
        return this.updatePosition(true)
    }
}

class ParserScope {
    public readonly analyzers: Record<Token, (this: ParserScope) => void>
    public readonly content: TokenElement[]

    public currElement: TokenElement | undefined
    public cursor = 0

    public messages: Message[] = []
    public result: NodeElement[] = []

    public attributes: Record<string, string | null> | null = null
    public indent = 0

    public referenceCalls: Record<number, { name: string, first: boolean }> = {}
    public referenceDef: string | null = null

    constructor(analyzers: ParserScope['analyzers'], content: TokenElement[] = []) {
        this.analyzers = analyzers
        this.currElement = content.at(0)
        this.content = content
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

    // - - -
    public invalidAttributesOnText(position: Position) {
        this.messages.push({
            type: 'warning', message: 'An unexpected attributes on text node.', position
        })
    }

    public invalidIndentation(position: Position) {
        this.messages.push({
            type: 'error', message: 'An incorrect level of tabulation has been found.', position
        })
    }

    public unexpectedToken(token: keyof typeof Token, position: Position) {
        this.messages.push({
            type: 'error', message: `An unexpected token "${token}" has been found.`, position
        })
    }

    // - - - 
    public assignLastElement(nodes: NodeElement[], node: NodeElement, indent: number = this.indent): void {
        if (indent === 0) { nodes.push(node); return void 1 }

        const entry = nodes.at(-1)

        if (entry === undefined) {            
            return this.invalidIndentation(node.position)
        }

        if (entry.childNode !== null) {
            return this.assignLastElement([entry.childNode], node, indent)
        }

        if (entry.childNodes === null) {
            entry.childNodes = []
        }

        return this.assignLastElement(entry.childNodes, node, indent - 1)
    }

    public assignElementAttributes(node: NodeElement): void {
        if (node.nodeType === Node.Text && this.attributes !== null)
            this.invalidAttributesOnText(node.position)

        node.attributes = this.attributes ? { ...this.attributes } : null
        this.attributes = null
    }

    // - - -
    public assignReferenceCall(name: string): void {
        this.referenceCalls[this.indent + 0] = { name, first: true }
    }

}

export { LexerScope, ParserScope }
