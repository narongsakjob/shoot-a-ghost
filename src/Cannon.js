var Cannon = cc.Sprite.extend({
  ctor:function (){
    this._super();
    this.initWithFile( 'res/images/cannon.png' );
    this.vy = Cannon.VELOCITY ;
  },
  moveLeft:function(){
      this.setPositionX(this.getPositionX()-this.vy);
  },
  moveRight:function(){
      this.setPositionX(this.getPositionX()+this.vy);
  },
  hitFireball:function(fireball){
    var myPos = this.getPosition();
    var oPos = fireball.getPosition();
  return ( ( Math.abs( myPos.x - oPos.x ) <= 45 ) &&
  ( Math.abs( myPos.y - oPos.y ) <= 36 ) );
  }
});
Cannon.VELOCITY = 35;
