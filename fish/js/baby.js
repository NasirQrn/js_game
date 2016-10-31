/**
 * Created by hasee on 2016/11/1.
 */
var babyObj = function () {
    this.x = 0;
    this.y = 0;
    this.angle = 0;
    this.babyEye = new Image();
    this.babyBody = new Image();
    this.babyTail = new Image();
};
babyObj.prototype.init = function () {

    this.x = canWidth * 0.5 - 50;
    this.y = canHeight * 0.5 - 50;
    this.angle = 0;
    this.babyEye.src = "./src/babyEye0.png";
    this.babyBody.src = "./src/babyFade0.png";
    this.babyTail.src = "./src/babyTail0.png";

};
babyObj.prototype.draw = function () {

    //lerp x,y
    this.x = lerpDistance(mom.x, this.x, 0.98);
    this.y = lerpDistance(mom.y, this.y, 0.98);

    //delta angle     Math.atan2(y,x)
    var deltaY = mom.y - this.y;
    var deltaX = mom.x - this.x;
    var beta = Math.atan2(deltaY, deltaX) + Math.PI;//正切 计算鼠标和物体角度  *注 返回值为 -PI ~ PI 所以 【+Math.PI】 修正PI

    //lerp angle
    this.angle = lerpAngle(beta, this.angle, 0.6);//延时转折

    ctx1.save();
    ctx1.translate(this.x, this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(this.babyTail, -this.babyTail.width * 0.5 + 23, -this.babyTail.height * 0.5);
    ctx1.drawImage(this.babyBody, -this.babyBody.width * 0.5, -this.babyBody.height * 0.5);
    ctx1.drawImage(this.babyEye, -this.babyEye.width * 0.5, -this.babyEye.height * 0.5);

    ctx1.restore();
};