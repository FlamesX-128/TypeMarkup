export type GlobalAttributes =
    | 'accesskey'
    | 'class'
    | 'contenteditable'
    | 'dir'
    | 'draggable'
    | 'hidden'
    | 'id'
    | 'lang'
    | 'spellcheck'
    | 'style'
    | 'tabindex'
    | 'title'
    | 'translate'
    | 'aria-*'
    | 'data-*'

export type ATagAttributes =
    | GlobalAttributes
    | 'download'
    | 'href'
    | 'hreflang'
    | 'media'
    | 'ping'
    | 'referrerpolicy'
    | 'rel'
    | 'target'
    | 'type'

export type AcronymTagAttributes =
    | GlobalAttributes

export type AddressTagAttributes =
    | GlobalAttributes

export type AppletTagAttributes =
    | GlobalAttributes

export type AreaTagAttributes =
    | GlobalAttributes
    | 'alt'
    | 'coords'
    | 'download'
    | 'href'
    | 'hreflang'
    | 'media'
    | 'referrerpolicy'
    | 'rel'
    | 'shape'
    | 'target'
    | 'type'

export type ArticleTagAttributes =
    | GlobalAttributes

export type AsideTagAttributes =
    | GlobalAttributes

export type AudioTagAttributes =
    | GlobalAttributes
    | 'autoplay'
    | 'controls'
    | 'loop'
    | 'muted'
    | 'preload'
    | 'src'

export type BTagAttributes =
    | GlobalAttributes

export type BaseTagAttributes =
    | GlobalAttributes
    | 'href'
    | 'target'

export type BasefontTagAttributes =
    | GlobalAttributes

export type BdiTagAttributes =
    | GlobalAttributes

export type BdoTagAttributes =
    | GlobalAttributes
    | 'dir'

export type BigTagAttributes =
    | GlobalAttributes

export type BlockquoteTagAttributes =
    | GlobalAttributes
    | 'cite'

export type BodyTagAttributes =
    | GlobalAttributes

export type BrTagAttributes =
    | GlobalAttributes

export type ButtonTagAttributes =
    | GlobalAttributes
    | 'autofocus'
    | 'disabled'
    | 'form'
    | 'formaction'
    | 'formenctype'
    | 'formmethod'
    | 'formnovalidate'
    | 'formtarget'
    | 'name'
    | 'type'
    | 'value'

export type CanvasTagAttributes =
    | GlobalAttributes
    | 'height'
    | 'width'

export type CaptionTagAttributes =
    | GlobalAttributes

export type CenterTagAttributes =
    | GlobalAttributes

export type CiteTagAttributes =
    | GlobalAttributes

export type CodeTagAttributes =
    | GlobalAttributes
    | 'samp'
    | 'kbd'
    | 'var'
    | 'pre'

export type ColTagAttributes =
    | GlobalAttributes
    | 'span'

export type ColgroupTagAttributes =
    | GlobalAttributes
    | 'span'

export type DataTagAttributes =
    | GlobalAttributes
    | 'value'

export type DatalistTagAttributes =
    | GlobalAttributes

export type DdTagAttributes =
    | GlobalAttributes

export type DelTagAttributes =
    | GlobalAttributes
    | 'cite'
    | 'datetime'

export type DetailsTagAttributes =
    | GlobalAttributes
    | 'open'

export type DfnTagAttributes =
    | GlobalAttributes

export type DialogTagAttributes =
    | GlobalAttributes
    | 'open'

export type DirTagAttributes =
    | GlobalAttributes

export type DivTagAttributes =
    | GlobalAttributes

export type DlTagAttributes =
    | GlobalAttributes

export type DtTagAttributes =
    | GlobalAttributes

export type EmTagAttributes =
    | GlobalAttributes

export type EmbedTagAttributes =
    | GlobalAttributes
    | 'height'
    | 'src'
    | 'type'
    | 'width'

export type FieldsetTagAttributes =
    | GlobalAttributes
    | 'disabled'
    | 'form'
    | 'name'

export type FigcaptionTagAttributes =
    | GlobalAttributes

export type FigureTagAttributes =
    | GlobalAttributes

export type FontTagAttributes =
    | GlobalAttributes

