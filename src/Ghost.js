var Ghost = cc.Sprite.extend({
  ctor:function (){
    this._super();
    this.initWithFile( 'res/images/ghost.png' );
  },
  update:function(){
    if(this.getPositionX() < 800){
      this.setPositionX(this.getPositionX()+velocity);
    }
    else{
      this.setPosition(0,this.getPositionY()-40);
    }
  },
  velocityUp:function(){
    velocity+=0.2;
  },
  hit:function( bullet ){
    var myPos = this.getPosition();
    var oPos = bullet.getPosition();
  return ( ( Math.abs( myPos.x - oPos.x ) <= 25 ) &&
  ( Math.abs( myPos.y - oPos.y ) <= 25 ) );
  }
});
var velocity = 5;
