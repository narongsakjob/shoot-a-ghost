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
  }

});
