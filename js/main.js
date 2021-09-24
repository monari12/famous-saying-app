 //main.js
 
 // 함수
function showContent(num) {
$('article h2').html(data[num].content);
$('article p').html(data[num].author);
}

var num = 0;
//다음
function nextContent(){
    num++;
    // 마지막 체크
    if(num > data.length - 1){ num = 0;}
    showContent(num);
    console.log(num);

}
//이전
function prevContent(){
    num--;
    // 마지막 체크
    if(num < 0){ num = data.length - 1;}
    showContent(num);
    console.log(num);

}
$(function(){
    showContent(num);

});
