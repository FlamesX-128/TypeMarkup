import { IToken, Scope } from '../../@types/mod.js'
import { analyzer } from './analyzers/mod.js'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _lexer(this: Scope): IToken<any>[] {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: IToken<any>[] = []

    while (this.cursor < this.document.length) {
        const token = analyzer.call(this)

        if (token) data.push(token)
        this.update_cursor()
    }

    return data
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function lexer(document: string): IToken<any>[] {
    return _lexer.call({
        cursor: 0,
        document,
        char: document[0],

        update_cursor() {
            this.char = this.document[this.cursor]
        },
    })
}

export { lexer }
