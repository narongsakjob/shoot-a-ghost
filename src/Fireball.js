var Fireball = cc.Sprite.extend({

  ctor: function(){
    this._super();
    this.initWithFile('res/images/fireball.png');
    this.vy = this.randomVelocity();
  },
  update: function(){
    this.setPositionY(this.getPositionY() - this.vy  );
  },
  checkFireball:function(){
  if(this.getPositionY() <= 0 ){
    return true;
  }
  },
  randomVelocity: function(level){
    return Math.floor(Math.random() * 9) + 1 ;
  }

});
