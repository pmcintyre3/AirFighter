var playerShip = new Image();
var pCanvas = document.getElementById();
playerShip.src = "sprites/PlayerShip.png";

function sprite (c) {

    var character = {};
    
    character.context = c.context;
    character.width = c.width;
    character.height = c.height;
    character.image = c.image;

    return character;
}