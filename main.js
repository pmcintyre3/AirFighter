var atMainMenu;
var atGameOver;

var playerImg;
var layer;
var parallax;
var ticks;

var ctx;
var stage;
var player;
var gun;
var parallax;

var x = PLAYER_START_X;
var y = PLAYER_START_Y;
var dx = PLAYER_OFFSET_X;
var dy = PLAYER_OFFSET_Y;

var playerSpriteOptions;

var numEnemiesKilled;
var numEnemiesPass;
var numEnemiesReq;

function preloader(){

    atMainMenu = true;
    atGameOver = false;

    stage = document.getElementById("gameCanvas");
    ctx = stage.getContext("2d");
    stage.width = STAGE_WIDTH;
    stage.height = STAGE_HEIGHT;

    playerImg = new Image();
    playerImg.src = PLAYER_PATH_CHAR;

    window.addEventListener('keydown', doKeyDown, true);

    return mainMenuDraw(ctx);
}

function mainMenuDraw(ctx){

    function centerText(ctx, text, y){
        var m = ctx.measureText(text);
        var center = (STAGE_WIDTH - m.width) / 2;
        ctx.fillText(text, center, y);
    }

    window.addEventListener('keydown', menuPress, true);
    ctx.clearRect(0, 0, STAGE_HEIGHT, STAGE_WIDTH);
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, STAGE_HEIGHT, STAGE_WIDTH);
    var centerY = STAGE_HEIGHT / 2;
    ctx.font = '50px sans-serif';
    ctx.fillStyle = 'red';
    centerText(ctx, "ActionFighter!", centerY - 50);
    ctx.fillStyle = 'white';
    centerText(ctx, "Press any key to start!", centerY);
    ctx.font = '25px sans-serif';
    ctx.fillStyle = "black";
    centerText(ctx, "Use 'WASD' or the arrow keys to move", centerY + 50);
    centerText(ctx, "Use the Spacebar to shoot!", centerY + 100);
    centerText(ctx, "Created by Phillip McIntyre, 2015", centerY + 175);
}

function main(){
    layer = new Array(GROUND_PATH_CHAR, CLOUD_PATH_CHAR);
    parallax = new ParallaxScrolling(ctx, layer);

    playerSpriteOptions = {
        screen: ctx,
        imgSrc: PLAYER_PATH_CHAR,
        spw: PLAYER_CHAR_WIDTH,
        frames: 2,
        x: PLAYER_START_X + PLAYER_OFFSET_X,
        y: PLAYER_START_Y + PLAYER_OFFSET_Y,
        width: STAGE_WIDTH,
        height: STAGE_HEIGHT
    };

    ticks = 0;
    numEnemiesKilled = 0;
    numEnemiesPass = 0;

    player = new playerSprite(playerSpriteOptions);

    return setInterval(update, TIME_PER_FRAME);
}

function update(){

    if(atMainMenu){
        mainMenuDraw(ctx);
    }
    else {
        window.removeEventListener('keydown', menuPress, true);
        if (ticks > 99)
            ticks = 0;
        else
            ticks++;

        parallax.Draw();
        player.Draw();
        updateBullets();
        drawBullets(ctx);

        spawn();
        updateEnemies();
        drawEnemies(ctx);
        handleCollisions();
        //if (!playerAlive) {
        //    gameOver();
        //}
    }
}

//function hit(a, b){
//    return  a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
//}

function handleCollisions(){
    for(var i = 0; i < playerBullets.length; i++){
        var p = playerBullets[i];
        for(var j = 0; j < enemySprites.length; j++){
            var e = enemySprites[j];
            if(p.isVisible && e.alive) {
                if (p.xVal + p.w >= e.x && p.xVal + p.w <= e.x + e.width && p.yVal <= e.y + e.height && e.y >= p.yVal) {
                    console.log("hit");
                    p.isVisible = false;
                    e.alive = false;

                    numEnemiesKilled++;

                    //if(i != -1)
                    //    playerBullets.splice(i, 1);
                    //if(j != -1)
                    //    enemySprites.splice(j, 1);
                }
                else if (px + PLAYER_CHAR_WIDTH >= e.x && px + PLAYER_CHAR_WIDTH <= e.x + e.width && py <= e.y + e.height && e.y >= py) {
                    playerAlive = false;
                    console.log("player hit");

                }
            }
        }
    }
}

function menuPress(e){
    if(e.keyCode) {
        atMainMenu = false;
        return main();
    }
}

function doKeyDown (e){
    switch(e.keyCode){
        case 32:                    //keypress 'Spacebar'
            addBullet();
            break;
        case 65:                    //keypress 'a'
            if(px <= 0)
                px = 0;
            else
                px -= dx;
            break;
        case 37:                    //keypress 'left-arrow'
            if(px <= 0)
                px = 0;
            else
                px -= dx;
            break;
        case 87:                    //keypress 'w'
            if(py <= 0)
                py = 0;
            else
                py -= dy;
            break;
        case 38:                    //keypress 'up-arrow'
            if(py <= 0)
                py = 0;
            else
                py -= dy;
            break;
        case 68:                    //keypress 'd'
            if(px + PLAYER_CHAR_WIDTH >= STAGE_WIDTH)
                px = STAGE_WIDTH - PLAYER_CHAR_WIDTH;
            else
                px += dx;
            break;
        case 39:                    //keypress 'right-arrow'
            if(px + PLAYER_CHAR_WIDTH >= STAGE_WIDTH)
                px = STAGE_WIDTH - PLAYER_CHAR_WIDTH;
            else
                px += dx;
            break;
        case 83:                    //keypress 's'
            if(py + PLAYER_CHAR_HEIGHT >= STAGE_HEIGHT)
                py = STAGE_HEIGHT - PLAYER_CHAR_HEIGHT;
            else
                py += dy;
            break;
        case 40:                    //keypress 'down-arrow'
            if(py + PLAYER_CHAR_HEIGHT >= STAGE_HEIGHT)
                py = STAGE_HEIGHT - PLAYER_CHAR_HEIGHT;
            else
                py += dy;
            break;
        default:
            console.log(e.keyCode);
    }
}

function gameOver(){

    var sGameOver = "Game Over";

    function cText(ctx, text, y){
        var m = ctx.measureText(text);
        var center = (STAGE_WIDTH - m.width) / 2;
        ctx.fillText(text, center, y);
    }
}