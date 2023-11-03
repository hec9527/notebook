use rand::Rng;
use std::cmp::Ordering;
use std::io;

fn main() {
    println!("===== Welcome  ====");

    println!("this is a guess number game, you can input 1 to 5");

    println!("if your number same as me, you win otherwise I win");

    let secret_num = rand::thread_rng().gen_range(1..=5);

    // println!("secret number: {secret_num}");

    let mut inp = String::new();

    let mut guess_time = 0;

    println!("input your number");

    loop {
        inp.clear();
        io::stdin().read_line(&mut inp).expect("error");

        let inp_num: i32 = match inp.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };

        guess_time += 1;

        match inp_num.cmp(&secret_num) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => {
                println!("🎉 you win!!");
                break;
            }
        }

        if guess_time >= 3 {
            println!("you lose it");
            break;
        }
    }

    println!("");
}
