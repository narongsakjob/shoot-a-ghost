var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );

        this.addKeyboardHandlers();

        this.cannon = new Cannon();
        this.cannon.setPosition(new cc.Point(screenWidth/2,30));
        this.addChild(this.cannon);

        this.bullet = new Bullet();
        this.bullet.setPosition(0,700);
        this.bullet.scheduleUpdate();

        this.checker = new Checker();
        this.checker.setPosition(screenWidth-50,190);
        this.addChild(this.checker);

        ghostArray[0] = new Ghost();
        ghostArray[1] = new Ghost();
        ghostArray[2] = new Ghost();
        ghostArray[3] = new Ghost();
        ghostArray[4] = new Ghost();
        for(var i=0;i<ghostArray.length;i++){
          ghostArray[i].setPosition(new cc.Point(0,550));
        }
        this.createGhost();


        this.scoreLabel = cc.LabelTTF.create( '0', 'Arial', 40 );
	      this.scoreLabel.setPosition( new cc.Point( 750, 550 ) );
	      this.addChild( this.scoreLabel );

        this.scheduleUpdate();

        return true;
    },
    update : function(){
      this.checkBullet();
      this.createGhost();
      this.checkGhost();
    },

    checkGhost: function(){
      for(var i=0;i<ghostArray.length;i++){
        if(ghostArray[i].hit(this.bullet)){
          ghostArray[i].setPosition(new cc.Point(0,550));
          this.removeChild(ghostArray[i]);
          score++;
          this.scoreLabel.setString(score);
          this.removeChild(this.bullet);
          this.bullet.setPositionY(700);
          this.checkGradeLevel();
        }
        if(this.checker.gameOver(ghostArray[i])){
          this.stopGame();
        }
      }
    },

    stopGame: function(){
      for(var j=0;j<ghostArray.length;j++){
      ghostArray[j].unscheduleUpdate();
      }
      this.bullet.unscheduleUpdate();
    },

    checkGradeLevel: function(){

       if(level == 1){
         this.runGradeLevel(0);
      }else if(level == 2){
        this.runGradeLevel(1);
      }else if(level == 3){
        this.runGradeLevel(2);
      }else if(level == 4){
        this.runGradeLevel(3);
      }else {
        this.runGradeLevel(4);
      }

    },
    runGradeLevel: function(index){
      countGhost[index] -= 1;
      if(countGhost[index] == 0){
        count=0;
        level+=1;
        this.updateMoveSpeed();
        if(index == 4)
        countGhost[index] = 5 ;
      }
    },

    updateMoveSpeed: function(){
      for(var i=0;i<ghostArray.length;i++){
        ghostArray[i].velocityUp();
      }
    },

    createGhost: function(){

      count+=1;

      if(level == 1){
        if(count==1){
          this.addGhost(0);
        }
      }else if(level == 2){
          if(count==1){
            this.addGhost(0);
          }else if(count == 60){
            this.addGhost(1);
          }
      }else if(level == 3){
          if(count==1){
            this.addGhost(0);
          }else if(count == 60){
            this.addGhost(1);
          }else if(count == 120){
            this.addGhost(2);
          }
      }else if(level == 4){
          if(count==1){
            this.addGhost(0);
          }else if(count == 60){
            this.addGhost(1);
          }else if(count == 120){
            this.addGhost(2);
          }else if(count == 180){
            this.addGhost(3);
          }
       }else {
         if(count==1){
              this.addGhost(0);
          }else if(count == 70){
              this.addGhost(1);
          }else if(count == 140){
              this.addGhost(2);
          }else if(count == 210){
              this.addGhost(3);
          }else if (count == 280) {
              this.addGhost(4);
          }
       }

    },
    addGhost: function(index){
      this.addChild(ghostArray[index]);
      ghostArray[index].scheduleUpdate();
    },

    onKeyDown: function( keyCode, event ) {
      if(keyCode == cc.KEY.space){
        if(check==true){
         this.bullet = new Bullet();
         this.addChild(this.bullet);
         this.bullet.scheduleUpdate();
       }
       }
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
var count =0;
var level =1;
var ghostArray = [];
var hitPoint =0;
var countGhost = [1,2,3,4,5] ;
var score=0;
