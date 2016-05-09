var Checker = cc.Sprite.extend({
  ctor:function (){
    this._super();
    this.initWithFile( 'res/images/checker.png' );
    
  },
  gameOver:function( ghost ){
    var myPos = this.getPosition();
    var oPos = ghost.getPosition();
  return (   myPos.x - oPos.x  <= -20  &&
  ( Math.abs( myPos.y - oPos.y ) <= 15 ) );
  }

});
