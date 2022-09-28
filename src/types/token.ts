type TokenTypes =
    | 'A9' // text
    | '\'' // string
    | '-'  // attribute
    | '{'  // open-scope
    | '}'  // close-scope
    | '*'  // pointer
    | '>'  // goto
    | '&'  // reference
    | '@'  // decorator
    | ','  // comma
    | '_'  // unknown

type LexerToken <T extends TokenTypes> = {
    value: T extends 'A9' | '\'' ? string : null,
    pos: {
        end: T extends 'A9' | '\'' ? number : null,
        start: number
    }
    type: T
}

type TokenType = new <T extends TokenTypes> (
    type: T, pos: LexerToken<T>['pos'], value: LexerToken<T>['value']

) => LexerToken<T>

const Token = (
    function <T extends TokenTypes> (type: T, pos: LexerToken<T>['pos'], value: LexerToken<T>['value']): LexerToken<T> {
        
        return { type, pos, value }
    }

) as unknown as TokenType

export type { LexerToken, TokenTypes };
export { Token };
