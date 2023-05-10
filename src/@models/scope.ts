class Scope <T> {
    public readonly filePath: string

    public currElement: T | undefined = undefined
    public elements: T[]

    public cursor = 0

    constructor(filePath: string, elements: T[]) {
        this.currElement = elements.at(0)
        this.elements = elements

        this.filePath = filePath
    }

    public inRange(): boolean {
        return this.cursor < this.elements.length
    }

    public next(): boolean {
        this.currElement = this.elements[++this.cursor]

        return this.inRange()
    }

    public prev(): boolean {
        this.currElement = this.elements[--this.cursor]

        return this.inRange()
    }
}

export { Scope }
