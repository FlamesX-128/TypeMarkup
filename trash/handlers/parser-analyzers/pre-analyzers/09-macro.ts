import { ParserScope, Token, TokenElement } from 'TypeMarkup'
import { MacroScope, use } from '../../core/import.ts'

const macros: { [key: string]: (this: MacroScope, args: string[]) => TokenElement[] } = {
    use: use
}

function macroAnalyzer(this: ParserScope) {
    this.next()

    if (this.currElement!.type !== Token.Identifier) {}

    const scope = new MacroScope(
        this.filePath, this.indent, this.cursor, this.content
    )

    const result = macros[this.currElement!.data as string].call(scope, [])

    do {
        this.next()
    } while (
        this.currElement?.type !== Token.EOL
    )

    this.content.splice(this.cursor, 0, ...result)
}

export { macroAnalyzer }
