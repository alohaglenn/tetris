const score = document.getElementById("score");
const canvas = document.getElementById("tetris");

const tetris = new Tetris(score, canvas);

const keyListener = (event) => {
  [[37, 38, 39, 40]].forEach((key) => {
    const player = tetris.player;
    if (event.type === "keydown") {
      if (event.keyCode === key[0]) {
        player.move(-1);
      } else if (event.keyCode === key[1]) {
        player.rotate(-1);
      } else if (event.keyCode === key[2]) {
        player.move(+1);
      }
    }

    if (event.keyCode === key[3]) {
      if (event.type === "keydown") {
        if (player.dropInterval !== player.DROP_FAST) {
          player.drop();
          player.dropInterval = player.DROP_FAST;
        }
      } else {
        player.dropInterval = player.DROP_SLOW;
      }
    }
  });
};

document.addEventListener("keydown", keyListener);
document.addEventListener("keyup", keyListener);
