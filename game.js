/**
 * Created by Phillip McIntyre on 1/27/2015.
 */
//------------
//System Vars
//------------
var stage = document.getElementById("gameCanvas");
stage.width = STAGE_WIDTH;
stage.height = STAGE_HEIGHT;
var ctx = stage.getContext("2d");
ctx.fillStyle = "grey";
ctx.font = GAME_FONTS;

//---------------
//Preloading ...
//---------------
//Preload Art Assets
// - Sprite Sheet: Image API:
// http://www.html5canvastutorials.com/tutorials/html5-canvas-images/
var charImage = new Image();
charImage.ready = false;
charImage.happy = true;
charImage.onload = setAssetReady;
charImage.src = PLAYER_PATH_CHAR;  // source image location set in constants.js

function setAssetReady()
{
    this.ready = true;
}

//Display Preloading
ctx.fillRect(0,0,stage.width,stage.height);
ctx.fillStyle = "#000";
ctx.fillText(TEXT_PRELOADING, TEXT_PRELOADING_X, TEXT_PRELOADING_Y);
var preloader = setInterval(preloading, TIME_PER_FRAME);
var gameloop, currX, currY;

function preloading()
{
    if (charImage.ready)
    {
        clearInterval(preloader);

        gameloop = setInterval(update, TIME_PER_FRAME);
    }
}

//------------
//Game Loop
//------------
//currX, currY is a reference to  the image in sprite sheet
currX = IMAGE_START_X;
currY = IMAGE_START_Y;

function update()
{
    //Clear Canvas
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, stage.width, stage.height);

    //Draw Image
    ctx.drawImage(charImage,currX,currY,CHAR_WIDTH,CHAR_HEIGHT,
        CHAR_START_X,CHAR_START_Y,
        2*CHAR_WIDTH,2*CHAR_HEIGHT);

    currX += CHAR_WIDTH;
    if (currX >= SPRITE_WIDTH)
        currX = 0;
}