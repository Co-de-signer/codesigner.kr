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

        //contact modal
        $('.btn').click(function(){
          $('.modal').fadeIn();
      });
      $('.close').click(function(){
          $('.modal').fadeOut();
      });

      //footer modal
      $('.f_btn').click(function(){
        $('.f_modal').fadeIn();
    });
    $('.btn-close').click(function(){
        $('.f_modal').fadeOut();
    });

        //footer tab 메뉴
$("footer .tab_title li").click(function() {
    var idx = $(this).index();
    $("footer .tab_title li").removeClass("on");
    $("footer .tab_title li").eq(idx).addClass("on");
    $("footer .tab_cont > div").hide();
    $("footer .tab_cont > div").eq(idx).show();
});

      //해당페이지 체크
      
      //검색어 구현

      //마우스다운/슬라이드-keyword
      var move_x = 0; // 드래그한 이동값용 변수
      var move=false; // 드래그 여부용 변수
      var ul_left = parseInt($("#keyword").css("margin-left"));
      var linit_min = 50;
      var limit_max = $("#li>div").width() - $("#keyword").width();
      //alert(limit_max);

      $("#li>div").on({
        mousedown: function(e) {
            move = true;
            move_x = e.clientX;
            ul_left = parseInt($("#keyword").css("margin-left"));
            return false;
        }, touchstart: function(e) {
            move = true;
            move_x = e.targetTouches[0].clientX;
            ul_left = parseInt($("#keyword").css("margin-left"));
            return false;
        }, mousemove: function(e) {
            if(move==true) {
                var x = ul_left + (e.clientX - move_x);
                $("#keyword").css("margin-left",x);
                return false;
            }
        }, touchmove: function(e) {
            if(move==true) {
                var x = ul_left + (e.targetTouches[0].clientX - move_x);
                //이동번위 초과 시 제한값으로 변경하기
                $("#keyword").css("margin-left",x);
                return false;
            }
        }, mouseup: function() {
            move = false;
            move_x = 0;
            //alert("마우스업");
            //alert($(this).prop("tagNAme"));
            return false;
        }, touchend: function() {
            move = false;
            move_x = 0;
            //alert("터치엔드");
            //alert($(this).prop("tagName")); 
            return false;
        }
      });
      $("#il>div a").click(function(){
		$(this).css("border","5px solid blue");
	});

      //마우스다운/슬라이드-category
      var move_x = 0; // 드래그한 이동값용 변수
      var move=false; // 드래그 여부용 변수
      var ul_left = parseInt($("#category>ul").css("margin-left"));
      var linit_min = 50;
      var limit_max = $("#category").width() - $("#category>ul").width();
      //alert(limit_max);

      $("#category").on({
        mousedown: function(e) {
            move = true;
            move_x = e.clientX;
            ul_left = parseInt($("#category>ul").css("margin-left"));
            return false;
        }, touchstart: function(e) {
            move = true;
            move_x = e.targetTouches[0].clientX;
            ul_left = parseInt($("#category>ul").css("margin-left"));
            return false;
        }, mousemove: function(e) {
            if(move==true) {
                var x = ul_left + (e.clientX - move_x);
                $("#category>ul").css("margin-left",x);
                return false;
            }
        }, touchmove: function(e) {
            if(move==true) {
                var x = ul_left + (e.targetTouches[0].clientX - move_x);
                //이동범위 초과 시 제한값으로 변경하기
                $("#category>ul").css("margin-left",x);
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

