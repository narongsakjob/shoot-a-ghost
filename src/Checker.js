var Checker = cc.Sprite.extend({
  ctor:function (){
    this._super();
    this.initWithFile( 'res/images/checker.png' );
  },
  gameOver:function( ghost ){
    var myPos = this.getPosition();
    var oPos = ghost.getPosition();
  return ( ( Math.abs( myPos.x - oPos.x ) <= 40 ) &&
  ( Math.abs( myPos.y - oPos.y ) <= 10 ) );
  }

});
