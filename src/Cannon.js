var Cannon = cc.Sprite.extend({
  ctor:function (){
    this._super();
    this.initWithFile( 'res/images/cannon.png' );
  },
  moveLeft:function(){
      this.setPositionX(this.getPositionX()-30);
  },
  moveRight:function(){
      this.setPositionX(this.getPositionX()+30);
  },
  hitFireball:function(fireball){
    var myPos = this.getPosition();
    var oPos = fireball.getPosition();
  return ( ( Math.abs( myPos.x - oPos.x ) <= 25 ) &&
  ( Math.abs( myPos.y - oPos.y ) <= 25 ) );
  }

});
