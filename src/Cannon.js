var Cannon = cc.Sprite.extend({
  ctor:function (){
    this._super();
    this.initWithFile( 'res/images/cannon.png' );
    this.vx = 0 ;
    this.direction = null;
  },
  update: function(){
    this.addsFriction();
    this.move();
  },
  addsFriction: function(){
    if(this.vx > 0) {
      this.vx -= FRICTION;
    }

    if(this.vx < 0 ){
      this.vx += FRICTION;
    }
  },
  move:function(){
    this.checkDistance();
    this.setPositionX( this.getPositionX() + this.vx);
  },
  moveLeft: function() {
    this.direction = Cannon.DIR.LEFT;
    this.vx = (-1)*Cannon.SPEED;
  },
  moveRight: function() {
    this.direction = Cannon.DIR.RIGHT;
    this.vx = Cannon.SPEED;
  },
  hitFireball:function(fireball){
    var myPos = this.getPosition();
    var oPos = fireball.getPosition();
    return ( ( Math.abs( myPos.x - oPos.x ) <= 45 ) &&
    ( Math.abs( myPos.y - oPos.y ) <= 36 ) );
  },
  checkDistance: function(){
    if((this.getPositionX() >= screenWidth - 50 && this.direction != Cannon.DIR.LEFT)|| (this.getPositionX() <=  50 && this.direction != Cannon.DIR.RIGHT)){
      this.vx = 0;
    }
  }
});

Cannon.SPEED = 9;
Cannon.DIR = {
  LEFT:1,
  RIGHT:2
};
FRICTION = 0.5;
