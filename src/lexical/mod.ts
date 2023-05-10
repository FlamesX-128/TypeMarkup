import { TokenElement } from 'TypeMarkup'

import { Scope } from './analyzer/definitions.ts'
import { analyzer } from './analyzer/mod.ts'

const lexicalAnalyzer = (filePath: string, fileContent: string): TokenElement[] => {
    return analyzer.call(new Scope(filePath, fileContent))
}

export { lexicalAnalyzer }
