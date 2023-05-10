import { Position, Token } from 'TypeMarkup'

enum Message {
    WrongTextAttributes,

    WrongTagAttributes,
    WrongSingletonTagChildren,
    WrongTagChildren,

    WrongAttributeAssignment,
    InvalidAttributeDecl,

    WrongIndent,

    MissingReferenceDecl,
    InvalidReferenceDecl,

    InvalidReferenceCall,

    InvalidToken,
    WrongToken
}

const messages: Record<Message, string> = {
    [Message.WrongTextAttributes]: 'The text nodes cannot have attributes.',

    [Message.WrongTagAttributes]: 'The tag "%s" cannot have attribute "%s".',
    [Message.WrongSingletonTagChildren]: 'The singleton tag "%s" cannot have children.',
    [Message.WrongTagChildren]: 'The tag "%s" cannot have child "%s".',

    [Message.WrongAttributeAssignment]: 'The attribute "%s" cannot be assigned to "%s".',
    [Message.InvalidAttributeDecl]: 'The attribute declaration expected "%s", but found "%s".',

    [Message.WrongIndent]: 'The indentation of level "%s" is incorrect.',

    [Message.MissingReferenceDecl]: 'The reference "%s", has not been found.',
    [Message.InvalidReferenceDecl]: 'The reference declaration expected "%s", but found "%s".',

    [Message.InvalidReferenceCall]: 'The reference call expected "%s", but found "%s".',

    [Message.InvalidToken]: 'An unrecognized token "%s" has been identified.',
    [Message.WrongToken]: 'An unrecognized token "%s" has been identified.'
}

class MessageElement {
    public readonly type: Message
    public readonly message: string
    public readonly pos: Position

    constructor(type: Message, pos: Position, ...args: any[]) {
        this.message = messages[type].replace(/%s/g, () => args.shift() || '')

        this.type = type
        this.pos = pos
    }

    public toString(identifier?: Token): keyof typeof Message {
        return Message[identifier || this.type] as keyof typeof Message
    }

}

export { Message, MessageElement }
