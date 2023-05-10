import { MessageElement, NodeElement } from 'TypeMarkup'

import { solvers } from './solvers/mod.ts'
import { ParserScope } from './definitions.ts'

function analyzer(this: ParserScope): [MessageElement[], NodeElement[]] {
    while (this.inRange()) {
        solvers[this.currElement?.type || 11].call(this)

        this.next()
    }

    return [this.messages, this.nodes]
}

export { analyzer, solvers }
