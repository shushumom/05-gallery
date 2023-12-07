$(function () {
  // 대상을 변수에 저장
  const $dim = $('.dim');
  const $popup = $('.popup');
  const $galleryContent = $('.gallery-content');
  const $btnClose = $('.btn-close');
  const $gallery = $('.gallery-list > li');
  const $window = $(window);
  console.log(window.outerWidth);

  // 갤러리를 클릭하면
  $gallery.on('click', function () {
    // $dim을 보이게
    $dim.fadeIn();
    // $popup에 active 클래스 부여
    $popup.addClass('active');

    const $target = $(this).find('img');
    // 클릭한 이미지의 src, alt, data-link를
    // imgSrc,imgTitle,videoSrc 변수에 저장해서 콘솔에 뿌리자
    const imgSrc = $target.attr('src');
    const imgTitle = $target.attr('alt');
    // const videoSrc = $target.attr('data-link');
    const videoSrc = $target.data('link');

    console.log(imgSrc, imgTitle, videoSrc);

    // 상황에 따른 코드 작성 : videoSrc가 있다고 가정하고 = true
    if (videoSrc) {
      //  동영상을 뿌려야 하는 상황
      // $galleryContent.html('<h1>동영상 뿌려라</h1>');
      $galleryContent.html(`<iframe src="${videoSrc}?autoplay=1" allow="autoplay"></iframe>`);
      $popup.css('width', $window.outerWidth() / 2);
    } else {
      // 이미지를 뿌려야 하는 상황
      // $galleryContent.text('이미지 뿌려라');
      $galleryContent.html(`<img src="${imgSrc}">`);
      $popup.css('width', $window.outerWidth() / 3);
    }

    // 타이틀(ingTitle) 뿌려주기
    // 대상.prepend('넣을요소')/* 기존 요소에 더해짐 */
    $galleryContent.prepend(`<div class="title">${imgTitle}</div>`);
  });

  // 닫기 버튼을 클릭했을 때
  $btnClose.on('click', function () {
    $dim.fadeOut();
    $popup.removeClass('active');

    // $galleryContent 초기화
    $galleryContent.html('');
    $popup.css('width', '');
  });

  // 대상.append('넣을 요소') : 대상의 뒤
  // 대상.prepend('넣을 요소') : 대상의 앞
  $('body').append('<h1>append : 마지막에 넣기</h1>');
  $('body').prepend('<h1>prepend : 처음에 넣기</h1>');
});
