import { Token } from "../@types/lexer.ts";

interface Node {
    children: Node[]
    redirect: Node | null
    redirectLevelReq?: number
    value: string | null
    attributes?: Record<string, string>
    special?: number
    referenceName?: string
}

function assignLastNodeByLevel(tree: Node[], level: number, value: Node, ref?: string): Node {
    const node = tree[tree.length - 1]

    if (ref !== undefined) for (const child of tree) {
        if (child.referenceName === ref) {
            return assignLastNodeByLevel(child.children, level, value)
        }
    }

    if (node !== undefined && node.redirect !== null && (node.redirectLevelReq ?? 100) <= level)
        return assignLastNodeByLevel([node.redirect], level, value)

    if (node === undefined && level !== 0) throw new Error('Unexpected level')

    if (level === 0) {
        tree.push(value)
        return value
    }

    return assignLastNodeByLevel(node === undefined ? [] : node.children, level - 1, value)
}

function parser(tokens: Token[]): Node[] {
    const tree: Node[] = []

    let attributes: Record<string, string> = {}
    let pointerName
    let referenceName
    let level = 0

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens.at(i)!

        if (token.type === Token.Pointer) {
            i++

            const t_2 = tokens.at(i)

            if (t_2 === undefined || t_2.type !== Token.Identifier)
                throw new Error('Unexpected token')

            pointerName = t_2.value as string

            continue
        }

        if (token.type === Token.Reference) {
            i++

            const t_2 = tokens.at(i)

            if (t_2 === undefined || t_2.type !== Token.Identifier)
                throw new Error('Unexpected token')

            referenceName = t_2.value as string
            
            continue
        }

        if (token.type === Token.String) {
            assignLastNodeByLevel(tree, level, {
                children: [], value: token.value, redirect: null, attributes: {}, special: Token.String
            }, referenceName)

            continue
        }

        if (token.type === Token.Attribute) {
            i++

            const t_2 = tokens.at(i)

            if (t_2 === undefined || t_2.type !== Token.Identifier)
                throw new Error('Unexpected token')
            
            i++

            const t_3 = tokens.at(i)

            if (t_3 === undefined || t_3.type !== Token.String)
                throw new Error('Unexpected token')

            attributes[t_2.value as string] = t_3.value as string

            continue
        }

        if (token.type === Token.EndLine) {
            level = 0

            continue
        }

        if (token.type === Token.Tab) {
            level++

            continue
        }

        let node = assignLastNodeByLevel(tree, level, {
            children: [], value: token.value, redirect: null, attributes: {}
        }, referenceName)

        if (
            tokens[i + 1]?.type !== Token.Identifier
        ) {
            node.referenceName = pointerName
            node.attributes = attributes
            attributes = {}

            continue
        }

        while (
            tokens[i + 1]?.type === Token.Identifier
        ) {
            node.redirectLevelReq = level + 1
            i++

            const nToken = tokens.at(i)!

            const nNode = {
                children: [], value: nToken.value, redirect: null
            }

            node.redirect = nNode
            node = nNode
        }

        node.referenceName = pointerName
        node.attributes = attributes
        attributes = {}
    }

    return tree
}

export { parser }
