var DeadMenu = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color( 127, 127, 127, 255 ) );

        this.setPosition( new cc.Point( 0, 0 ) );

        this.bottomPillar = cc.Sprite.create( 'res/images/END.png' );
        this.bottomPillar.setPosition( new cc.Point( 400, 300 ) );
        this.addChild( this.bottomPillar );
        this.addKeyboardHandlers();
        return true;
    },
    onKeyDown: function( keyCode, event ) {
          if(keyCode == cc.KEY.p){
              cc.director.runScene(new StartScene());
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
    }
});
DeadMenuScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new DeadMenu();
        layer.init();
        this.addChild( layer );
    }
});
