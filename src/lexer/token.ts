import { IToken, TokenTypes, TokenValue } from '../../@types/token.js'

function _Token(
    this: IToken<typeof type>,
    type: TokenTypes,
    pos: number,
    value: TokenValue<typeof type>
) {
    this.position = pos
    this.value = value
    this.type = type
}

const Token = _Token as unknown as {
    new <T extends TokenTypes>(
        type: T,
        pos: number,
        value: TokenValue<T>
    ): IToken<T>
}

export { Token }
