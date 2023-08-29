use crate::models::token::{Token, TokenInfo};

pub struct Context {
    pub tokens: Vec<TokenInfo>,
    pub content: String,
    pub cursor: usize
}

impl Context {
    pub fn increment(&mut self) {
        self.cursor += 1;
    }

    pub fn decrement(&mut self) {
        self.cursor -= 1;
    }
}

impl Context {
    pub fn push(&mut self, token: TokenInfo) {
        self.tokens.push(token);
    }

    pub fn get(&self) -> Option<char> {
        self.content.chars().nth(self.cursor)
    }
}

impl Context {
    pub fn new(content: String) -> Context {
        Context { tokens: Vec::new(), content, cursor: 0 }
    }
}

// - - -

fn identifier_tokenizer(ctx: &mut Context) {
    let mut value = "".to_string();

    while let Some(char) = ctx.get() {
        match char {
            | 'A' ..= 'Z'
            | 'a' ..= 'z'
            | '0' ..= '9'
            | '-'
            | '_' => 
                value.push(char),
    
            _ => {
                ctx.decrement();
                break
            }
        }

        ctx.increment();
    }

    ctx.push(
        TokenInfo::new(Token::Identifier, Some(value), ctx.cursor)
    );
}

fn double_quotes_tokenizer(ctx: &mut Context) {
    ctx.increment();

    let mut string = "".to_string();
    let mut escape = false;

    while let Some(char) = ctx.get() {
        if char == '\\' && escape == false {
            string.push(char);
            escape = true; continue 
        }


        if char == '"' && escape == false {
            break
        }

        string.push(char);

        ctx.increment();
    }

    ctx.push(
        TokenInfo::new(Token::DoubleQuotes, Some(string), ctx.cursor)
    );
}

fn single_quotes_tokenizer(ctx: &mut Context) {
    ctx.increment();

    let mut string = "".to_string();
    let mut escape = false;

    while let Some(char) = ctx.get() {
        if char == '\\' && escape == false {
            string.push(char);
            escape = true; continue 
        }


        if char == '\'' && escape == false {
            break
        }

        string.push(char);

        ctx.increment();
    }

    ctx.push(
        TokenInfo::new(Token::SingleQuotes, Some(string), ctx.cursor)
    );
}

// - - -

fn analyzer(ctx: &mut Context) -> Vec<TokenInfo> {
    while let Some(char) = ctx.get() {
        match char {
            | 'A' ..= 'Z'
            | 'a' ..= 'z'
            | '0' ..= '9'
            | '_'   => identifier_tokenizer(ctx),

            '\'' => single_quotes_tokenizer(ctx),
            '"' => double_quotes_tokenizer(ctx),
            ' ' => (),

            _ => ctx.push(
                TokenInfo::new(Token::new(&char), None, ctx.cursor)
            )

        }

        ctx.increment();
    }

    ctx.tokens.clone()
}

pub fn lexer(content: String) -> Vec<TokenInfo> {
    analyzer(&mut Context::new(content))
}
