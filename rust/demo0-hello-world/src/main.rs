fn greet_world() {
    let germany = "germany";
    let chinese = "你好，世界";
    let english = "hello world";
    let regions = [germany, chinese, english];

    for region in regions {
        println!("{}", &region)
    }

    println!("{}", 21 % 6);
}

fn main() {
    // println!("Hello, world!");
    greet_world()
}
