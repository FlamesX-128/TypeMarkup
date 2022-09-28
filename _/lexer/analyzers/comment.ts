import { Scope } from '../../../@types/mod.js'
import { END_LINE_PATTERN } from '../../misc/mod.js'

function comment_analyzer(this: Scope): undefined {
    while (
        END_LINE_PATTERN.includes(this.char) === null &&
        this.cursor < this.document.length
    )
        this.update_cursor.call(this)

    return
}

export { comment_analyzer }
