import { Node, NodeElement } from 'TypeMarkup'

import { ParserScope } from '../definitions.ts'

function stringSolver(this: ParserScope) {
    const node = new NodeElement(
        Node.Text, this.currElement!.data as string, this.currElement!.pos
    )

    this.assignNodeAttributes(node)
    node.indent = this.indent + 0

    node.redirect = this.referenceCall
    this.referenceCall = null

    this.assignChildNode(node)
}

export { stringSolver }
