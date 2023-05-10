import { Token } from 'TypeMarkup'

import { ParserScope } from '../definitions.ts'

import { identifierSolver } from './01-identifier.ts'
import { attributeSolver } from './02-attribute.ts'
import { stringSolver } from './03-string.ts'
import { referenceDeclSolver } from './04-referenceDecl.ts'
import { referenceCallSolver } from './05-referenceCall.ts'
import { tabSolver } from './07-tab.ts'
import { endOfLineSolver } from './08-eol.ts'

import { unknownSolver } from './11-unknown.ts'

const solvers: Record<number, (this: ParserScope) => void> = {
    [Token.Identifier]: identifierSolver,
    [Token.Attribute]: attributeSolver,

    [Token.String]: stringSolver,

    [Token.ReferenceDecl]: referenceDeclSolver,
    [Token.ReferenceCall]: referenceCallSolver,

    [Token.Tab]: tabSolver,
    [Token.EOL]: endOfLineSolver,

    [Token.Unknown]: unknownSolver
}

export {
    identifierSolver,
    attributeSolver,
    stringSolver,
    referenceDeclSolver,
    referenceCallSolver,
    tabSolver,
    endOfLineSolver,
    unknownSolver
}

export {
    solvers
}
