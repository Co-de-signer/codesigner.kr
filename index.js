    //contact 모달팝업
    $('.c_btn').click(function(){
        $('.c_modal').fadeIn();
    });
    $('#contact .close').click(function(){
        $('.c_modal').fadeOut();
    });

    //footer 모달팝업
    $('.btn').click(function(){
          $('.modal').fadeIn();
      });
      $('.btn-close').click(function(){
          $('.modal').fadeOut();
      });

    //footer tab 메뉴
$(".tab_title li").click(function() {
    var idx = $(this).index();
    $(".tab_title li").removeClass("on");
    $(".tab_title li").eq(idx).addClass("on");
    $(".tab_cont > div").hide();
    $(".tab_cont > div").eq(idx).show();
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
        return false;
    });

    var chk="";
$("#send_bt").click(function(){
    var chk1 = $("#title").val().length >= 2;
    var chk2 = $("#email").val().length >= 2;
    var chk3 = $("#msg").val().length >= 5;
    if(chk1 && chk2 && chk3) {
        email();
    } else {
        if(!chk1) {
            $("#title").addClass("alert").focus();
        } else if(!chk2) {
            $("#email").addClass("alert").focus();
        } else if(!chk3) {
            $("#msg").addClass("alert").focus();
        }
    }
});
function email() {
    $("input[name='answer']").each(function(index, item){
        if(chk != "") {
            var n = ", ";
        } else { 
            var n = "";
        }
        if($(this).is(":checked") == true) {
            chk += n+$(this).val();
        }
    });
    var param = {
        title: $("#title").val(),
        email: $("#email").val(),
        msg: $("#msg").val()
    };
    // alert(param);
    $.ajax({
        url: 'fmail.php',
        type: "POST",
        async: true,
        dataType: "json",
        data: param,
        success: function(data) {
            if(data.result == "true") {
                alert("메일 전송이 완료 되었습니다.")
            }
        }
    }); 
    } 
    //이름 체크
    $("#title,#email").keyup(function(){
        var txt = $(this).val().length;
        if(txt>=2) {
            $(this).removeClass("alert");
            $(this).next().fadeIn();
        }
    });
    //메세지 체크
    $("#msg").keyup(function(){
        var txt = $(this).val().length;
        if(txt>=5) {
            $(this).removeClass("alert");
            $(this).next().next().fadeIn();
        }
    });

//검색 기능
$("#search").keydown(function(e){
    var key = e.keyCode;
    //alert(key);
    if(key==13) {
        var query = $("#search").val();
        switch(query) {
            case "통합검색": location.href="http://codesigner.kr/02.html"; break;
            case "코드다지이너": location.hreg="http://codesigner.kr/03.html"; break;
            case "이력서": location.href="http://codesigner.kr/03.html"; break;
            case "유화은": location.href="http://codesigner.kr/03.html"; break;
            case "화은": location.href="http://codesigner.kr/03.html"; break;
            case "포트폴리오": location.href="http://codesigner.kr/04.html"; break;
            case "퍼블리셔": location.href="http://codesigner.kr/04.html"; break;
            case "안녕하세요" : alert("안녕하세요! 반갑습니다!"); break;
            case "안녕" : alert("하이!"); break;
            case "hi" : alert("hello"); break;
            case "HI" : alert("HELLO"); break;
            case "Hi" : alert("Hello"); break;
            case "MBTI" : alert("ENFP, INFP를 오가는 풍부한 감성의 소유자입니다!"); break;
            case "mbti" : alert("ENFP, INFP를 오가는 풍부한 감성의 소유자입니다!"); break;
            default : alert("숨겨진 검색어를 찾아주세요."); break;
        }
    }
});

//검색창 타이핑 효과
var typingEnd=false;
function typindStart(){
    if(!ytpingEnd){
        var typingBool = false;
        var typingIdx=0;
        var typingTxt = $("#search").val();
        typingTxt=typingTxt.split("");
        if(typingBool==false){
            typingBool=ture;

            var tyInt = setInterval(typing,100);
        }

        function typing(){
            if(typingIdx<typingTxt.length){
                $("#typing").append(typingTxt[typingIdx]);
                typingIdx++;
            } else{
                clearInterval(tyInt);
                typingEnd-true;
            }
        }
    }
}