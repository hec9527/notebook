struct Rectangle {
    width: i32,
    height: i32,
}

impl Rectangle {
    fn area(&self) -> i32 {
        self.height * self.width
    }
}

struct Square {
    width: i32,
    height: i32,
}

impl Square {
    fn area(&self) -> i32 {
        self.width * self.height
    }
}

struct Shap;

impl Shap {
    fn rect(width: i32, height: i32) -> Rectangle {
        Rectangle { width, height }
    }

    fn square(size: i32) -> Square {
        Square {
            width: size,
            height: size,
        }
    }
}

fn main() {
    let r1 = Shap::square(100);
    println!("r1 area is: {}", r1.area());

    let r2 = Shap::rect(20, 80);
    println!("r2 area is: {}", r2.area());
}
