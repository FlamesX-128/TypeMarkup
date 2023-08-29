pub mod expansion;
pub mod lexer;
pub mod parser;

#[derive(Clone, Debug)]
pub struct DebugInfo {
    pub column: usize,
    pub row: usize,
}

impl DebugInfo {
    pub fn new(row: usize, column: usize) -> Self {
        Self { row, column }
    }
}

// - - -

#[cfg(test)]
mod tests {
    use super::lexer;

    #[test]
    fn it_works() {
        let expanded = lexer::analyzer("
* html - lang 'es' html

&* html; head
    | charset 'utf-8'
    meta
        
    | http-equiv 'X-UA-Compatible'
    | content 'IE=edge'
    meta
        
&* html; body
    'lorem ipsum dolor sit amet'        
");

        println!("{:#?}", expanded);
    }
}
