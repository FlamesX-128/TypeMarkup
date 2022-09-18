export interface Scope {
    cursor: number,
    document: string,
    char: string,

    update_cursor(): void,
}
