fn main() {
    // println!("Hello, world!");

    // let a = 1;
    // let b = 2;

    // if a == 2 || b == 1 {
    //     println!("first if");
    // } else if a == 1 {
    //     println!("a ==1");
    // }

    // let c: bool = if a == 1 { true } else { false };
    // println!("c is {c}");

    // let arr = [1, 2, 3, 4, 5, 6];

    // let mut index = 0;

    // while index < arr.len() {
    //     print!("{}, ", arr[index]);
    //     index += 1;
    // }

    // println!("");
    // for el in arr {
    //     print!("{el} ");
    // }

    // println!("");

    // let x = 1;
    // let y = 2;
    // println!("{x}, {y}");

    let s = String::from("hello world from china");

    println!("{}", first_word(&s));
    println!("{}", first_word(&s[6..]));
    println!("{}", first_word(&s[12..]));
}

fn first_word(s: &str) -> &str {
    for (i, item) in s.chars().into_iter().enumerate() {
        if item == b' ' as char {
            return &s[..i];
        }
    }

    return &s;
}
