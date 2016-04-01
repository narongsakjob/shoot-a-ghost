var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.cannon = new Cannon();
        this.cannon.setPosition(new cc.Point(screenWidth/2,30));
        this.addChild(this.cannon);
        this.addKeyboardHandlers();
        // this.bullet = null;
        this.bullet = new Bullet();
         this.bullet.setPosition(0,0);
        this.scheduleUpdate();

        return true;
    },
    update : function(){
      this.checkBullet();
    },
    onKeyDown: function( keyCode, event ) {
      if(keyCode == cc.KEY.space){
        if(check==true){
         this.bullet = new Bullet();
         this.addChild(this.bullet);
         this.bullet.scheduleUpdate();
       }
       }
    //   this.bullet.setPosition(new cc.Point(screenWidth/2,30));

        //this.scheduleUpdate();



    },
    checkBullet: function(){
      if(this.bullet.getPositionY() > 600 || this.bullet.getPositionY()==0){
        check =true;
      }else{
        check = false;
      }

    },
    onKeyUp: function( keyCode, event ) {

    },
    addKeyboardHandlers: function() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed : function( keyCode, event ) {
                self.onKeyDown( keyCode, event );
            },
            onKeyReleased: function( keyCode, event ) {
                self.onKeyUp( keyCode, event );
            }
        }, this);
    },
});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});
var check =true;
