<?php
// Cross-Site Scripting (XSS)을 방지하는 시큐어코딩
// strip_tags() -> 문자열에서 html과 php태그를 제거한다
// htmlspecialchars() -> 특수 문자를 HTML 엔터티로 변환
// 악의적인 특수문자 삽입에 대비하기 위함
 
$title = strip_tags(htmlspecialchars($_POST['title'])); // 제목
// $answer = strip_tags(htmlspecialchars($_POST['answer']));  // 답변유형
$user_email = strip_tags(htmlspecialchars($_POST['email']));    // 이름
$msg = strip_tags(htmlspecialchars($_POST['msg'])); // 메세지
$email_address = "ghkdms112@naver.com";
$to = "dbghkdms1@nate.com"; // 받는 측의 이메일 주소를 기입하는 부분

$email_subject = "[문의메일] $title"; // 메일 제목에 해당하는 부분
$email_body = "$msg\n$answer";

$headers = "Return-Path: $email_address\n"; // 답장 주소
$headers .= "From: 방문자 <$user_email>\n";// 사용자 이름 변경
$headers .= "Content-Type: text/html;charset=utf-8\n"; //html문서로 인식
mail($to,'=?UTF-8?B?'.base64_encode($email_subject).'?=',$email_body,$headers,'-f'.$email_address);
$result = array('result'=>'true');
echo json_encode($result);
exit;
?>