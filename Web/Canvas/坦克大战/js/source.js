/**
 *  预加载游戏需要用到的资源
 *  使用未加载的资源的时候游戏会出错
 */

var source=(function(){
    //游戏开始界面
    var imgUI=new Image();
    imgUI.src="image/UI.png";

    //奖励图片
    var imgBonus=new Image();
    imgBonus.src="image/bonus.png";

    //爆炸效果图片
    var imgBomm=new Image();
    imgBomm.src="image/boom.png";

    //砖块图片
    var imgBrick=new Image();
    imgBrick.src="image/brick.png";

    //敌方坦克
    var imgEnemyTank=new Image();
    imgEnemyTank.src="image/enemyTank.png";

    //我方坦克
    var imgMyTank=new Image();
    imgMyTank.src="image/MyTank.png";

    //单人结算
    var imgGetScore=new Image();
    imgGetScore.src="image/getScore.png";

    //双人结算
    var imgGetScoreDouble=new Image();
    imgGetScoreDouble.src="image/getScoreDouble.png";

    //其他
    var imgTool=new Image();
    imgTool.src="image/tool.png";

    //音频文件
    var musicList={
        attack:"music/attack.mp3",
        attackOver:"music/attackOver.mp3",
        bomb:"music/bomb.mp3",
        eat:"music/eat.mp3",
        explode:"music/explode.mp3",
        life:"music/life.mp3",
        misc:"music/misc.mp3",
        gameOver:"music/over.mp3",
        pause:"music/pause.mp3",
        start:"music/start.mp3"
    }

    /**
     * 播放游戏音效
     * 利用函数作用域自动销毁每个播放控件
     * 需要参数 ---- 音效文件名
     * attack attackOver bomb eat explode life misc over pause start
     */
    function PlayMusic(music){
        var oAudio=document.createElement("audio");
        oAudio.autoplay=false;
        oAudio.loop=false;
        oAudio.src=music;
        oAudio.play();
    }

    return {
        imgUI,
        imgBomm,
        imgBonus,
        imgBrick,
        imgEnemyTank,
        imgGetScore,
        imgGetScoreDouble,
        imgMyTank,
        imgTool,
        PlayMusic,
        musicList,
    }
})