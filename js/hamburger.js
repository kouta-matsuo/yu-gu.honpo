$(document).ready(function(){
    $(".nav-button").on("click", function(){//nav-buttonがクリックされたら
        $(".sp-nav").slideToggle();
        $('.close').css('display', 'block');
        $('.close').addClass("animate__rotateIn");//animate.cssのクラスをつけてアニメーションをする（×が出てくる）
        $(this).hide();
        $('.sp-nav').addClass("animate__fadeInRight");//横からメニューが出てくる
        $('.sp-nav').removeClass("animate__fadeOutLeft");
    });
});


$(document).ready(function(){
    $(".close").on("click", function(){//closeがクリックされたら
        $('.nav-button').show();
        $('.nav-button').addClass("animate__rotateIn")//nav-buttonに切り替える
        $(this).hide();
        $('.sp-nav').addClass("animate__fadeOutLeft");//メニューが左側に流れて消えていく
        $('.sp-nav').removeClass("animate__fadeInRight");

    });
});

//現在のページを取得する
$(function(){
    $('.nav-list li a').each(function(){
        let $href = $(this).attr('href');
        if(location.href.match($href)) {
        $(this).addClass('active');
        } else {
        $(this).removeClass('active');
        }
    });
});