export type FooterTagAttributes =
    | GlobalAttributes

export type FormTagAttributes =
    | GlobalAttributes
    | 'accept-charset'
    | 'action'
    | 'autocomplete'
    | 'enctype'
    | 'method'
    | 'name'
    | 'novalidate'
    | 'rel'
    | 'target'

export type FrameTagAttributes =
    | GlobalAttributes

export type FramesetTagAttributes =
    | GlobalAttributes

export type H1TagAttributes =
    | GlobalAttributes

export type H2TagAttributes =
    | GlobalAttributes

export type H3TagAttributes =
    | GlobalAttributes

export type H4TagAttributes =
    | GlobalAttributes

export type H5TagAttributes =
    | GlobalAttributes

export type H6TagAttributes =
    | GlobalAttributes

export type HeadTagAttributes =
    | GlobalAttributes

export type HeaderTagAttributes =
    | GlobalAttributes

export type HrTagAttributes =
    | GlobalAttributes

export type HtmlTagAttributes =
    | GlobalAttributes
    | 'xmlns'

export type ITagAttributes =
    | GlobalAttributes

export type IframeTagAttributes =
    | GlobalAttributes
    | 'allow'
    | 'allowfullscreen'
    | 'allowpaymentrequest'
    | 'height'
    | 'loading'
    | 'name'
    | 'referrerpolicy'
    | 'sandbox'
    | 'src'
    | 'srcdoc'
    | 'width'

export type ImgTagAttributes =
    | GlobalAttributes
    | 'alt'
    | 'crossorigin'
    | 'height'
    | 'ismap'
    | 'loading'
    | 'longdesc'
    | 'referrerpolicy'
    | 'sizes'
    | 'src'
    | 'srcset'
    | 'usemap'
    | 'width'

export type InputTagAttributes =
    | GlobalAttributes
    | 'accept'
    | 'alt'
    | 'autocomplete'
    | 'autofocus'
    | 'checked'
    | 'dirname'
    | 'disabled'
    | 'form'
    | 'formaction'
    | 'formenctype'
    | 'formmethod'
    | 'formnovalidate'
    | 'formtarget'
    | 'height'
    | 'list'
    | 'max'
    | 'maxlength'
    | 'min'
    | 'minlength'
    | 'multiple'
    | 'name'
    | 'pattern'
    | 'placeholder'
    | 'readonly'
    | 'required'
    | 'size'
    | 'src'
    | 'step'
    | 'type'
    | 'value'
    | 'width'

export type InsTagAttributes =
    | GlobalAttributes
    | 'cite'
    | 'datetime'

export type KbdTagAttributes =
    | GlobalAttributes

export type LabelTagAttributes =
    | GlobalAttributes
    | 'for'
    | 'form'

export type LegendTagAttributes =
    | GlobalAttributes

export type LiTagAttributes =
    | GlobalAttributes
    | 'value'

export type LinkTagAttributes =
    | GlobalAttributes
    | 'crossorigin'
    | 'href'
    | 'hreflang'
    | 'media'
    | 'referrerpolicy'
    | 'rel'
    | 'sizes'
    | 'title'
    | 'type'

export type MainTagAttributes =
    | GlobalAttributes

export type MapTagAttributes =
    | GlobalAttributes
    | 'name'

export type MarkTagAttributes =
    | GlobalAttributes

export type MetaTagAttributes =
    | GlobalAttributes
    | 'charset'
    | 'content'
    | 'http-equiv'
    | 'name'

export type MeterTagAttributes =
    | GlobalAttributes
    | 'form'
    | 'high'
    | 'low'
    | 'max'
    | 'min'
    | 'optimum'
    | 'value'

export type NavTagAttributes =
    | GlobalAttributes

export type NoframesTagAttributes =
    | GlobalAttributes

export type NoscriptTagAttributes =
    | GlobalAttributes

export type ObjectTagAttributes =
    | GlobalAttributes
    | 'data'
    | 'form'
    | 'height'
    | 'name'
    | 'type'
    | 'typemustmatch'
    | 'usemap'
    | 'width'

export type OlTagAttributes =
    | GlobalAttributes
    | 'reversed'
    | 'start'
    | 'type'

