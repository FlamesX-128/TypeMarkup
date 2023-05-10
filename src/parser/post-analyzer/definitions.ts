import { Message, MessageElement, NodeElement, Position, Scope } from 'TypeMarkup'

class PostParserScope extends Scope<NodeElement> {
    public messages: MessageElement[] = []

    constructor(filePath: string, elements: NodeElement[]) {
        super(filePath, elements)
    }

    public emit(type: Message, pos: Position, ...args: any[]) {
        this.messages.push(new MessageElement(type, pos, ...args))
    }
}

export { PostParserScope }
