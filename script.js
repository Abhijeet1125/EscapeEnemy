const play = document.getElementById("playground");
const score = document.getElementById("score")
let playWidth = document.getElementById("maindiv").clientWidth
let playHeight = document.getElementById("maindiv").clientHeight - 5
play.height = playHeight
play.width = playWidth
ctx = play.getContext('2d')

let backgroundSpeed = 2;


class background {

    constructor(length, height, relSpeed, imga) {
        this.length = length
        this.relSpeed = relSpeed
        this.imga = imga
        this.height = height
        this.x = 0;
    }
    draw() {
        ctx.drawImage(this.imga, 0, 0, this.length, this.height, this.x, 0, this.length, playHeight);
        ctx.drawImage(this.imga, 0, 0, this.length, this.height, this.x + this.length, 0, this.length, playHeight);

    }
    move() {
        if (this.x < -this.length) {
            this.x = 0;
        }
        this.x -= (backgroundSpeed * this.relSpeed);
    }
    display() {
        this.draw();
        this.move();
    }
}

let backgroundImages = Array(6)
for ( let i = 0 ; i < 6 ; i ++ ){
    backgroundImages[i] = new Image()
}
backgroundImages[0].src = "PNG/layers/layer-1.png"
backgroundImages[1].src = "PNG/layers/layer-2.png"
backgroundImages[2].src = "PNG/layers/layer-3.png"
backgroundImages[3].src = "PNG/layers/layer-4.png"
backgroundImages[4].src = "PNG/layers/layer-5.png"
backgroundImages[5].src = "PNG/layers/layer-6.png"

backgroundImages[0] = new background(3072, 1536, 0.2, backgroundImages[0]);
backgroundImages[1] = new background(3072, 1536, 0.4, backgroundImages[1]);
backgroundImages[2] = new background(3072, 1536, 0.6, backgroundImages[2]);
backgroundImages[3] = new background(3072, 1536, 0.9, backgroundImages[3]);
backgroundImages[4] = new background(3072, 1536, 1  , backgroundImages[4]);
backgroundImages[5] = new background(3072, 1536, 0.5, backgroundImages[5]);





function animate() {
    ctx.clearRect(0, 0, playWidth, playHeight)
    for ( let i  = 0 ; i < 6 ; i ++ ){
        backgroundImages[i].display();
    }
    requestAnimationFrame(animate);
}

animate();
