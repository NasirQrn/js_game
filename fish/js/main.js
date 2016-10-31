/**
 * Created by hasee on 2016/10/19.
 */
//全局变量
var can1,can2 ;//画布

var ctx1,ctx2;//场景

var lastTime,deltaTime;//时间

var canWidth,canHeight;


var bgPic = new Image(); // bgPic.src = "XXXX" 给浏览器缓存了一张图片。

var anemone ;

var fruit ;

var mom;

var baby;

//鼠标
var mx;
var my;
document.body.onload = game;
function game(){
    lastTime = Date.now();
    deltaTime = 0;


    init();
    gameloop();
}
function init(){
    //获得canvas context
    can1 = document.getElementById("canvas1");//fishes , dust , UI , circle
    can2 = document.getElementById("canvas2");//background , anemone ,fruits

    ctx1 =can1.getContext("2d");
    ctx2 =can2.getContext("2d");

    //鼠标监测事件
    can1.addEventListener('mousemove', onMouseMove, false);//鼠标移动的时候 运行onMouseMove;

    bgPic.src = "./src/background.jpg"; //初始化 new Image();

    canWidth = can1.width;
    canHeight = can1.height;

    //drawBackground();//todo * 不能在init加载背景 （可能缓存没有加载完毕 所以不能加载背景，需要连续刷新，以保证可以显示背景 ）

    anemone = new anemoneObj();
    anemone.init();

    fruit = new fruitObj();
    fruit.init();

    mom = new momObj();
    mom.init();

    baby = new babyObj();
    baby.init();

    mx = canWidth * 0.5;
    my = canHeight * 0.5;

}
//循环
function gameloop(){
    //所用时间
    var now = Date.now();
    deltaTime = now - lastTime;//两帧之间时间间隔
    lastTime = now;
    if (deltaTime > 40) deltaTime = 40;
    //    console.log(deltaTime);

    window.requestAnimFrame(gameloop);//相对于 setInterval ,setTimeout 来说 智能------》根据机器来自动进行 循环

    drawBackground();//todo 加载背景 （原视频 感觉一直刷新有问题 所有在init显示 ）
    anemone.draw();
    fruitMonitor();//监测果实
    fruit.draw();

    //每次重新绘制
    ctx1.clearRect(0, 0, canWidth, canHeight);
    mom.draw();
    momFruitsCollision();
    baby.draw();

}

function onMouseMove(e) {
    if (e.offsetX || e.layerX) {//兼容浏览器  layerX是FF、chrome识别，offsetX是除了FF之外
        mx = e.offsetX == undefined ? e.layerX : e.offsetX;
        my = e.offsetY == undefined ? e.layerY : e.offsetY;
        console.log(mx);
    }
}