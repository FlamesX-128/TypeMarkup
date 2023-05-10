import { Message, Node, NodeElement, Tag, Token } from 'TypeMarkup'

import { ParserScope } from '../definitions.ts'

function identifierSolver(this: ParserScope) {
    let node: NodeElement<Node> = new NodeElement(
        Node.Element, this.currElement!.data as Tag, this.currElement!.pos
    )

    this.assignNodeReferenceDecl(node)
    this.assignNodeReferenceCall(node)

    this.assignChildNode(node)

    // this is used ???
    //node.indent = this.indent + 0

    /*node.id = this.referenceDef
    this.referenceDef = null

    node.redirect = this.referenceCall
    this.referenceCall = null*/

    //this.assignLastElement(this.result, node)

    while (this.next()) {
        if (this.currElement?.type === Token.Attribute) {
            this.analyzers[Token.Attribute].call(this)

            continue
        }

        if (this.currElement?.type === Token.Identifier) {
            const currNode = new NodeElement(
                Node.Element, this.currElement!.data as Tag, this.currElement!.pos
            )

            this.assignNodeAttributes(currNode)
            //node.indent = this.indent + 0

            node.childNode = currNode
            node = currNode

            continue
        }

        if (this.currElement?.type === Token.String) {
            const currNode = new NodeElement(
                Node.Text, this.currElement!.data as string, this.currElement!.pos
            )

            this.assignNodeAttributes(currNode)
            //node.indent = this.indent + 0

            node.childNode = currNode
            node = currNode

            continue
        }

        break
    }

    while (this.inRange()) {
        if (this.currElement!.type === Token.EOL) break

        this.emit(Message.WrongToken, this.currElement!.pos, this.currElement!.toString())
        this.next()
    }

    this.assignNodeAttributes(node)

    this.prev()
}

export { identifierSolver }
