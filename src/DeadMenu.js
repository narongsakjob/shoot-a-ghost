var DeadMenu = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color( 127, 127, 127, 255 ) );

        this.setPosition( new cc.Point( 0, 0 ) );

        this.cannon = new Cannon();
        this.cannon.setPosition(new cc.Point(screenWidth/2,50));
        this.addChild(this.cannon);
        this.scheduleUpdate();
        return true;
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
