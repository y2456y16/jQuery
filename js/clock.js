/**
 * Created by 철우 on 2016-11-15.
 */
function startClock() {
    //javascript 영역
    //현재시간을 구한다
    //html div 영역에 출력
    //html div 영역을 javascript 객체로 들고오기
    var div = document.getElementById("clockDiv");
    //(버튼 누르면 글자가 나오는 구문)div.innerHTML = "바뀌어요!!";
    //HTML element를 JavaScript 객체로 변환 => document object(문서 객체)

    //1초마다 반복적으로 현재 시간을 구해서 div에 출력
    window.setInterval(function(){
        //현재시간을 구함
        var today = (new Date()).toLocaleString();
        div.innerHTML = today;
    },1000);
}