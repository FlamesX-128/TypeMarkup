import { Position } from "../../index.d.ts"

enum Token {
    Comment,

    Identifier,
    Attribute,

    String,

    ReferenceDef,
    Reference,

    Space,
    Tab,
    EOL,

    Macro,
    Unknown
}

class TokenElement<T extends Token = Token> {
    public readonly type: T

    public readonly data: T extends Token.Identifier ? string
        : T extends Token.String ? string
        : T extends Token.Unknown ? string
        : null

    public readonly pos: Position

    constructor(type: T, data: TokenElement<T>['data'], pos: Position) {
        this.type = type
        this.data = data
        this.pos = pos
    }

    public toString(token?: Token): keyof typeof Token {
        return Token[token || this.type] as keyof typeof Token
    }

}

export { Token, TokenElement }
