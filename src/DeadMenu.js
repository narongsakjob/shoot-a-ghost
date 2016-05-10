var DeadMenu = cc.LayerColor.extend({
  init: function() {
    this._super( new cc.Color( 127, 127, 127, 255 ) );

    this.setPosition( new cc.Point( 0, 0 ) );
    this.blackground = cc.Sprite.create('res/images/blackground.jpg');
    this.blackground.setPosition(400,300);
    this.addChild(this.blackground);
    this.gg = cc.Sprite.create( 'res/images/gg.png' );
    this.gg.setPosition( new cc.Point( 400, 500 ) );
    this.addChild( this.gg );
    this.addKeyboardHandlers();

    this.a = new GameLayer();

    this.scoreLabel = cc.LabelTTF.create( '0', 'Arial', 80 );
    this.scoreLabel.setPosition( new cc.Point( 400, 300 ) );
    this.scoreLabel.setString("SCORE : "+score);
    this.addChild(this.scoreLabel);



    this.playGame = cc.Sprite.create('res/images/playGame.png');
    this.playGame.setPosition( new cc.Point( 400 , 30 ) );
    this.addChild(this.playGame);
    cc.audioEngine.playMusic(res.dead_music,true);
    this.scheduleUpdate();
    return true;
  },
  onKeyDown: function( keyCode, event ) {
    if(keyCode == cc.KEY.space){
      cc.audioEngine.stopMusic();
      this.a.setGame();
      cc.director.runScene(new StartMenuScene());
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
