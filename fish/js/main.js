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

document.body.onload = game;
function game(){
    //lastTime = Date.now();
    //deltaTime = 0;


    init();
    gameloop();
}
function init(){
    //获得canvas context
    can1 = document.getElementById("canvas1");
    can2 = document.getElementById("canvas2");

    ctx1 =can1.getContext("2d");
    ctx2 =can2.getContext("2d");

    bgPic.src = "./src/background.jpg"; //初始化 new Image();

    canWidth = can1.width;
    canHeight = can1.height;

    //drawBackground();//todo * 不能在init加载背景 （可能缓存没有加载完毕 所以不能加载背景，需要连续刷新，以保证可以显示背景 ）

    anemone = new anemoneObj();
    anemone.init();

}
//循环
function gameloop(){
    //所用时间
    //var now = Date.now();
    //deltaTime = now - lastTime;
    //lastTime = Date.now();
    //    console.log(deltaTime);

    window.requestAnimFrame(gameloop);//相对于 setInterval ,setTimeout 来说 智能------》根据机器来自动进行 循环

    drawBackground();//todo 加载背景 （原视频 感觉一直刷新有问题 所有在init显示 ）
}