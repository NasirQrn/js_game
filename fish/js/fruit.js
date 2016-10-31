/**
 * Created by hasee on 2016/10/28.
 * 屏幕上每次仅有 15个
 */
var fruitObj = function () {
    this.alive = [];//bool; 判断果实是否活着
    this.x = [];
    this.y = [];
    this.l = [];
    this.spd = [];//果实速度
    this.fruitType = [];//果实类型

    this.orange = new Image();
    this.blue = new Image();

};

fruitObj.prototype.num = 30;//果实数量

fruitObj.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
        this.alive[i] = false;
        this.x[i] = 0;
        this.y[i] = 0;
        this.spd[i] = Math.random() * 0.01 + 0.005; //[0.05,0.015);todo *随机速度系数 [游戏精髓]
        this.fruitType[i] = "";//初始为空 ，出生赋值
        this.born(i);//果实初始位置
    }
    this.orange.src = "./src/fruit.png";
    this.blue.src = "./src/blue.png";
};

fruitObj.prototype.draw = function () {//根据 born的初始属性 绘制小球
    //draw
    //find an ane , grow, fly up
    for (var i = 0; i < this.num; i++) {
        if (this.alive[i]) {
            var pic;
            if (this.fruitType[i] == "blue") {
                pic = this.blue;
            } else {
                pic = this.orange;
            }

            if (this.l[i] <= 14) {
                this.l[i] += this.spd[i] * deltaTime;//随时间增长
            }
            else {

                this.y[i] -= this.spd[i] * 7 * deltaTime;//小bug 生长的快 上升速度也快，解决方案----> 7 也给随机数组变量
            }

            ctx2.drawImage(pic, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);

            //检测上边界
            if (this.y[i] < 10) {
                this.alive[i] = false;
            }
        } else {
            //todo  可以直接执行生成新小球代码  sendFruit(),fruitMonitor()省略？ //未实验//

        }


    }


};

fruitObj.prototype.born = function (param) {//初始属性

    //找海葵
    var aneID = Math.floor(Math.random() * anemone.num);//0~50 选择50只海葵中的一支
    this.x[param] = anemone.x[aneID];
    this.y[param] = canHeight - anemone.len[aneID];
    this.l[param] = 0;//每次重生重置生长状态
    this.alive[param] = true;

    var type = Math.random();
    this.fruitType[param] = type > 0.3 ? "orange" : "blue"; //orange , blue ;
    console.log(this.fruitType[param]);
};
fruitObj.prototype.dead = function (e) {
    this.alive[e] = false;
};

//果实监视功能
function fruitMonitor() {

    var num = 0;

    for (var i = 0; i < fruit.num; i++) {//循环检测所有果实数量

        if (fruit.alive[i]) num++;

        if (num < 15) { //如果剩余果实数量少于15个 ，生成新果实

            //return fruit
            sendFruit();
            return
        }
    }

}

function sendFruit() { //生成新果实

    for (var i = 0; i < fruit.num; i++) {

        if (!fruit.alive[i]) {

            fruit.born(i);

        }

    }

}
