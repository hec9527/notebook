/**
 * 对象实体
 * 使用立即执行函数封装
 * 提供Tank_Enemy,Tank_Ally,Bullt_Enemy,Bullt_Ally 创建对象的方法
 */


(function () {

    /**
     * 实体顶级对象  
     * 所有实体的父类
     * @param { "img" } img  实体的图像，图像是一个对象包含图像的URL，剪切起始位置，剪切宽高
     * @param { "int" } x   实体的位置x
     * @param { "int" } y   实体的位置y
     * @param { "int" } w   实体的宽度
     * @param { "int" } h   实体的高度
     * @param { "int" } sp   实体的速度
     * @param { "String" } dir  实体的方向
     */
    function Entity(img, x, y, w, h, sp) {
        this.image = img;
        this.posx = x;
        this.posy = y;
        this.width = w;
        this.height = h;
        this.speed = sp;
        this.diretion = "up";

    }

    // 敌方坦克类
    function Tank_Enemy(img, x, y, w, h, sp, life) {
        Entity.call(this, [img, x, y, w, h, sp]);
        let _reward = Math.floor(Math.random() * 10 - 8);
        this.reward = _reward <= 0 ? 0 : _reward;
        this.life = life + this.reward;
        this.flag = 0;
        this.move = function () {
            let dirs = ["up", "left", "right", "down"];
            this.diretion = dirs[Math.floor(Math.random() * 4 + 0.3)]; //使敌方坦克尽可能的向下移动 
            switch (this.diretion) {
                case "up":
                    this.posx += this.speed;
                    break;
                case "down":
                    this.posx += this.speed;
                    break;
                case "left":
                    this.posy += this.speed;
                    break;
                case "right":
                    this.posy += this.speed;
                    break;
                default:
                    console.log("Some Error Tank_Enemy.move");
                    break;
            }
        }
        this.shoot = function () {

        }
    }


    function Bullet_enemy(img, x, y, w, h, sp) {
        Entity.call(this);
        this.flag = 0;
    }





})();