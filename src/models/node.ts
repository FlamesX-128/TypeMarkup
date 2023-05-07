import type { Position, Tag } from 'TypeMarkup'

enum Node {
    Element = 1,
    Text = 3
}

class NodeElement<T extends Node = Node>
{
    public id: string | null = null

    public attributes: Record<string, string | null> | null = {}
    public indent = 0

    public childNodes: NodeElement[] | null = null
    public childNode: NodeElement | null = null

    public position: Position

    public readonly nodeType: T
    public readonly data: T extends Node.Element ? Tag
        : T extends Node.Text ? string
        : null

    constructor(type: T, data: NodeElement<T>['data'], position: Position) {
        this.nodeType = type
        this.data = data
        this.position = position
    }

    public toString(node?: Node): keyof typeof Node {
        return Node[node || this.nodeType] as keyof typeof Node
    }

}

export { Node, NodeElement }
