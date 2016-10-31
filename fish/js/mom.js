/**
 * Created by hasee on 2016/10/31.
 */
var momObj = function () {
    this.x = 0;
    this.y = 0;
    this.angle = 0;
    this.bigEye = new Image();
    this.bigBody = new Image();
    this.bigTail = new Image();
};
momObj.prototype.init = function () {
    this.x = canWidth * 0.5;
    this.y = canHeight * 0.5;
    this.angle = 0;
    this.bigEye.src = "./src/bigEye0.png";
    this.bigBody.src = "./src/bigSwim0.png";
    this.bigTail.src = "./src/bigTail0.png";

};
momObj.prototype.draw = function () {

    //lerp 碰撞函数
    this.x = lerpDistance(mx, this.x, 0.96);//鼠标位置，物体为止，系数   /返回值，aim + （cur - aim） * ratio--->    【cur - aim） * ratio】为缓慢接近鼠标
    this.y = lerpDistance(my, this.y, 0.96);//延时接近

    //delta angle     Math.atan2(y,x)
    var deltaY = my - this.y;
    var deltaX = mx - this.x;
    var beta = Math.atan2(deltaY, deltaX) + Math.PI;//正切 计算鼠标和物体角度  *注 返回值为 -PI ~ PI 所以 【+Math.PI】 修正PI

    //lerp angle
    this.angle = lerpAngle(beta, this.angle, 0.7);//延时转折


    //仅适用于大鱼  所以需要 save()~~restore
    ctx1.save();
    ctx1.translate(this.x, this.y);//画布位置移动（故，小鱼位置移动）
    ctx1.rotate(this.angle);
    ctx1.drawImage(this.bigEye, -this.bigEye.width * 0.5, -this.bigEye.height * 0.5);
    ctx1.drawImage(this.bigBody, -this.bigBody.width * 0.5, -this.bigBody.height * 0.5);
    ctx1.drawImage(this.bigTail, -this.bigTail.width * 0.5 + 30, -this.bigTail.height * 0.5);
    ctx1.restore();

};