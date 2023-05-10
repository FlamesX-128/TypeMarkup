type HTML5SingletonTag =
    | 'area'
    | 'base'
    | 'br'
    | 'col'
    | 'command'
    | 'embed'
    | 'hr'
    | 'img'
    | 'input'
    | 'keygen'
    | 'link'
    | 'meta'
    | 'param'
    | 'source'
    | 'track'
    | 'wbr'

type HTML4SingletonTag =
    | 'basefont'
    | 'frame'
    | 'isindex'
    | 'param'

type SingletonTag = HTML5SingletonTag | HTML4SingletonTag

export type { HTML5SingletonTag, HTML4SingletonTag, SingletonTag }
