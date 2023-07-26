fn main() {
    let a: u8 = 254;

    /* 整数 */
    // 默认行为  overflow则循环
    let b = a.wrapping_add(255);
    println!("b->{}", b);

    // wrapping_* 等同默认行为
    let c = a.wrapping_add(255);
    println!("wrapping_add->{:?}", c);

    // 如果发生溢出则返回None，否则返回计算值
    let d = a.checked_add(255);
    println!("checked_add->{:?}", d);

    // 返回值和一个布尔值指示是否溢出，溢出值循环
    let e = a.overflowing_add(255);
    println!("overflowing_add->{:?}, overflow:{}", e.0, e.1);

    // 如果不溢出则返回正常值，如果溢出则返回最大值或者最小值
    let f = a.saturating_div(255);
    println!("saturating_add->{:?}", f);

    // 浮点数
    let x = 2.1;
    let y = 3.2f32;

    println!("x->{} y->{}", x, y);

    println!("0.1 + 0.2 = {}", 0.1 + 0.2);

    let x = 0.1f32;
    let y = 0.2f32;
    println!("(f32)  0.1 + 0.2 = {}", x + y);

    // NaN
    let x = (-42.0_f32).sqrt();
    println!("x is NaN? {}", x.is_nan());

    //
    // 运算符
    println!("加法运算  1 + 2 = {}", 1 + 2);
    println!("减法运算  2 - 1 = {}", 2 - 1);
    println!("乘法运算  2 * 2 = {}", 2 * 2);
    println!("除法运算  4 / 2 = {}", 4 / 2);
    println!("小数除法运算  4.4 / 2.0 = {}", 4.4 / 2.0);
    println!("求余运算  9 % 5 = {}", 9 % 5);

    // 类型
    let _x = 20;
    let _x: i32 = 30;
    let _x = 30i32;
    let x = [30i16, 30, 40];
    println!("数组第一个{:.2}", x[0]);

    // 序列
    println!("1..5");

    for i in 1..5 {
        print!("{},", i);
    }

    println!("\n1..=5");

    for i in 1..=5 {
        print!("{},", i);
    }

    println!("\n'a'..='g'");
    for i in 'a'..='g' {
        print!("{}", i);
    }

    // 复数
    // let a = Complex { re: 2.1, im: -3.2 };
    // let b = Complex::new(3.2,im:2.1);
    // println!("\n a + b = {}", a + b);

    // 字符
    let a = '中';

    println!("字符'中'占用{}字节的内存", std::mem::size_of_val(&a));

    println!("add_two(1, 2) -> {}", add_two(1, 2));

    // 字符串
    // let b = "hello";
    let mut b = String::from("hello");
    println!("{}", b);

    b.push_str(" world");

    println!("{}", b);

    let c = b.clone();

    println!("b->{}", b);
    println!("c->{}", c);

    let mut d = 32i32;

    let e = d;

    d = 23;

    println!("d->{} e->{}", d, e);
}

fn add_two(x: i32, y: i32) -> i32 {
    x + y
}
