var Bullet = cc.Sprite.extend({

  ctor: function(){
    this._super();
    this.initWithFile('res/images/bullet.png');
  },
  update: function(dt){
    this.setPosition( new cc.Point( screenWidth/2, this.getPositionY() + 10 ) );
  }



});