export type OptgroupTagAttributes =
    | GlobalAttributes
    | 'disabled'
    | 'label'

export type OptionTagAttributes =
    | GlobalAttributes
    | 'disabled'
    | 'label'
    | 'selected'
    | 'value'

export type OutputTagAttributes =
    | GlobalAttributes
    | 'for'
    | 'form'
    | 'name'

export type PTagAttributes =
    | GlobalAttributes

export type ParamTagAttributes =
    | GlobalAttributes
    | 'name'
    | 'value'

export type PictureTagAttributes =
    | GlobalAttributes

export type PreTagAttributes =
    | GlobalAttributes
    | 'code'
    | 'samp'
    | 'kbd'
    | 'var'

export type ProgressTagAttributes =
    | GlobalAttributes
    | 'max'
    | 'value'

export type QTagAttributes =
    | GlobalAttributes
    | 'cite'

export type RpTagAttributes =
    | GlobalAttributes

export type RtTagAttributes =
    | GlobalAttributes

export type RubyTagAttributes =
    | GlobalAttributes

export type STagAttributes =
    | GlobalAttributes

export type SampTagAttributes =
    | GlobalAttributes
    | 'code'
    | 'kbd'
    | 'var'
    | 'pre'

export type ScriptTagAttributes =
    | GlobalAttributes
    | 'async'
    | 'crossorigin'
    | 'defer'
    | 'integrity'
    | 'nomodule'
    | 'referrerpolicy'
    | 'src'
    | 'type'

export type SectionTagAttributes =
    | GlobalAttributes

export type SelectTagAttributes =
    | GlobalAttributes
    | 'autofocus'
    | 'disabled'
    | 'form'
    | 'multiple'
    | 'name'
    | 'required'
    | 'size'

export type SmallTagAttributes =
    | GlobalAttributes

export type SourceTagAttributes =
    | GlobalAttributes
    | 'media'
    | 'sizes'
    | 'src'
    | 'srcset'
    | 'type'

export type SpanTagAttributes =
    | GlobalAttributes

export type StrongTagAttributes =
    | GlobalAttributes

export type StyleTagAttributes =
    | GlobalAttributes
    | 'media'
    | 'type'

export type SubTagAttributes =
    | GlobalAttributes

export type SummaryTagAttributes =
    | GlobalAttributes

export type SupTagAttributes =
    | GlobalAttributes

export type TableTagAttributes =
    | GlobalAttributes

export type TbodyTagAttributes =
    | GlobalAttributes

export type TdTagAttributes =
    | GlobalAttributes
    | 'colspan'
    | 'headers'
    | 'rowspan'

export type TemplateTagAttributes =
    | GlobalAttributes

export type TextareaTagAttributes =
    | GlobalAttributes
    | 'autofocus'
    | 'cols'
    | 'dirname'
    | 'disabled'
    | 'form'
    | 'maxlength'
    | 'name'
    | 'placeholder'
    | 'readonly'
    | 'required'
    | 'rows'
    | 'wrap'

export type TfootTagAttributes =
    | GlobalAttributes

export type ThTagAttributes =
    | GlobalAttributes
    | 'abbr'
    | 'colspan'
    | 'headers'
    | 'rowspan'
    | 'scope'

export type TheadTagAttributes =
    | GlobalAttributes

export type TimeTagAttributes =
    | GlobalAttributes
    | 'datetime'

export type TitleTagAttributes =
    | GlobalAttributes

export type TrTagAttributes =
    | GlobalAttributes

export type TrackTagAttributes =
    | GlobalAttributes
    | 'default'
    | 'kind'
    | 'label'
    | 'src'
    | 'srclang'

export type TtTagAttributes =
    | GlobalAttributes

export type UTagAttributes =
    | GlobalAttributes

export type UlTagAttributes =
    | GlobalAttributes

export type VarTagAttributes =
    | GlobalAttributes
    | 'code'
    | 'samp'
    | 'kbd'
    | 'pre'

export type VideoTagAttributes =
    | GlobalAttributes
    | 'autoplay'
    | 'controls'
    | 'height'
    | 'loop'
    | 'muted'
    | 'poster'
    | 'preload'
    | 'src'
    | 'width'

export type WbrTagAttributes =
    | GlobalAttributes
