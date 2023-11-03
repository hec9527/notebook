enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}

fn main() {
    let m1 = Message::Quit;
    let m2 = Message::Move { x: 1, y: 1 };
    let m3 = Message::ChangeColor(255, 255, 0);
    show(m1);
    show(m2);
    show(m3);
}

fn show(msg: Message) {
    if msg === Message::Quit{
        println!("quit");
    }else if msg === Message.Move
}
