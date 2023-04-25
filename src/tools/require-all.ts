import { walkSync } from 'fs'

const requireAll = async <T> (path: string) => {
    const modules = new Map<string, T>()

    for (const entry of walkSync(path)) {
        if (entry.isFile === false) continue;

        modules.set(entry.name, await import(entry.path))
    }

    return modules;
}

export { requireAll }
