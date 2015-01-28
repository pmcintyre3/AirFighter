/*Creating the Level Scheme*/
var spawn_x;
var spawn_y;
var spawn_dx;
var spawn_dy;
var spawn_id;

var spawn = function() {

    if(ticks % 50 === 0) {
        spawn_id = Math.floor(Math.random() * 16);
        spawn_x = STAGE_WIDTH / 4 + Math.random() * STAGE_WIDTH;
        spawn_y = 0;
        spawn_dx = 2 * Math.sin(spawn_id * Math.PI/8);
        spawn_dy = 1;

        addEnemy(spawn_x, spawn_y, spawn_dx, spawn_dy);
    }
};
