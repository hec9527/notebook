struct MyStruct {
    age: i32,
}

fn main() {
    // println!("Hello, world!");

    let mut a = 30i32;

    println!("a -> {:?}", a);

    a = 40i32;

    println!("a -> {:?}", a);

    // 解构
    let (c, mut d) = (true, "hello world");

    println!("c -> {}, d -> {}", c, d);

    d = "hah";

    println!("c -> {}, d -> {}", c, d);

    // 解构赋值

    let (e, f, g, h, i, j, age);

    (e, f, g) = (1, 4, 6);

    println!("e->{} f={} g={}", e, f, g);

    [h, .., i, j, _] = [1, 2, 3, 4, 5, 6, 7];

    println!("h={} i={} j={}", h, i, j);

    MyStruct { age, .. } = MyStruct { age: 32 };

    println!("age->{}", age);

    let mut aa = 30i32;

    println!("aa->{}", aa);

    aa += 40i32;

    println!("aa+=40i32={}", aa);

    // 常量，必须声明时赋值和指定类型
    const CONST_VALUE: i32 = 4090;

    println!("CONST_VALUE->{}", CONST_VALUE);

    // 重新声明变量，可以遮蔽之前的变量
    let e: i32 = 3090;

    println!("e->{}", e);
}
