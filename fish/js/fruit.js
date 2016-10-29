/**
 * Created by hasee on 2016/10/28.
 */
var fruitObj = function () {
    this.alive = [];//bool; 判断果实是否活着
    this.x = [];
    this.y = [];
    this.orange = new Image();
    this.blue = new Image();

};

fruitObj.prototype.num = 30 ;//果实数量

fruitObj.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
        this.alive[i] = false;
        this.x[i] = 0;
        this.y[i] = 0;
        this.born(i);//果实初始位置
    }
    this.orange.src = "./src/fruit.png";
    this.blue.src = "./src/blue.png";
};

fruitObj.prototype.draw = function () {
    //draw
    //find an ane , grow, fly up
    for (var i = 0; i < this.num; i++) {

        ctx2.drawImage(this.orange,this.x[i] - this.orange.width * 0.5,this.y[i] - this.orange.height * 0.5);

    }


};

fruitObj.prototype.born = function (param) {

    //找海葵
    var aneID = Math.floor(Math.random() * anemone.num);//0~50 选择50只海葵中的一支
    this.x[param] = anemone.x[aneID];
    this.y[param] = canHeight - anemone.len[aneID];
};