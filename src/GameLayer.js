var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.cannon = new Cannon();
        this.cannon.setPosition(new cc.Point(screenWidth/2,30));
        this.addChild(this.cannon);
        this.addKeyboardHandlers();
        // this.bullet = null;
        this.scheduleUpdate();

        return true;
    },
    onKeyDown: function( keyCode, event ) {
      this.bullet = new Bullet();
      this.addChild(this.bullet);
      this.bullet.setPosition(new cc.Point(screenWidth/2,30));
      this.bullet.scheduleUpdate();
      this.scheduleUpdate();
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
