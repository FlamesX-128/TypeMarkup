import { Node, NodeElement, ParserScope } from 'TypeMarkup'

function stringAnalyzer(this: ParserScope) {
    this.assignLastNodeByLevel(
        this.values, this.indent, new NodeElement(Node.Text, this.currElement!.data as string),
        this.referenceName
    )
}

export { stringAnalyzer }
