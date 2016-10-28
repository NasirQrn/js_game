/**
 * Created by hasee on 2016/10/27.
 * 增加海葵
 */
var anemoneObj = function () {
    this.x = [];
    this.len = [];
};

//.prototype 给anemoneObj添加属性 & 方法
anemoneObj.prototype.num = 50;//数量
anemoneObj.prototype.init = function () {//初始化
    for (var i = 0; i < this.num; i++) {

        this.x[i] = i * 10 + Math.random();//[0,1);
        this.len[i] = 200 + Math.random() * 50;
    }
    console.log(this.x.length);
} ;
anemoneObj.prototype.draw = function () {//绘画
    for (var i = 0; i < this.num; i++) {
                //beginPath开始位置 , moveTo到达点 , lineTo路径 , stroke线段 , strokeStyle线段颜色 , linWidth线段宽度 , lineCap线段结尾样式 , globalAlpha透明度
    }
};