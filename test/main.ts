import { lexicalAnalyzer, parserAnalyzer } from 'TypeMarkup'

const file = await Deno.readTextFile('./test/test.tm')

const r_1 = lexicalAnalyzer('./test/test.tm', file)
//console.log(r_1)

const [messages, r_2] = parserAnalyzer('./test/test.tm', r_1)
console.log(messages, r_2)
