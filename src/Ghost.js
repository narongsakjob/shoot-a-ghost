var Ghost = cc.Sprite.extend({
  ctor:function (){
    this._super();
    this.initWithFile( 'res/images/gold.png' );
  },
  update:function(){
    this.setPositionX(this.getPositionX()+10);
    if(this.getPositionX()> 800){
      this.setPosition(new cc.Point(0,this.getPositionY+10));
    }
  }
});
