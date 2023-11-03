use core::num;

enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(u8, u8, u8),
}

fn main() {
    let m1 = Message::Quit;
    let m2 = Message::Write(String::from("hello world"));
    let m3 = Message::Move { x: 90, y: 22 };
    let m4 = Message::ChangeColor(23, 250, 184);

    handle_message(m1);
    handle_message(m2);
    handle_message(m3);
    handle_message(m4);

    // option 枚举
    option_enum();

    // 模式 通配符
    normal_placeholder();

    // if let 语法
    if_let();
}

fn handle_message(msg: Message) {
    match msg {
        Message::Quit => println!("Quit"),
        Message::Move { x, y } => println!("move to {x},{y}"),
        Message::Write(msg) => println!("write: {}", msg),
        Message::ChangeColor(r, g, b) => println!("changeColor: r->{}, g->{}, b->{}", r, g, b),
    }
}

fn option_enum() {
    let some_num = Some(3);
    // let some_char = Some("🚀");
    // let some_str = Some("hello world");
    // let absent_num: Option<i32> = None;

    let num = 9;

    let num1 = match some_num {
        Option::Some(_num) => num + _num,
        Option::None => num,
    };

    println!("num1 is {}", num1)
    // let num = num + some_num;
}

fn normal_placeholder() {
    let num1: u8 = 4;

    let num2 = match num1 {
        1 => num1 + 1,
        2 => num1 + 2,
        other => {
            print!("other -> {other} \n");
            other
        }
    };

    println!("num2 -> {num2}")
}

fn if_let() {
    // let num = Some(2);
    let num: Option<i32> = None;

    // 写法一
    if let Some(num) = num {
        println!("num = {num}");
    } else {
        println!("num is none");
    }

    // 写法二
    match num {
        Option::Some(num) => println!("num = {num}"),
        Option::None => println!("num is none"),
    }
}
