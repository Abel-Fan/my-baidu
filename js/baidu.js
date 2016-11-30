$().ready(function () {
    var height = $(window).height();
    var num=0;

    //滑动事件
    touch.on("body","swipeup","#fullpage",function(){
        num--;
        if(num<=-4){
            num = -3;
        }
        $("#fullpage").css({
            marginTop:num*height,
            transition:"margin 1s ease"
        })

        sections(num);
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

    //浏览器发生改变时候
    $(window).resize(function(){
        height = $(window).height();
        $("#fullpage").css({
            marginTop:num*height,
            transition:"margin 1s ease"
        })
    })

    function sections(num) {
        var num2 = -num + 1;
        $(".section .left").css({
            animation:null
        })
        $(".section .right").css({
            animation:null
        })
        $(".section:nth-child("+num2+") .left").css({
            animation: "sectionsL 2s linear"
        })
        $(".section:nth-child("+num2+") .right").css({
            animation: "sectionsR 2s linear"
        })
    }
        //if(-num==1){
        //
        //}else if(-num==2){
        //    $(".section-two .left").css({
        //        animation: "sectionsL 2s linear"
        //    })
        //    $(".section-two .right").css({
        //        animation: "sectionsR 2s linear"
        //    })
        //}else if(-num==3){
        //    $(".section-two .left").css({
        //        animation: "sectionsL 2s linear"
        //    })
        //    $(".section-two .right").css({
        //        animation: "sectionsR 2s linear"
        //    })
        //}else if(-num==4){
        //    $(".section-two .left").css({
        //        animation: "sectionsL 2s linear"
        //    })
        //    $(".section-two .right").css({
        //        animation: "sectionsR 2s linear"
        //    })
        //}
    //}

});