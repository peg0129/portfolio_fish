window.addEventListener('load', (event) => {
  //parallax
  var windowSize = window.innerWidth;
  if(windowSize > 600){ //読み込み時、画面サイズ600px以下はスマホサイズの為、parallaxなし
    var rellax = new Rellax('.rellax-target');
  }

  //title fade in
  $('.text-move').each(function(){
    $(this).children().addBack().contents().each(function() {
      if (this.nodeType == 3) {
        $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
      }
    });
    $(this).on('inview',function(){
      $(this).css({'opacity':1});
      for (var i = 0; i <= $(this).children('span').length; i++) {
        $(this).children('span').eq(i).delay(100*i).animate({'opacity':1},800);
      };
    });
  });

  //othere fade in
  $('.fatdeIN_type1').on('inview',function(){
    $(this).animate({'opacity':1},800).delay(2500);
  });

  $('.fatdeIN_type2').on('inview',function(){
    $(this).animate({'opacity':1},1500).delay(3500);
  });

  $('.fatdeIN_type3').on('inview',function(){
    $(this).animate({'opacity':1},2200).delay(4500);
  });

  //modal
    $('.modal_open').each(function(){
      $(this).on('click',function(){
        var target = $(this).data('target');
        var modal = document.getElementById(target);
          $(modal).fadeIn();
          return false;
        });

      $('.modal_close').on('click',function(){
        $('.modal_now').fadeOut();
        return false;
      });
    });

  //swiper
  let swipeOption = {
  loop: true,
  effect: 'fade',
  autoplay: { delay: 4000, disableOnInteraction: false,
},
  speed: 2000,
  breakpoints: {
    600: {
      slidesPerView: 1,
      spaceBetween: 0
    }
  }
}
  new Swiper('.swiper-container', swipeOption);

  //scroll jump
  var position1 = $(".p-about").offset().top;
  $(".page-scroll").click(function(){
    $("html,body").animate({
      scrollTop : position1
    }, 2000,"easeOutCirc",{queue : false});
  });

  //top jump
  var position2 = $(".l-header-box").offset().top;
  $(".page-top").click(function(){
    $("html,body").animate({
      scrollTop : position2
    }, 2500,"easeInOutCirc",{queue : false});
  });

  //particles
  particlesJS('canvas', {
    "particles": {
      "number": {
        "value": 20, //シェイプの数
        "density": {
          "enable": true,  //シェイプ密集度の可否
          "value_area": 1200 //シェイプの密集度
        }
      },
      "color": {
        "value": "#87cefa" //シェイプの色
      },
      "shape": {
        "type": "circle", //シェイプの形（circle:丸、edge:四角、triangle:三角、polygon:多角形、star:星型、image:画像）
        "stroke": {
          "width": 0, //シェイプの線の太さ
          "color": "#000000" //シェイプの線の色
        },
        "polygon": {
          "nb_sides": 5 //多角形の角の数
        },
        "image": {
          "src": "img/github.svg", //imageのパス
          "width": 100, //imageの幅
          "height": 100 //imageの高さ
        }
      },
      "opacity": {
        "value": 0.7, //シェイプの透明度
        "random": true, //シェイプ透明度のランダムの可否
        "anim": {
          "enable": false, //シェイプ透明度のアニメーション可否
          "speed": 1, //アニメーションの速度
          "opacity_min": 0.1, //透明度の最小値
          "sync": false //全てのシェイプを同時にアニメーションさせるか
        }
      },
      "size": {
        "value": 70, //シェイプの大きさ
        "random": true, //シェイプの大きさをランダムにするか
        "anim": {
          "enable": false, //シェイプの大きさをアニメーションさせるか
          "speed": 80, //アニメーションの速度
          "size_min": 30, //サイズの最小値
          "sync": false //全てのシェイプを同時にアニメーションさせるか
        }
      },
      "line_linked": {
        "enable": false, //線を表示するか
        "distance": 300, //線をつなぐシェイプの間隔
        "color": "#ffffff", //線の色
        "opacity": 0.4, //線の透明度
        "width": 2 //線の太さ
      },
      "move": {
        "enable": true, //シェイプを動かせるか
        "speed": 6, //シェイプの動くスピード
        "direction": "none", //エリア全体の動き(none、top、top-right、right、bottom-right、bottom、bottom-left、left、top-leftより選択)
        "random": false, //シェイプの動きをランダムにするか
        "straight": false, //個々のシェイプの動きを止めるか
        "out_mode": "out", //bounce:ボックス内で動かす,out:ボックス外に逃がす
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": { //マウスイベント設定
        "onhover": { //マウスオーバー時
          "enable": false, //有効の可否
          "mode": "repulse" //grad:付近のシェイプと線を繋ぐ, bubble:拡大, repulse:拒絶
        },
        "onclick": { //クリック時
          "enable": false, //有効の可否
          "mode": "push" //push:追加, remove:削除, bubble:拡大, repulse:拒絶
        },
        "resize": true //canvasのサイズ変更にわせて拡大縮小するか
      },
      "modes": { //マウスイベント発生時の詳細値を設定
        "grab": {
          "distance": 800, //カーソルからの反応距離
          "line_linked": {
            "opacity": 1 //線の透明度
          }
        },
        "bubble": {
          "distance": 800, //カーソルからの反応距離
          "size": 80, //シェイプの膨らむ大きさ
          "duration": 2, //膨らむシェイプの持続時間
          "opacity": 0.8, //膨らむシェイプの透明度
          "speed": 3 //膨らむシェイプのスピード
        },
        "repulse": {
          "distance": 400, //カーソルからの反応距離
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4 //増えるシェイプの数
        },
        "remove": {
          "particles_nb": 2 //減るシェイプの数
        }
      }
    },
    "retina_detect": true //Retina Displayを対応するか
  });


});
