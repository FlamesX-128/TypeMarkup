import { evaluator, lexer, parser } from 'TypeMarkup'

const file = await Deno.readTextFile('./test/test.tm')

const r_1 = lexer(file)
console.log(r_1)

const r_2 = parser(r_1)
console.log(r_2)

const r_3 = evaluator(r_2)
console.log(r_3)
