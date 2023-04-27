import { LexerScope, Token, TokenElement } from 'TypeMarkup'

function endOfLineAnalyzer(this: LexerScope) {
    if (['\n', '\r'].includes(this.currElement!) === false)
        return null

    return new TokenElement(
        Token.EOL,
        null,
        {
            start: this.cursor,
            end: this.cursor + 1
        }
    )
}

export { endOfLineAnalyzer }
