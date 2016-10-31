/**
 * Created by hasee on 2016/11/1.
 *
 * 判断大鱼和果实的位置
 */
function momFruitsCollision() {

    for (var i = 0; i < fruit.num; i++) {

        if (fruit.alive[i]) {

            //判断距离
            var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
            if (l < 900) {//小于900被吃掉
                //fruit eated
                fruit.dead(i);
            }


        }
    }

}
