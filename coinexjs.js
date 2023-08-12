$('.buttonsforcarousel .ai').on('click',function(){
    console.log("ai clicked");                // debugging not necessary
    $('.buttonsforcarousel .ai').css('background-color','rgb(70,120,212)');
    $('.buttonsforcarousel .ai').css('color','rgba(237,238,245,.9)');
    $('.buttonsforcarousel .lo').css('background-color','rgba(237,238,245,.9)');
    $('.buttonsforcarousel .lo').css('color','rgb(70,120,212)');
    $('.buttonsforcarousel .tod').css('background-color','rgba(237,238,245,.9)');
    $('.buttonsforcarousel .tod').css('color','rgb(70,120,212)');
    $('.buttonsforcarousel .lp').css('background-color','rgba(237,238,245,.9)');
    $('.buttonsforcarousel .lp').css('color','rgb(70,120,212)');
    $('.carouseltext2').css('display','none');
    $('.carouseltext3').css('display','none');
    $('.carouseltext4').css('display','none');
    $('.carouseltext1').css('display','block');

})

$('.buttonsforcarousel .lo').on('click',function(){
    console.log("lo clicked");                // debugging not necessary
    $('.buttonsforcarousel .lo').css('background-color','rgb(70,120,212)');
    $('.buttonsforcarousel .lo').css('color','rgba(237,238,245,.9)');
    $('.buttonsforcarousel .ai').css('background-color','rgba(237,238,245,.9)');
    $('.buttonsforcarousel .ai').css('color','rgb(70,120,212)');
    $('.buttonsforcarousel .tod').css('background-color','rgba(237,238,245,.9)');
    $('.buttonsforcarousel .tod').css('color','rgb(70,120,212)');
    $('.buttonsforcarousel .lp').css('background-color','rgba(237,238,245,.9)');
    $('.buttonsforcarousel .lp').css('color','rgb(70,120,212)');
    $('.carouseltext1').css('display','none');
    $('.carouseltext3').css('display','none');
    $('.carouseltext4').css('display','none');
    $('.carouseltext2').css('display','block');
})

$('.buttonsforcarousel .tod').on('click',function(){
    console.log("lo clicked");                // debugging not necessary
    $('.buttonsforcarousel .tod').css('background-color','rgb(70,120,212)');
    $('.buttonsforcarousel .tod').css('color','rgba(237,238,245,.9)');
    $('.buttonsforcarousel .ai').css('background-color','rgba(237,238,245,.9)');
    $('.buttonsforcarousel .ai').css('color','rgb(70,120,212)');
    $('.buttonsforcarousel .lo').css('background-color','rgba(237,238,245,.9)');
    $('.buttonsforcarousel .lo').css('color','rgb(70,120,212)');
    $('.buttonsforcarousel .lp').css('background-color','rgba(237,238,245,.9)');
    $('.buttonsforcarousel .lp').css('color','rgb(70,120,212)');
    $('.carouseltext2').css('display','none');
    $('.carouseltext1').css('display','none');
    $('.carouseltext4').css('display','none');
    $('.carouseltext3').css('display','block');
})

$('.buttonsforcarousel .lp').on('click',function(){
    console.log("lo clicked");                // debugging not necessary
    $('.buttonsforcarousel .lp').css('background-color','rgb(70,120,212)');
    $('.buttonsforcarousel .lp').css('color','rgba(237,238,245,.9)');
    $('.buttonsforcarousel .ai').css('background-color','rgba(237,238,245,.9)');
    $('.buttonsforcarousel .ai').css('color','rgb(70,120,212)');
    $('.buttonsforcarousel .tod').css('background-color','rgba(237,238,245,.9)');
    $('.buttonsforcarousel .tod').css('color','rgb(70,120,212)');
    $('.buttonsforcarousel .lo').css('background-color','rgba(237,238,245,.9)');
    $('.buttonsforcarousel .lo').css('color','rgb(70,120,212)');
    $('.carouseltext2').css('display','none');
    $('.carouseltext3').css('display','none');
    $('.carouseltext1').css('display','none');
    $('.carouseltext4').css('display','block');
})
var count=0;

$('.menu').on('click',function(){
    // console.log("menu clicked");
    count=count+1;
    // console.log(count);
    if(count%2===1){
        // console.log("division "+count/2);
        $('.menucont').css('display','block');
    }
    else{
        $('.menucont').css('display','none');
    }
})
