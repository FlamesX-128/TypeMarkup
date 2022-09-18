import { IToken, Scope, TokenTypes } from '../../../@types/mod.js'
import { Token } from '../../lexer/token.js'

import { ALPHABET_PATTERN } from '../../misc/mod.js'

import { attribute_analyzer } from './attribute.js'
import { decorator_analyzer } from './decorator.js'

import { reference_analyzer } from './reference.js'
import { pointer_analyzer } from './pointer.js'
import { character_analyzer } from './character.js'
import { comment_analyzer } from './comment.js'
import { string_analyzer } from './strings.js'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const analyzer_: { [key: string]: () => IToken<any> | undefined } = {
    '\'': string_analyzer,
    Az: character_analyzer,

    '-': attribute_analyzer,
    '@': decorator_analyzer,
    '&': reference_analyzer,

    '*': pointer_analyzer,
    '#': comment_analyzer,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function analyzer(this: Scope): IToken<any> {
    if (ALPHABET_PATTERN.includes(this.char)) return analyzer_['a-z'].call(this)

    if (this.char in analyzer_) return analyzer_[this.char].call(this)

    return new Token(TokenTypes.Unknown, this.cursor, this.char)
}

export { analyzer }
