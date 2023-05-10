import { LexerScope, Token, TokenElement } from 'TypeMarkup'

function endOfLineAnalyzer(this: LexerScope) {
    if (['\n', '\r'].includes(this.currElement!) === false)
        return null

    return new TokenElement(
        Token.EOL,
        null,
        {
            rowStart: this.row,
            colStart: this.col,
            colEnd: this.col + 1,
            rowEnd: this.row + 1
        }
    )
}

export { endOfLineAnalyzer }
