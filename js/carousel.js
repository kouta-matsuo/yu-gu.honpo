$(document).ready(function(){
    $('.carousel, .work-carousel').slick({
        autoplay: true, // 自動再生
        autoplaySpeed: 3000, // 自動再生の速さ、単位はミリ秒
        arrows: false, // 左右のナビゲーションを無効にする
        dots: true, // スライド下にドットを表示する
        fade: true, // スライドの切り替えをフェードにする
        speed: 1000,
        pauseOnFocus: false,
        cssEase: 'linear',
        pauseOnHover: false,
    });
});

