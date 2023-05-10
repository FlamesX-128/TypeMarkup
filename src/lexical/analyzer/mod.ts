import { Token, TokenElement } from 'TypeMarkup'

import { solvers, unknownSolver } from './solvers/mod.ts'
import { Scope } from './definitions.ts'

function analyzer(this: Scope): TokenElement[] {
    const result: TokenElement[] = []

    while (this.inRange()) {
        let identifier: TokenElement | null = null

        for (const solver of solvers) {
            identifier = solver.call(this)

            if (identifier !== null) break
        }

        if (identifier !== null) {
            if (identifier.type !== Token.Space) result.push(identifier)
        } else {
            result.push(unknownSolver.call(this))
        }

        this.next()
    }

    return result
}

export { analyzer }
