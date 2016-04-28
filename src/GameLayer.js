var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );

        this.addKeyboardHandlers();

        heart[0] = new Heart();
        heart[1] = new Heart();
        heart[2] = new Heart();
        heart[3] = new Heart();
        heart[4] = new Heart();
        heart[0].setPosition(40,550);
        heart[1].setPosition(105,550);
        heart[2].setPosition(170,550);
        heart[3].setPosition(240,550);
        heart[4].setPosition(305,550);


        this.cannon = new Cannon();
        this.cannon.setPosition(new cc.Point(screenWidth/2,50));
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

        fireBall[0] = new Fireball();
        fireBall[1] = new Fireball();
        fireBall[2] = new Fireball();
        fireBall[3] = new Fireball();
        fireBall[4] = new Fireball();

        for(var i=0;i<ghostArray.length;i++){
          this.addChild(heart[i]);
          ghostArray[i].setPosition(new cc.Point(0,480));
          fireBall[i].setPositionY(0);
          fireBall[i].scheduleUpdate();
        }

        this.createGhost();


        this.scoreLabel = cc.LabelTTF.create( '0', 'Arial', 40 );
	      this.scoreLabel.setPosition( new cc.Point( 750, 550 ) );
	      this.addChild( this.scoreLabel );

        this.scheduleUpdate();

        return true;
    },
    update : function(){
      this.createGhost();

        for(var i=0;i<ghostArray.length;i++){
          this.checkHitGhost(i);
          this.createFireball(i);
          this.checkHitFireball(i);
          }


    },
    checkHitFireball: function(index){
      if(this.cannon.hitFireball(fireBall[index])){
        fireBall[index].setPositionY(0);
        this.removeChild(fireBall[index]);
        this.removeChild(heart[countDeath]);
        countDeath-=1;
        if(countDeath == -1 ) this.stopGame();
      }
    },
    createFireball:function(index){
      if(fireBall[index].checkFireball()){
        if(ghostArray[index].equalsX(this.cannon)){
          fireBall[index] = new Fireball();
          fireBall[index].setPosition(ghostArray[index].getPosition());
          this.addChild(fireBall[index]);
          fireBall[index].scheduleUpdate();
        }

      }
    },
    checkHitGhost: function(index){

        if(ghostArray[index].hit(this.bullet)){
          ghostArray[index].setPosition(new cc.Point(0,480));
          this.removeChild(ghostArray[index]);
          score++;
          this.scoreLabel.setString(score);
          this.removeChild(this.bullet);
          this.bullet.setPositionY(700);
          this.checkGradeLevel();
        }
        if(this.checker.gameOver(ghostArray[index])){
          this.stopGame();
        }

    },

    stopGame: function(){
      for(var j=0;j<ghostArray.length;j++){
      ghostArray[j].unscheduleUpdate();
      }
      this.cannon.unscheduleUpdate();
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
          if(count==1 && level >= 1){
              this.addGhost(0);
          }else if(count == 60 && level >= 2){
              this.addGhost(1);
          }else if(count == 120 && level >= 3){
              this.addGhost(2);
          }else if(count == 180 && level >= 4){
              this.addGhost(3);
          }else if (count == 240 && level >= 5) {
              this.addGhost(4);
          }


    },
    addGhost: function(index){
      this.addChild(ghostArray[index]);
      ghostArray[index].scheduleUpdate();
    },

    onKeyDown: function( keyCode, event ) {
      if(keyCode == cc.KEY.space){
        if(this.bullet.checkBullet()){
         this.bullet = new Bullet();
         this.bullet.setPosition(this.cannon.getPositionX(),70);
         this.addChild(this.bullet);
         this.bullet.scheduleUpdate();
       }
       }
       if(keyCode == cc.KEY.left){
         this.cannon.moveLeft();
       }
       if(keyCode == cc.KEY.right){
         this.cannon.moveRight();
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
var fireBall = [];
var heart = [];
var countDeath = 4;
