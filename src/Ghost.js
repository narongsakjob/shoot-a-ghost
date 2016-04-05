var Ghost = cc.Sprite.extend({
  ctor:function (){
    this._super();
    this.initWithFile( 'res/images/gold.png' );
  },
  update:function(){
    if(this.getPositionX() < 800){
      this.setPositionX(this.getPositionX()+5);
    }
    else{
      this.setPosition(0,this.getPositionY()-30);
    }
  },
  hit:function( bullet ){
    var myPos = this.getPosition();
    var oPos = bullet.getPosition();
  return ( ( Math.abs( myPos.x - oPos.x ) <= 40 ) &&
  ( Math.abs( myPos.y - oPos.y ) <= 40 ) );
  }
});
