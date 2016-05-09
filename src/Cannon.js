var Cannon = cc.Sprite.extend({
  ctor:function (){
    this._super();
    this.initWithFile( 'res/images/cannon.png' );
    this.vy = 0.01 ;
  },
  update: function(){

    this.move();
  },
  switchDirection:function(direction) {

    if(direction == 1){
      this.isLeft = true;
    }else if(direction == 2){
      this.isRight = true;
    }

  },
  move:function(){
      if(this.isLeft == true){
      this.setPositionX(this.getPositionX()+Cannon.MOVE_LEFT);
      this.isLeft = false;
      }else {
      this.setPositionX(this.getPositionX()-this.vy);
      }
      if(this.isRight == true){
      this.setPositionX(this.getPositionX()+Cannon.MOVE_RIGHT);
      this.isRight = false;
      }else{
      this.setPositionX(this.getPositionX()+this.vy);
      }
  },
  hitFireball:function(fireball){
    var myPos = this.getPosition();
    var oPos = fireball.getPosition();
  return ( ( Math.abs( myPos.x - oPos.x ) <= 45 ) &&
  ( Math.abs( myPos.y - oPos.y ) <= 36 ) );
  },
  checkDistanceLeft: function(){
    if(this.getPositionX()-35 >14)
      return true;
  },
  checkDistanceRight: function(){
    if(this.getPositionX()+35 < 785)
      return true;
  }
});

Cannon.MOVE_LEFT = -33;
Cannon.MOVE_RIGHT = 33;
Cannon.DIR = {
  LEFT:1,
  RIGHT:2
};
