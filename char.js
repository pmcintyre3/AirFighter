// Simple sprite class
function Sprite(args) {
    this.image = new Image();
    this.image.src = args.imgSrc;
    this.x = args.x;
    this.y = args.y;
    this.imgFrames = args.frames || 1;
    this.frame = 0;
    // Draw the sprite to the screen
    this.Draw = function() {
        ctx.globalAlpha = 1;
        ctx.drawImage(this.image, this.frame, 0, args.spw,
            args.spw, this.x, this.y, args.spw, args.spw);
        this.frame += PLAYER_CHAR_WIDTH;
        if( this.frame >= this.image.width ) this.frame = 0;
    };
};
