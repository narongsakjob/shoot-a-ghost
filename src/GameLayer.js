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
        this.bullet.scheduleUpdate();

        ghostArray[0] = new Ghost();
        ghostArray[1] = new Ghost();
        ghostArray[2] = new Ghost();
        ghostArray[3] = new Ghost();
        ghostArray[4] = new Ghost();
        this.setPosGhost();
        this.createGhost();

        //this.addChild(this.ghost);

        this.scheduleUpdate();
        return true;
    },
    update : function(){
      this.checkBullet();
      this.createGhost();
      for(var i=0;i<ghostArray.length;i++){
      if(ghostArray[i].hit(this.bullet)){
        this.removeChild(ghostArray[i]);
        this.removeChild(this.bullet);
        this.bullet.setPositionY(700);
        ghostArray[i].setPosition(new cc.Point(0,600));
        this.checkGradeLevel();
        // level+=1;
        // count=0;
      }
    }

    },
    checkGradeLevel: function(){

       if(level == 1){
         countGhost[0]-=1;
          if(countGhost[0]==0){
            level += 1;
            count=0;
          }
      }else if(level == 2){
        countGhost[1]-=1;
        if(countGhost[1]==0){
          level += 1;
          count=0;
        }
      }else if(level == 3){
        countGhost[2] -= 1;
        if(countGhost[2] == 0){
          level += 1;
          count=0;
        }
      }else if(level == 4){
        countGhost[3] -= 1;
        if(countGhost[3] == 0){
          level += 1;
          count=0;
        }
      }else {
        countGhost[4] -= 1;
        if(countGhost[4] == 0){
          count=0;
          countGhost[4] = 5 ; 
        }
      }
    },
    setPosGhost: function(){
      for(var i=0;i<ghostArray.length;i++){
        ghostArray[i].setPosition(new cc.Point(0,600));
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
          }else if(count == 70){
            this.addGhost(1);
          }
      }else if(level == 3){
          if(count==1){
            this.addGhost(0);
          }else if(count == 70){
            this.addGhost(1);
          }else if(count == 140){
            this.addGhost(2);
          }
      }else if(level == 4){
          if(count==1){
            this.addGhost(0);
          }else if(count == 70){
            this.addGhost(1);
          }else if(count == 140){
            this.addGhost(2);
          }else if(count == 210){
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
