var Ghost = cc.Sprite.extend({
  ctor:function (){
    this._super();
    this.initWithFile( 'res/images/gold.png' );
  },
  update:function(){
    if(this.getPositionX() < 800){
      this.setPositionX(this.getPositionX()+10);
    }
    else{
      this.setPosition(0,this.getPositionY()-30);
    }
  }
});
