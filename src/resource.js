var res = {
  cannon_png : 'res/images/cannon.png',
  bullet_png : 'res/images/bullet.png',
  ghost_png : 'res/images/ghost.png',
  checker_png : 'res/images/checker.png',
  fireball_png : 'res/images/fireball.png',
  heart_png : 'res/images/heart.png',
  nameGame_png : 'res/images/nameGame.png',
  gg_png : 'res/images/gg.png',
  game_music : 'res/sounds/musicGame.mp3',
  manu_music : 'res/sounds/musicManu.mp3',
  dead_music : 'res/sounds/musicDead.mp3',
  shoot_sound : 'res/sounds/shootSound.mp3',
  ghost_sound : 'res/sounds/ghostSound.mp3'

};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
