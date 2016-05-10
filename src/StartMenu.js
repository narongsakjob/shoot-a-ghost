var StartMenu = cc.LayerColor.extend( {
    init: function() {
        this._super( new cc.Color( 0, 0, 0, 0) );

        this.setPosition( new cc.Point( 0, 0 ) );
        this.addKeyboardHandlers();
        this.nameGame = cc.Sprite.create('res/images/nameGame.png');
        this.nameGame.setPosition( new cc.Point( 400 , 530 ) );
        this.addChild(this.nameGame);

        this.playGame = cc.Sprite.create('res/images/playGame.png');
        this.playGame.setPosition( new cc.Point( 400 , 30 ) );
        this.addChild(this.playGame);

        this.move = cc.Sprite.create('res/images/move.png');
        this.move.setPosition( new cc.Point( 400 , 400 ) );
        this.addChild(this.move);

        this.leftMove = cc.Sprite.create('res/images/leftMove.png');
        this.leftMove.setPosition( new cc.Point( 345 , 315 ) );
        this.addChild(this.leftMove);

        this.rightMove = cc.Sprite.create('res/images/rightMove.png');
        this.rightMove.setPosition( new cc.Point( 455 , 317 ) );
        this.addChild(this.rightMove);

        this.shoot = cc.Sprite.create('res/images/shoot.png');
        this.shoot.setPosition( new cc.Point( 400 , 240 ) );
        this.addChild(this.shoot);

        this.space = cc.Sprite.create('res/images/space.png');
        this.space.setPosition( new cc.Point( 400 , 170 ) );
        this.addChild(this.space);

        cc.audioEngine.playMusic(res.manu_music,true);

        return true;
    },
    onKeyDown: function( keyCode, event ) {
      if(keyCode == cc.KEY.space){
        cc.audioEngine.stopMusic();
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

StartMenuScene = cc.Scene.extend( {
    onEnter: function() {
        this._super();
        var layer = new StartMenu();
        layer.init();
        this.addChild( layer );
    }
});
