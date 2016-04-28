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
      this.setPosition(0,this.getPositionY()-20);
    }
  },
  velocityUp:function(){
    velocity+=0.1;
  },
  hit:function( bullet ){
    var myPos = this.getPosition();
    var oPos = bullet.getPosition();
  return ( ( Math.abs( myPos.x - oPos.x ) <= 25 ) &&
  ( Math.abs( myPos.y - oPos.y ) <= 25 ) );
  },
  equalsX:function( cannon ){
    var myPos = this.getPosition();
    var oPos = cannon.getPosition();
  return  ( Math.abs( myPos.x - oPos.x ) <= 15 )
  }
});
var velocity = 4;
