/**
 * Created by Administrator on 2016/12/31 0031.
 */
$(function(){
    $(".subnav-control").on("click",function(event){
            if ($(this).hasClass('open')) {
                $(this).removeClass('open');
                $(this).removeClass("subnav-control-open")
                $(".subnav").hide();

            } else {
                $(this).addClass('open');
                $(".subnav").show();
                $(this).addClass("subnav-control-open")

            }
    });
    $(".subnav ol").css("display","none")
    $(".subnav ol").eq(0).css("display","block")
    $(".subnav ul li").on("click",function(){
        $(".subnav ul li").removeClass("active")
        $(".subnav ol").css("display","none")
        var num=$(this).index();
        $(".subnav ol").eq(num).css("display","block")
        $(this).addClass("active")
    })
    $(".sj-language").on("click",function(){
        $(".sj-language dd").toggleClass("sj-show")
        $(this).find("dl").toggleClass("cur")
    })

    $(".word-list h3 i").on("click",function(){
        $(this).parent("h3").toggleClass("active")
        $(this).toggleClass("act")
        // $(this).parent().next("ul").toggleClass("ul_hidden")
        $(this).parent().next("ul").slideToggle(1000);
    })
    
})