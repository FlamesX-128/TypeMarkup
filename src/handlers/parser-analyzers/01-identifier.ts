import { Node, NodeElement, ParserScope, Tag, Token } from 'TypeMarkup'

function identifierAnalyzer(this: ParserScope) {
    let node: NodeElement<Node> = new NodeElement(
        Node.Element, this.currElement!.data as Tag, this.currElement!.pos
    )

    this.assignElementAttributes(node)
    node.indent = this.indent + 0

    this.assignLastElement(this.result, node)

    while (this.next()) {
        if (this.currElement?.type === Token.Attribute) {
            this.analyzers[Token.Attribute].call(this)

            continue
        }

        if (this.currElement?.type === Token.Identifier) {
            const currNode = new NodeElement(
                Node.Element, this.currElement!.data as Tag, this.currElement!.pos
            )

            this.assignElementAttributes(currNode)
            node.indent = this.indent + 0

            node.childNode = currNode
            node = currNode

            continue
        }

        if (this.currElement?.type === Token.String) {
            const currNode = new NodeElement(
                Node.Text, this.currElement!.data as string, this.currElement!.pos
            )

            this.assignElementAttributes(currNode)
            node.indent = this.indent + 0

            node.childNode = currNode
            node = currNode

            continue
        }

        break
    }

    while (this.inRange()) {
        if (this.currElement!.type === Token.EOL) break

        this.unexpectedToken(this.currElement!.toString(), this.currElement!.pos)
        this.next()
    }

    node.id = this.referenceDef

    this.referenceDef = null

    for (const [indent, entry] of Object.entries(this.referenceCalls)) {
        if (entry.first === true) {
            entry.first = false
            continue
        }

        if (this.indent > +indent) continue

        this.referenceCalls = {
            ...Object.fromEntries(
                Object.entries(this.referenceCalls).filter(([i, _]) => this.indent <= +i)
            ),
        }
    }

    this.prev()
}

export { identifierAnalyzer }
