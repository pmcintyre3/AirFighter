/*Creating the Level Scheme*/
var spawn = function() {

    if(ticks % sDiff === 0) {
        spawn_id = Math.floor(Math.random() * 16);
        spawn_x = STAGE_WIDTH / 4 + Math.random() * STAGE_WIDTH;
        spawn_y = 0;
        spawn_dx = 3 * Math.sin(spawn_id * Math.PI/6);
        spawn_dy = 1 + diff;

        addEnemy(spawn_x, spawn_y, spawn_dx, spawn_dy);
    }
};
