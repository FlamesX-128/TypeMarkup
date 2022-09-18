import { IToken, Scope, TokenTypes } from '../../../@types/mod.js'
import { Token } from '../token.js'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function decorator_analyzer(this: Scope): IToken<any> {
    return new Token(TokenTypes.Decorator, this.cursor, undefined)
}

export { decorator_analyzer }
