import { IToken, Scope, TokenTypes } from '../../../@types/mod.js'
import { KEBAB_PATTERN } from '../../misc/mod.js'
import { Token } from '../token.js'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function character_analyzer(this: Scope): IToken<any> {
    const char = this.char.toLowerCase(),
        cursor = this.cursor

    let kebab_case = false,
        content = ''

    while (KEBAB_PATTERN.includes(char) && this.cursor < this.document.length) {
        if (char === '-') kebab_case = true
        content += char

        this.update_cursor()
    }

    if (!KEBAB_PATTERN.includes(this.char))
        return new Token(TokenTypes.Unknown, cursor, content)

    if (kebab_case === true)
        return new Token(TokenTypes.KebabCase, cursor, content)

    return new Token(TokenTypes.AlphabetCase, cursor, content)
}

export { character_analyzer }
