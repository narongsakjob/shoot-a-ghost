var Fireball = cc.Sprite.extend({

  ctor: function(){
    this._super();
    this.initWithFile('res/images/fireball.png');
  },
  update: function(){
    this.setPositionY(this.getPositionY() - 2  );
  },
  checkFireball:function(){
  if(this.getPositionY() <= 0 ){
    return true;
  }
  }

});
