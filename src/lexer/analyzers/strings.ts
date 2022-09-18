import { IToken, Scope, TokenTypes } from '../../../@types/mod.js'
import { Token } from '../token.js'

function string_analyzer(
    this: Scope
): IToken<TokenTypes.String | TokenTypes.Unknown> {
    const initial_cursor = this.cursor
    let ignored_char = false

    this.update_cursor()

    while (
        (this.char !== '\'' || ignored_char === false) &&
        this.cursor < this.document.length
    ) {
        ignored_char = this.char === '\\' ? true : false

        this.update_cursor()
    }

    if (this.char === '\'')
        return new Token(
            TokenTypes.String,
            initial_cursor,
            this.document.substring(initial_cursor + 1, this.cursor)
        )

    return new Token(
        TokenTypes.Unknown,
        initial_cursor,
        this.document.substring(initial_cursor, this.cursor + 1)
    )
}

export { string_analyzer }
