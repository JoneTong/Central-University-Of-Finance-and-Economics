$(function(){
    // banner
    var num=0
    $(".ban").fadeOut()
    $(".ban").eq(0).fadeIn()
    $(".cite").css("background","rgba(0,0,0,0.8)")
    $(".cite").eq(num).css("background","rgba(170,25,75,0.8)")
    function moves(){
        num++
        if (num>3) {
            num=0
        }
        $(".cite").css("background","rgba(0,0,0,0.8)")
// console.log(num)
        $(".ban").fadeOut()
        $(".ban").eq(num).fadeIn()
        $(".cite").eq(num).css("background","rgba(170,25,75,0.8)")
    }
    var times=setInterval(moves,2000)
    $(".banin").mouseover(function(){
        clearInterval(times)
    })
    $(".banin").mouseout(function(){
        times=setInterval(moves,2000)
    })
    $(".cite").mouseover(function(){
        num=$(this).index()
        $(".cite").css("background","rgba(0,0,0,0.8)")
        $(".ban").fadeOut()
        $(".ban").eq(num).fadeIn()
        $(".cite").eq(num).css("background","rgba(170,25,75,0.8)")
    })

    
})
$(function () {

    /*$('#myTab a:last').tab('show');//初始化显示哪个tab
    $('#myTab a').click(function (e) {
        e.preventDefault();//阻止a链接的跳转行为
        $(this).tab('show');//显示当前选中的链接及关联的content
    })*/
    $('.tab').on('click',function(index){
        var index=$(this).index();
        $('.tablist').hide();
        $('.tablist').eq(index).show();
        $('.tab').removeClass('tabclick')
        $(this).addClass('tabclick')
    })
    $('.tab').eq(0).trigger('click')
})
