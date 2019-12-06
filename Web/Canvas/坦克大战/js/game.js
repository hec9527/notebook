/**
 * 程序入口  game 对象
 */
var canvas=canvas();
var key=key();
var map=map();
var reward=reward();
var source=source();
var tank=tank();
var event=event();
var game={
    //游戏中需要用到的资源
    
    //游戏中相关数据
    rank:0,//游戏关卡
    PlayerNum:1,//游戏玩家数量
    Pasued:false,//游戏是否暂停
    Started:false,//游戏是否开始
    player1:{//包含玩家的坦克  生命值  isOver
        tank:null,
        life:3,
        isOver:false,
    },               
    player2:{
        tank:null,
        life:3,
        isOver:false,
    },               
    windows:0,//游戏界面

    default:{
        rank:0,
    },
    
    init:function(){//初始化
        game.rank=0;//游戏关卡
        game.PlayerNum=1;//游戏玩家数量
        game.Pasued=false;//游戏是否暂停
        game.Started=false;//游戏是否开始
        game.player1={//包含玩家的坦克  生命值  isOver
            tank:null,
            life:3,
            isOver:false,
        };               
        game.player2={
            tank:null,
            life:3,
            isOver:false,
        };               
        game.windows=0;//游戏界面
    },

    startGame:function(){
        canvas.draw(canvas.bg,source.imgUI,0,0,516,117,30,30,516,117);
    }
}

game.startGame();
// canvas.draw(canvas.bg,source.imgUI,0,0,516,117,30,30,516,117);