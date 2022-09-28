import { lexer } from './src/lexer/mod.js'

const document = `*
`

console.log(lexer(document))