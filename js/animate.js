//スマホ以外ではアニメーションする
if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
  // 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

  // ふわっと出てくる
  $('.right-content').each(function(){ //fadeというクラス名が
    var elemPos = $(this).offset().top + 150;//要素より、150px下
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('animate__fadeInRight');// 画面内に入ったらfadeUpというクラス名を追記
    }
    });

    $('.left-content').each(function(){ //fadeというクラス名が
         var elemPos = $(this).offset().top + 150;//要素より、150px下
         var scroll = $(window).scrollTop();
         var windowHeight = $(window).height();
         if (scroll >= elemPos - windowHeight){
         $(this).addClass('animate__fadeInLeft');// 画面内に入ったらfadeUpというクラス名を追記
         }
         });

}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
  fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

//画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function(){
  fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述    
}
//スマホでは不透明にする
if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
   $('.right-content, .left-content').css('opacity', '1');
   $('.right-content, .left-content').removeClass('animate__animated')
}