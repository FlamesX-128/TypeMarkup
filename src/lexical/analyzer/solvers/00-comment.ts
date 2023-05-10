import { Scope } from '../definitions.ts'

function commentSolver(this: Scope) {
    if(this.currChar !== '#') return null

    while (
        this.inRange() && ['\n', '\r'].includes(this.currChar) === false
    ) {
        this.next()
    }

    return null
}

export { commentSolver }
