class Scope {
    public readonly fileContent: string
    public readonly filePath: string

    public currChar: string | undefined
    public cursor = 0

    public rows: number[] = []
    public row = 0
    public col = 0

    constructor(filePath: string, fileContent: string) {
        this.fileContent = fileContent
        this.filePath = filePath
    
        this.currChar = fileContent[0];

        [...fileContent.matchAll(/\n/g)].forEach(
            (row) => this.rows.push(row.index!)
        )
    }

    public inRange(): boolean {
        return this.cursor < this.fileContent.length
    }

    public next(): boolean {
        this.currChar = this.fileContent[++this.cursor]
        this.col++

        const row = this.row

        this.row = this.rows.reduce(
            (acc, row) => row < this.cursor ? acc + 1 : acc, 0
        )

        if (row !== this.row) this.col = 0

        return this.inRange()
    }

    public prev(): boolean {
        this.currChar = this.fileContent[--this.cursor]
        this.col--

        const row = this.row

        this.row = this.rows.reduce(
            (acc, row) => row < this.cursor ? acc + 1 : acc, 0
        )

        if (row !== this.row) this.col = 0

        return this.inRange()
    }

}

export { Scope }
