import { IToken, Scope, TokenTypes } from '../../../@types/mod.js'
import { Token } from '../token.js'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function reference_analyzer(this: Scope): IToken<any> {
    return new Token(TokenTypes.Reference, this.cursor, undefined)
}

export { reference_analyzer }
