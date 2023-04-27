import type { Tag } from 'TypeMarkup'

enum Node {
    Element = 1,
    Text = 3
}

class NodeElement<T extends Node = Node>
{
    public id: string | null = null

    public attributes: Record<string, string | null> = {}
    public indent = 0

    public childNodes: NodeElement[] | null = null
    public childNode: NodeElement | null = null

    public readonly nodeType: T
    public readonly data: T extends Node.Element ? Tag
        : T extends Node.Text ? string
        : null

    constructor(type: T, data: NodeElement<T>['data']) {
        this.nodeType = type
        this.data = data
    }

}

export { Node, NodeElement }
