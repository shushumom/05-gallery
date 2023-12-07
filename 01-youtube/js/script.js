$(function () {
  // 대상을 변수에 저장
  const $dim = $('.dim');
  const $videoWrap = $('.video-wrap');
  const $video = $videoWrap.find('.video iframe');
  const $btnClose = $('.btn-close');
  const $selectVideo = $('.video-list > li');

  // 이미지를 저장한 배열을 생성
  const imgArr = [
    'https://res.heraldm.com/content/image/2023/04/25/20230425000549_0.jpg',
    'https://image.musinsa.com/mfile_s01/2021/05/13/3fb5ed13afe8714a7e5d13ee506003dd120913.jpg',
    'https://img.wkorea.com/w/2021/11/style_6189ebb2d3726.jpg',
    'http://image.yes24.com/images/chyes24/froala/0/48248/58165.jpg',
  ];

  // 배열에 접근하는 방법은? : 배열[인덱스]
  // console.log(imgArr[1]);
  // body에 배경이미지로 첫번째 이미지를 적용해 주세요. : .css()
  // $('body').css('background-image', 'url(' + imgArr[0] + ')');
  // $selectVideo.css('background-image', `url(${imgArr[0]})`);
  // console.log(imgArr, $selectVideo);

  // li에 이미지를 각각 뿌리자
  // 여러개 요소에 각각 어떤 것을 해주려 할 때
  // 자바스크립트: forEach(function (item, index) {})
  // 제이쿼리 : each(function (index, item) {})
  $selectVideo.each(function (index, item) {
    console.log(index, item);
    // $(item).css('background-image', `url(${imgArr[index]})`);
    setBgImage(item, index);
  });

  // $selectVideo를 클릭했을 때
  $selectVideo.on('click', function () {
    // 해당 li의 인덱스를 받아서 videoIdx 변수에 담아
    const videoIdx = $(this).index();

    // imgArr배열에서 인덱스에 해당 배경이미지를 body에 적용
    // $('body').css('background-image', `url(${imgArr[videoIdx]})`);
    setBgImage('body', videoIdx);

    // 해당 li의 data-link 값을 가져와서 videoLink변수에 담자
    let videoLink = $(this).attr('data-link');
    videoLink += '?autoplay=1'; // videoLink = videoLink + '?autoplay=1'

    const videoTitle = $(this).text();
    // console.log(videoLink, videoTitle);

    // 그 값을 iframe의 src값으로 세팅
    $video.attr('src', videoLink);

    // videoTitle을 넣어주기
    $videoWrap.find('.video-title').text(videoTitle);

    // $dim을 보이게 - fadeIn()
    $dim.fadeIn();

    // $videoWrap을 보이게 - addClass()
    $videoWrap.addClass('active');
  });

  // 닫기 버튼을 클릭했을 때
  $btnClose.on('click', () => {
    $dim.fadeOut();
    $videoWrap.removeClass('active');
    $video.attr('src', '');
    $videoWrap.find('.video-title').text('');
  });

  // 배경 이미지를 적용하는 공통의 동작을 함수로 정의
  function setBgImage(item, index) {
    $(item).css('background-image', `url(${imgArr[index]})`);
  }
});
