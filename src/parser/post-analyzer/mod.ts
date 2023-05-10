import { Message, MessageElement, NodeElement } from 'TypeMarkup'

import { PostParserScope } from './definitions.ts'

function analyzer(this: PostParserScope, nodes: NodeElement[] = this.elements): [MessageElement[], NodeElement[]] {
    let node = nodes.find((node) => node.redirect !== null)

    while (node !== undefined) {
        if (node.childNodes !== null) {
            analyzer.call(this, node.childNodes)
        }

        const elementIndex = nodes.findLastIndex(
            (element) => element.id === node!.redirect
        )

        let element = nodes[elementIndex]

        if (elementIndex === -1) {
            this.emit(Message.MissingReferenceDecl, node.position, node.redirect!)

            nodes.splice(nodes.indexOf(node!), 1)
            node = nodes.find((node) => node.redirect !== null)

            continue
        }

        while (element.childNode !== null) {
            element = element.childNode
        }

        if (element.childNodes === null) {
            element.childNodes = []
        }

        element.childNodes.push(node!)
        nodes.splice(nodes.indexOf(node!), 1)

        node = nodes.find((node) => node.redirect !== null)
    }

    return [this.messages, nodes]
}

function postAnalyzer(this: PostParserScope): [MessageElement[], NodeElement[]] {
    return analyzer.call(this)
}

export { postAnalyzer }
