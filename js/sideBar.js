let navLinksWidth ;
let asideWidth;
export default function navBar(){
    navLinksWidth = $('.Links').innerWidth();
    asideWidth = $('.myToggler').outerWidth();
    $('.foodContainer1').css('left',asideWidth);
    $('.foodContainer2').css('left',asideWidth);
    $('.foodContainer').css('left',asideWidth);
    console.log(-navLinksWidth);
    $('aside').css('left',-navLinksWidth);
    $('.myToggler').click(function(){
    if($('aside').css('left')==-navLinksWidth+'px'){
        $('aside').animate({left:'0px'},400);
        $('.navLinks1 p').eq(0).animate({top:'0%'},450)
        $('.navLinks1 p').eq(1).animate({top:'0%'},550)
        $('.navLinks1 p').eq(2).animate({top:'0%'},650)
        $('.navLinks1 p').eq(3).animate({top:'0%'},750)
        $('.navLinks1 p').eq(4).animate({top:'0%'},850);
        $('.myToggler').html('<i class="fa fa-close fs-2"></i>');
    }else if($('aside').css('left')=='0px'){
        $('.navLinks1 p').animate({top:'700%'},400);
        $('aside').animate({left:-navLinksWidth},800 , function(){
            $('.foodContainer1').css('left',asideWidth);
            $('.foodContainer2').css('left',asideWidth);
            $('.foodContainer').css('left',asideWidth);
        });

        $('.myToggler').html(`<div class="rounded rounded-4 mb-1"></div>
        <div class="rounded rounded-4 mb-1"></div>
        <div class="rounded rounded-4 mb-1"></div>
        <div class="rounded rounded-4 mb-1"></div>`);
    }
})
}

export function hideClick(){
    $('.navLinks1 p').animate({top:'700%'},400);
    $('aside').animate({left:-navLinksWidth},800,function(){
        $('.foodContainer1').css('left',asideWidth);
        $('.foodContainer2').css('left',asideWidth);
        $('.foodContainer').css('left',asideWidth);
    });
    $('.myToggler').html(`<div class="rounded rounded-4 mb-1"></div>
        <div class="rounded rounded-4 mb-1"></div>
        <div class="rounded rounded-4 mb-1"></div>
        <div class="rounded rounded-4 mb-1"></div>`)
}