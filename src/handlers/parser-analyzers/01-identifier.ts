import { Node, NodeElement, ParserScope, Tag, Token } from 'TypeMarkup'

function identifierAnalyzer(this: ParserScope) {
    let node: NodeElement<Node> = new NodeElement(Node.Element, this.currElement!.data as Tag)


    node.indent = this.indent

    node.attributes = { ...this.attributes || {} }
    this.attributes = null

    this.assignLastNodeByLevel(this.values, this.indent, node, this.referenceName)

    while (this.next()) {
        if (this.currElement?.type === Token.Attribute) {
            this.analyzers[Token.Attribute].call(this)

            continue
        }

        if (this.currElement?.type === Token.Identifier) {
            const currNode = new NodeElement(Node.Element, this.currElement!.data as Tag)

            node.indent = this.indent

            node.attributes = { ...this.attributes || {} }
            this.attributes = null

            node.childNode = currNode
            node = currNode

            continue
        }

        if (this.currElement?.type === Token.String) {
            const currNode = new NodeElement(Node.Text, this.currElement!.data as string)

            node.indent = this.indent

            node.childNode = currNode
            node = currNode

            continue
        }

        if (this.currElement?.type === Token.EOL)
            break

        throw new Error('Unexpected token')
    }

    console.log(this.referenceName)

    node.id = this.referenceDef

    //this.referenceName = null
    this.referenceDef = null

    this.prev()
}

export { identifierAnalyzer }
