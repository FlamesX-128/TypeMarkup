import { Node, NodeElement, ParserScope, Tag, Token } from 'TypeMarkup'

function identifierAnalyzer(this: ParserScope) {
    let node: NodeElement<Node> = new NodeElement(
        Node.Element, this.currElement!.data as Tag, this.currElement!.pos
    )

    node.indent = this.indent
    this.assignNodeAttributes(node)

    this.assignLastNodeByLevel(this.values, this.indent, node, this.referenceName)

    while (this.next()) {
        if (this.currElement?.type === Token.Attribute) {
            this.analyzers[Token.Attribute].call(this)

            continue
        }

        if (this.currElement?.type === Token.Identifier) {
            const currNode = new NodeElement(
                Node.Element, this.currElement!.data as Tag, this.currElement!.pos
            )

            node.indent = this.indent

            this.assignNodeAttributes(currNode)

            node.childNode = currNode
            node = currNode

            continue
        }

        if (this.currElement?.type === Token.String) {
            const currNode = new NodeElement(
                Node.Text, this.currElement!.data as string, this.currElement!.pos
            )

            node.indent = this.indent
            this.assignNodeAttributes(currNode)

            node.childNode = currNode
            node = currNode

            continue
        }

        if (this.currElement?.type === Token.EOL)
            break

        throw new Error('Unexpected token')
    }

    node.id = this.referenceDef

    //this.referenceName = null
    this.referenceDef = null

    this.prev()
}

export { identifierAnalyzer }
