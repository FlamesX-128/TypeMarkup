export enum TokenTypes {
    Attribute,
    Decorator,
    Pointer,
    Comma,
    Reference,

    AlphabetCase,
    KebabCase,
    PascalCase,
    String,

    CloseScope,
    OpenScope,

    SyntaxError,
    Unknown,
}

export type TokenValue<T extends TokenTypes> = T extends TokenTypes.SyntaxError
    ? string
    : T extends TokenTypes.Unknown
    ? string
    : T extends TokenTypes.AlphabetCase
    ? string
    : T extends TokenTypes.KebabCase
    ? string
    : T extends TokenTypes.String
    ? string
    : undefined

export interface IToken<T extends TokenTypes> {
    position: number
    value: TokenValue<T>
    type: T
}
