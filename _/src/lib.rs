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
    use crate::expansion;

    #[test]
    fn it_works() {
        let value = expansion::pre::analyzer(
            "\n\t\thtml",
            "src/lib.rs"
        );

        println!("{}", value);

        assert_eq!(value, "\t\t> document-fragment src/lib.rs 1\n\t\thtml");
    }
}
