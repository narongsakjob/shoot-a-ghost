var Bullet = cc.Sprite.extend({

  ctor: function() {

    this._super();
    this.initWithFile( 'res/images/bullet.png' );

  },
  update: function() {
    this.setPositionY( this.getPositionY() + 12  );
  },
  checkBullet: function() {

    if( this.getPositionY() > 600 )  return true;

  }

});
