fn main() {
    let mut x = 5;
    let y = &x;

    println!("x->{}", x);
    println!("y->{}", y);
    assert_eq!(5, *y);

    x = 6;
    assert_eq!(6, x);
    println!("x->{}", x);
    // println!("y->{}", y);

    // 借用    通过获取指针来获取值
    let str = String::from("hello world");

    let len = get_str_len(&str);

    println!("字符串'{}'的长度为{}", str, len);

    // 可变引用  通过获取可变变量的可变指针来修改值
    let mut str = String::from("hello");

    {
        let s1 = &mut str;
        println!("s1->{}", s1);
        s1.push_str(" world");
        println!("s1->{}", s1);
    }

    println!("str->{}", str);
}

fn get_str_len(str: &String) -> usize {
    str.len()
}
