class Token {
    public static readonly None = 0
    public static readonly Unknown = 1

    public static readonly Pointer = 2
    public static readonly Reference = 3

    public static readonly Attribute = 4
    public static readonly Macro = 5

    public static readonly Identifier = 6
    public static readonly String = 7

    public static readonly EndLine = 8
    public static readonly Tab = 9

    constructor(
        public readonly type: number,
        public readonly value: null | string,
        public readonly pos: {
            start: number,
            end?: number
        }
    ) { }

}

interface Scope {
    content: string
    cursor: number
    currChar: string

    updateCursor(this: Scope): string
}

type Handler = (this: Scope) => Token | null

export type { Handler, Scope }
export { Token }
