import { IToken, Scope, TokenTypes } from '../../../@types/mod.js'
import { Token } from '../token.js'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function attribute_analyzer(this: Scope): IToken<any> {
    return new Token(TokenTypes.Attribute, this.cursor, undefined)
}

export { attribute_analyzer }
