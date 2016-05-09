var StartMenu = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color( 0, 0, 0, 0) );

        this.setPosition( new cc.Point( 0, 0 ) );

        // this.bottomPillar = cc.Sprite.create( 'res/images/END.png' );
        // this.bottomPillar.setPosition( new cc.Point( 400, 300 ) );
        // this.addChild( this.bottomPillar );

        return true;
    }
});

StartMenuScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new StartMenu();
        layer.init();
        this.addChild( layer );
    }
});
