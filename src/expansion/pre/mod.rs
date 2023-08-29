// integrates processing instructions designed for debugging purposes.
pub fn analyzer(input: &str, path: &str) -> String {
    let mut output = String::new();

    for (i, row) in input.lines().enumerate() {
        let mut depth_str = String::new();

        for column in row.chars() {
            match column {
                '\t' => depth_str.push('\t'),
                ' ' => depth_str.push(' '),
                _ => break,
            }
        }

        if row.len() <= depth_str.len() {
            continue;
        }

        let fragment = format!("> document-fragment {} {}", path, i);
        depth_str.push_str(fragment.as_str());

        output.push_str(
            format!("{}\n{}", depth_str, row).as_str()
        );
    }

    return output;
}
