export * from './token.ts'

export interface Scope {
    // deno-lint-ignore no-explicit-any
    [key: string]: any,

    cursor: number,
    document: string,
    char: string,
    start: number,

    update_cursor(): void,
}
