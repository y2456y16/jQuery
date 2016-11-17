/**
 * Created by 철우 on 2016-11-15.
 */
function myFunc() {

    //현재 html안에 있는 모든 element(한줄, 태그들)을 다 선택해서 글자색을 red로 변경
    $(" * ").css("color", "red");  // $=jQuery, "" = 문자열이며, * = 모든것을 의미함
    $("h1, input").css("color", "red"); // $ = selector, 효과를 줄곳을 선택함.
    $("#inchon").remove();  // #은 id를 뜻함. id가 inchon인것을 찾도록
    $(".myClass").css("background-color", "yellow") // . = class를 찾아줌. 클래스속성이 myClass인걸 찾아줌.
    $("[type=button]").css("color", "red"); // "[]" 속성선택자
    $("div > ul > li[id]").css("color", "red");  // '>' 자식을 표시함.
    $("div li[id=inchon]").css("color", "red"); // ' ' 공백 = 후손을 표시함.
    alert($("#inchon+ li").text()) //  '+' 자신의 형제 li중 id값 다음에 나오는것을 찾아줌.
}