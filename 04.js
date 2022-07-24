var modals = document.getElementsByClassName("modal");
var btns = document.getElementsByClassName("btn");
var spanes = document.getElementsByClassName("close");
var funcs = [];
 
function Modal(num) {
  return function() {
    btns[num].onclick =  function() {
        modals[num].style.display = "block";
        console.log(num);
    };
 
    spanes[num].onclick = function() {
        modals[num].style.display = "none";
    };
  };
}
 
for(var i = 0; i < btns.length; i++) {
  funcs[i] = Modal(i);
}
 
for(var j = 0; j < btns.length; j++) {
  funcs[j]();
}
 
window.onclick = function(event) {
  if (event.target.className == "modal") {
      event.target.style.display = "none";
  }
};

// 이전, 다음 버튼 
$(".btn_prev, .btn_next").click(function(){
    var bt = $(this).hasClass('btn_prev');
    var n = $("#port>ul>li").index($(".modal:visible").parent());// �꾩옱�묓뭹踰덊샇
    var pre, next;
        if(n==0) {
            pre = $("#list>ul>li").length-1;
            next = n+1;
        } else if(n==$("#list>ul>li").length-1) {
            pre = n-1;
            next = 0;
        } else {
            pre = n-1;
            next = n+1;
        }
        if(bt) { // 이전
            $(".modal").eq(n).css("z-index",300).fadeOut();
            $(".modal").eq(pre).css("z-index",200).show();
        } else {    // 다음
            $(".modal").eq(n).css("z-index",300).fadeOut();
            $(".modal").eq(next).css("z-index",200).show();
        }
    });

//토글버튼 활성화
$(".menu>li>ul").hide();
    $(".menu>li>a").click(function(){
        var n=$(".menu>li>a").index(this);
        if(n==0){
            $(".menu>li>ul").eq(1).hide();
        } else {
            $(".menu>li>ul").eq(0).hide();
        }
        $(this).next().next().slideToggle(150);
    });

$("#category li").click(function(){
        // 카테고리별로 보이게
        $("#category li").removeClass("on");
        $(this).addClass("on");

        // 전체 카테고리 보이게 
        var cate = $(this).text();
        if(cate=="ALL") {
            $("#list>li").show();
        } else {
            $("#list>li").hide();
            $("#list>li."+cate).show();
        }
    });

    //마우스다운/슬라이드-category
    var move_x = 0; // 드래그한 이동값용 변수
    var move=false; // 드래그 여부용 변수
    var ul_left = parseInt($("#category").css("margin-left"));
    var linit_min = 50;
    var limit_max = $("main>div").width() - $("#category>ul").width();
    //alert(limit_max);

    $("main>div").on({
      mousedown: function(e) {
          move = true;
          move_x = e.clientX;
          ul_left = parseInt($("#category").css("margin-left"));
          return false;
      }, touchstart: function(e) {
          move = true;
          move_x = e.targetTouches[0].clientX;
          ul_left = parseInt($("#category").css("margin-left"));
          return false;
      }, mousemove: function(e) {
          if(move==true) {
              var x = ul_left + (e.clientX - move_x);
              $("#category").css("margin-left",x);
              return false;
          }
      }, touchmove: function(e) {
          if(move==true) {
              var x = ul_left + (e.targetTouches[0].clientX - move_x);
              //이동번위 초과 시 제한값으로 변경하기
              $("#category").css("margin-left",x);
              return false;
          }
      }, mouseup: function() {
          move = false;
          move_x = 0;
          return false;
      }, touched: function() {
          move = false;
          move_x = 0;
          return false;
      }
    });



