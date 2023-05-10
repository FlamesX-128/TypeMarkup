import { Token, TokenElement, lexer } from 'TypeMarkup'

type MacroFunction = (this: MacroScope, args: string[]) => TokenElement[]

// - - -
class MacroScope {
    public readonly filePath: string

    public currIdentifier: TokenElement | undefined = undefined
    public identifiers: TokenElement[]

    public indent: number
    public cursor: number

    constructor(filePath: string, indent: number, cursor: number, identifiers: TokenElement[]) {
        this.currIdentifier = identifiers[cursor]
        this.identifiers = identifiers

        this.indent = indent
        this.cursor = cursor

        this.filePath = filePath
    }

    public inRange(): boolean {
        return this.cursor < this.identifiers.length
    }

    public next(): boolean {
        this.currIdentifier = this.identifiers[++this.cursor]

        return this.inRange()
    }

    public prev(): boolean {
        this.currIdentifier = this.identifiers[--this.cursor]

        return this.inRange()
    }
}

function use(this: MacroScope, args: string[]): TokenElement[] {
    while (this.inRange()) {
        this.next()

        if (this.currIdentifier!.type !== Token.String)
            return []

        let file = Deno.readTextFileSync(this.filePath + '/' + this.currIdentifier!.data as string)
        
        while (file.match(/\t+/) !== null) {
            file = file.replace(/\t+/, (value) => value + '\t'.repeat(this.indent))
        }

        return lexer(file)
    }

    return []
}

export { use, MacroScope }
