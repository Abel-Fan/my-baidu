$().ready(function () {
    var height = $(window).height();
    var num=0;
    touch.on("body","swipeup","#fullpage",function(){
        num--;
        if(num<=-4){
            num = -3;
        }
        $("#fullpage").css({
            marginTop:num*height,
            transition:"margin 1s ease"
        })
    });

    touch.on("body","swipedown","#fullpage",function(){
        num++;
        if(num>=0){
            num=0;
        }
        $("#fullpage").css({
            marginTop:num*height,
            transition:"margin 1s ease"
        })
    })

});