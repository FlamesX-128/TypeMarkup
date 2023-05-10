import { Message, MessageElement, Node, NodeElement, Position, Scope, TokenElement } from 'TypeMarkup'

class ParserScope extends Scope<TokenElement> {
    public readonly analyzers: Record<string, (this: ParserScope) => void> = {}
    public messages: MessageElement[] = []

    public attributes: Record<string, string | null> | null = null

    public referenceDecl: string | null = null
    public referenceCall: string | null = null

    public nodes: NodeElement[] = []
    public indent = 0

    constructor(filePath: string, elements: TokenElement[], analyzers: ParserScope['analyzers']) {
        super(filePath, elements)

        this.analyzers = analyzers
    }

    public emit(type: Message, pos: Position, ...args: any[]) {
        this.messages.push(new MessageElement(type, pos, ...args))
    }

    // - - -
    public assignChildNode(node: NodeElement, indent: number = this.indent, nodes: NodeElement[] = this.nodes): void {
        if (indent <= 0) { nodes.push(node); return void 1 }

        const entry = nodes.at(-1)

        if (entry === undefined) {
            return this.emit(Message.WrongIndent, node.position, this.indent)
        }

        if (entry.childNode !== null) {
            return this.assignChildNode(node, indent, [entry.childNode])
        }

        if (entry.childNodes === null) {
            entry.childNodes = []
        }

        return this.assignChildNode(node, indent - 1, entry.childNodes)
    }

    public assignNodeAttributes(node: NodeElement): void {
        if (node.nodeType === Node.Text && this.attributes !== null) {
            this.emit(Message.WrongTextAttributes, node.position)
            this.attributes = null

            return
        }

        node.attributes = this.attributes ? { ...this.attributes } : null
        this.attributes = null
    }

    public assignNodeReferenceDecl(node: NodeElement): void {
        node.id = this.referenceDecl
        this.referenceDecl = null
    }

    public assignNodeReferenceCall(node: NodeElement): void {
        node.redirect = this.referenceCall
        this.referenceCall = null
    }

}

export { ParserScope }
