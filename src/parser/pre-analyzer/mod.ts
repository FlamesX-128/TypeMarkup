import { Scope, Token, TokenElement } from 'TypeMarkup'

function preAnalyzer(this: Scope<TokenElement>): TokenElement[] {
    while (this.inRange()) {
        if (this.currElement?.type !== Token.Macro) {
            this.next(); continue
        }

        this.next()
    }

    return this.elements
}

export { preAnalyzer }
