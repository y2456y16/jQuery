/**
 * Created by 철우 on 2016-11-16.
 */
function myFunc() {
    //1.만들기
    //<h1>이것은 소리없는 아우성</h1>
    var h1 = $("<h1></h1>").text("이것은 소리없는 아우성");
    //<img src = "img/vain.PNG" width="50">
    var img = $("<img/>").attr("src","img/vain.PNG").attr("width","50");
    //1.자식으로 맨마지막에 붙이기(h1을)
    //$("div").append(h1);
    //2.자식으로 맨 처음에 붙이기(h1을)
    //$("div").prepend(h1);
    //3.형제로 앞에 붙이기(사진을 하지만 계속 실행해도 사진하나만 떠있음
    $("div > h1:nth-child(2)").before(img);
    //4.형제로 뒤에 붙이기
    //$("div > h1:first").after(h1);
    //yes
}