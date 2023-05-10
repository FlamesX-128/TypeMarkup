import { assertEquals } from 'asserts'

import { Token, lexicalAnalyzer } from 'TypeMarkup'

Deno.test(`Lexical - ${Token[Token.Comment]}#1`, () => assertEquals(
    lexicalAnalyzer('', '# hi\n').at(0)?.type,
    Token.EOL
))

Deno.test(`Lexical - ${Token[Token.Identifier]}#1`, () => assertEquals(
    lexicalAnalyzer('', 'hi').at(0)?.type,
    Token.Identifier
))

Deno.test(`Lexical - ${Token[Token.Identifier]}#2`, () => assertEquals(
    lexicalAnalyzer('', 'hi').at(0)?.type,
    Token.Identifier
))

Deno.test(`Lexical - ${Token[Token.Attribute]}#1`, () => assertEquals(
    lexicalAnalyzer('', "- lang 'es'\nhtml").at(0)?.type,
    Token.Attribute
))

Deno.test(`Lexical - ${Token[Token.Attribute]}#2`, () => assertEquals(
    lexicalAnalyzer('', "- lang 'es' html").at(0)?.type,
    Token.Attribute
))

Deno.test(`Lexical - ${Token[Token.String]}#1`, () => assertEquals(
    lexicalAnalyzer('', "'hi'").at(0)?.type,
    Token.String
))

