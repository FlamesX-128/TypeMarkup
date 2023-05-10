import { TokenElement } from 'TypeMarkup'
import { Scope } from '../definitions.ts'

import { commentSolver } from './00-comment.ts'
import { identifierSolver } from './01-identifier.ts'
import { attributeSolver } from './02-attribute.ts'
import { stringSolver } from './03-string.ts'
import { referenceDeclSolver } from './04-referenceDecl.ts'
import { referenceCallSolver } from './05-referenceCall.ts'
import { spaceSolver } from './06-space.ts'
import { tabSolver } from './07-tab.ts'
import { endOfLineSolver } from './08-eol.ts'

import { macroSolver } from './10-macro.ts'
import { unknownSolver } from './11-unknown.ts'

const solvers: ((this: Scope) => TokenElement | null)[] = [
    commentSolver,
    identifierSolver,
    attributeSolver,
    stringSolver,
    referenceDeclSolver,
    referenceCallSolver,
    spaceSolver,
    tabSolver,
    endOfLineSolver,
    macroSolver
]

export {
    commentSolver,
    identifierSolver,
    attributeSolver,
    stringSolver,
    referenceDeclSolver,
    referenceCallSolver,
    spaceSolver,
    tabSolver,
    endOfLineSolver,
    macroSolver,
    unknownSolver
}

export {
    solvers
}
