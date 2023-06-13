use lazy_static::__Deref;

pub mod models;
pub mod modules;
//pub mod test;

/*#[no_mangle]
pub extern "C" fn get_numbers() -> *const u8 {
        // Crear un vector de números
        let mut numbers: Vec<u8> = vec![1, 2, 3, 4, 5];

        // Obtener el puntero al arreglo
        let numbers_ptr = numbers.as_mut_ptr();

        // Evitar que el vector sea liberado al finalizar el ámbito de esta función
        std::mem::forget(numbers);

        println!("Puntero: {:p}", numbers_ptr);

        // Retornar el puntero al arreglo
        numbers_ptr

}
*/

#[cfg(test)]
mod test {
    use crate::modules::{lexer, parser};

    fn a() {

    }

    #[test]
    fn test() {
        let file = std::fs::read_to_string("test/test.tm").unwrap();

        let value = lexer::lexer(file.to_string());

        println!("{:#?}", value);

        let data = parser::parser(value);

        println!("{:#?}", data);

        let b = &a;
    }
}