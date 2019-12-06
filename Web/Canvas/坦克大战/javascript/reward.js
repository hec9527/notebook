/**
 *  奖励类      
 *  6种奖励 
 *  铁锹0、五星1、坦克2、安全帽3、炸弹4、定弹5
 */

var reward=(function(){
    // 返回生成的奖励的坐标 以及类型
    function newReward(){
        var _reward=Math.floor(Math.random()*6);
        var _flag=false;
        do{
            var _posX=Math.floor(Math.random()*25);
            var _posY=Math.floor(Math.random()*25);
            if((_posX==0&&_posY==0)||(_posX==12&&_posY==0)||(_posX==24&&_posY==0)||(_posX==12&&_posY==24)){
                continue;
            }else{
                _flag=true;
            }
        }while(_flag==false);
        
        return [[_posX,_posY],_reward];
    }
    function getReward(tank,reward){
        // 己方获得奖励
        if(tank.flag==ally){
            if(reward==0){
                
            }else if(reward==1){

            }else if(reward==2){

            }else if(reward==3){

            }else if(reward==4){

            }else if(reward==5){

            }else{
                console.log('Error:reward index error!');
            }
        }else{  //敌方获得奖励
            if(reward==0){

            }else if(reward==1){

            }else if(reward==2){

            }else if(reward==3){

            }else if(reward==4){

            }else if(reward==5){

            }else{
                console.log('Error:reward index error!');
            }
        }
    }
    return {
        getReward,
        newReward,
    }
})