fn main() {
    // println!("Hello, world!");
    let a = 10;

    let b: i32 = 30;

    let mut _c = 30i32;

    let d = 30_i32;

    let e = 30_21i32;

    let f = add(add(a, b), add(_c, d));

    println!("a + b + c + d = {}", f);

    println!("e: {}", e);
}

fn add(a: i32, b: i32) -> i32 {
    a + b
}
