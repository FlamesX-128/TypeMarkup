import { Node, NodeElement, isSingleton } from 'TypeMarkup'

const analyzer = (nodes: NodeElement[]): string[] => {
    const data = []

    for (const node of nodes) {
        if (node.nodeType === Node.Text) {
            data.push(node.data)

            continue
        }

        const attributes = Object.entries(node.attributes || {}).map(
            ([key, value]) => `${key}="${value}"`
        )

        if (isSingleton(node.data)) {
            data.push(`<${node.data} ${attributes.join(' ')} />`)
            continue
        }

        data.push(`<${node.data} ${attributes.join(' ')}>`)

        if (node.childNodes) data.push(
            ...analyzer(node.childNodes)
        )

        if (node.childNode) data.push(
            ...analyzer([node.childNode])
        )

        data.push(`</${node.data}>`)
    }

    return data
}

const evaluator = (nodes: NodeElement[]): string => {
    return analyzer(nodes).join('')
}

export { evaluator }
