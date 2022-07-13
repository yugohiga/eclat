// クリック時にopenを付与
$('.hamburger').on('click',function(){
	$(this).toggleClass('open');
	$("#navigation").toggleClass('open');
});


// クリック時にopenを解除
$('#navigation a').on('click',function(){
	$('.hamburger').removeClass('open');
	$("#navigation").removeClass('open');
});


//クリック時に答えをスライドしてslideを付与
$('.question').on('click',function(){
	$(this).next().slideToggle();
	$(this).toggleClass('slide');
	$('.question').not(this).removeClass('slide').next().slideUp();
});


// セクションが画面内でactionを付与
$('.fadeIn').on('inview',function(event,isInView){
	$(this).stop().addClass("action");
});


// スムーススクロール
  $('a[href^="#"]').click(function(){
    var adjust = 0;
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });


// TOPへ戻るボタン表示域を設定
var pagetop = $('#page-top');
pagetop.hide();
$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        pagetop.fadeIn();
    } else {
        pagetop.fadeOut();
    }
});