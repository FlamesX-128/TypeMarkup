import { Token } from "./src/@types/lexer.ts";
import { lexer } from "./src/handlers/lexer.ts";
import { parser } from "./src/handlers/parser.ts";

const file = await Deno.readTextFile("test.tm")
const tokens = lexer(file);

const tree = parser(tokens)
const tags = ['meta']

function evaluator(tree: ReturnType<typeof parser>): string {
    const html = []

    for (const node of tree) {
        if (node.special === Token.String) {
            html.push(node.value)
            continue
        }

        const chields = evaluator(
            node.children?.length ? node.children : node.redirect?.children ?? []
        )

        const attributes = Object.entries(node.attributes ?? {}).map(([key, value]) => `${key}="${value}"`).join(' ')

        if (tags.includes(node.value as string)) {
            html.push(`<${node.value} ${attributes} ${chields.length > 0 ? ' ' + chields : ''}/>`)
            continue
        }

        html.push(`<${node.value} ${attributes}>${chields}</${node.value}>`)
    }

    return html.join('')
}

console.log(tokens)
console.log(tree)
console.log(evaluator(tree))