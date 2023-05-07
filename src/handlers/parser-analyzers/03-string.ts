import { Node, NodeElement, ParserScope } from 'TypeMarkup'

function stringAnalyzer(this: ParserScope) {
    const node = new NodeElement(
        Node.Text, this.currElement!.data as string, this.currElement!.pos
    )

    this.assignElementAttributes(node)
    node.indent = this.indent + 0

    this.assignLastElement(this.result, node)
}

export { stringAnalyzer }
