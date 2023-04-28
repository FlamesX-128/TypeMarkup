import { Node, NodeElement, ParserScope } from 'TypeMarkup'

function stringAnalyzer(this: ParserScope) {
    const node = new NodeElement(
        Node.Text, this.currElement!.data as string, this.currElement!.pos
    )

    this.assignNodeAttributes(node)

    this.assignLastNodeByLevel(
        this.values, this.indent, node, this.referenceName
    )
}

export { stringAnalyzer }
