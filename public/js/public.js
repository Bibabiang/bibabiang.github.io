// 滑动滚动条
$(window).scroll(function(){
  // 滚动条距离顶部的距离 大于 200px时
  if($(window).scrollTop() >= 480){
$('.navbar.fixed-top').css('background','rgba(0, 58, 112, 0.2)')
  }
  else{
    $('.navbar.fixed-top').css('background','rgba(255, 255, 255, 0.2)')
  }
})