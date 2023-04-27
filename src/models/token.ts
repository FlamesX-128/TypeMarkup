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

    public readonly pos: {
        start: number,
        end?: number
    }

    constructor(type: T, data: TokenElement<T>['data'], pos: TokenElement['pos']) {
        this.type = type
        this.data = data
        this.pos = pos
    }
}

export { Token, TokenElement }
