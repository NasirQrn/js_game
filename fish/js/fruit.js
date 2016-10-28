/**
 * Created by hasee on 2016/10/28.
 */
var fruitObj = function () {
        this.alive = [];//bool; 判断果实是否活着
};
fruitObj.prototype.num = 30 ;//果实数量
fruitObj.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
        this.alive[i] = false;
    }
};
fruitObj.prototype.draw = function () {

};