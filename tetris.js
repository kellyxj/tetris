/*
function main() {
    const canvas = document.querySelector("#glCanvas");
    const gl = canvas.getContext("webgl");

    if (gl === null) {
        alert(
            "Unable to initialize WebGL. Your browser or machine may not support it."
        );
        return;
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

window.onload = main;
/*

/*OUTLINE OF PROJECT:

1. Initially, game can be rendered in ASCII graphics for testing. Will use webGL for rendering later.
2. Game logic can be done in pure js. Player input can be handled with vanilla event listeners.
3. Concurrently begin training RNN using tetris battle rules. Optimize for self-play.
4. Final writeup should include: rules for tetris battle game mode (this will also serve to justify the novelty of the projects aims),
broad overview of ML techniques used. Preferably, the article explaining the project would incorporate multimedia elements (potentially
include animations) in order to explain gameplay concepts, as well as strategic novelties achieved by RNN. Also outline the arc of
progress made over successive iterations, explain where NN gets stuck at local extrema, etc.

*/

function Game() {
    this.dropSpeed = 0;
    this.lockTime = 0;
    this.state = []; // 10 x 20 board on whih the game will be played.
    this.currentPiece = new Piece();
    this.startGame = function() {};
    this.checkGameEnd = function() {};
    this.handlePlayerInput = function() {};
    this.handleTimeIncrement = function() {};
    this.generateNewPiece = function() {};
    this.render = function() {};
}

function Piece() {
    this.position = [0, 0];
    this.timeOnGround = 0; //When this number exceeds lockTime, the piece will lock and a new piece will generate.
}
