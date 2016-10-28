/**
 * Created by hasee on 2016/10/27.
 * 增加海葵
 */
var anemoneObj = function () {
    this.x = [];
    this.len = [];
};

//.prototype 给anemoneObj添加属性 & 方法
anemoneObj.prototype.num = 50;//海葵数量
anemoneObj.prototype.init = function () {//初始化
    for (var i = 0; i < this.num; i++) {

        this.x[i] = i * 16 + Math.random()*20;//[0,1); 横轴位置
        this.len[i] = 200 + Math.random() * 50;
    }
    console.log(this.x.length);
} ;
anemoneObj.prototype.draw = function () {//绘画

    //初始海葵样式
    ctx2.save();//样式只在 s---restore之间
    ctx2.globalAlpha = 0.6;//透明度
    ctx2.lineWidth = 20;//线宽度
    ctx2.strokeStyle = "#3b154e";//刷什么颜色，在启用stroke();
    ctx2.lineCap = "round";//头部样式

    for (var i = 0; i < this.num; i++) {
        //beginPath开始位置 , moveTo到达点 , lineTo路径 , stroke线段 , strokeStyle线段颜色 , linWidth线段宽度 , lineCap线段结尾样式 , globalAlpha透明度
        ctx2.beginPath();
        ctx2.moveTo(this.x[i],canHeight);//起始 左上角（0，0）
        ctx2.lineTo(this.x[i],canHeight - this.len[i]);

        ctx2.stroke();

    }
    ctx2.restore();
};