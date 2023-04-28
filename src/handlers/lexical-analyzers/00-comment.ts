import { LexerScope } from 'TypeMarkup'

function commentAnalyzer(this: LexerScope) {
    if(this.currElement !== '#') return null

    while (
        this.inRange() && ['\n', '\r'].includes(this.currElement) === false
    ) {
        this.next()
    }

    return null
}

export { commentAnalyzer }
