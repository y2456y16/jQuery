/**
 * Created by 철우 on 2016-11-16.
 */
//$("#uId").val(); 이것은 입력상자안의 값

function myfunc() {
    console.log( $("#apple").text());
    console.log( $("#pineapple").text());
    console.log( $("ul > li.myList").text() );
    console.log( $("form > input").attr("id"));
    // 동적으로 입력한 값을 가져옴.
    // text가 아니라, 입력상자안에 값은 val
    // .attr("id") id라는 속성의 값을 알아냄
    // console.log( $("ol > li:first").text());
    // console.log( $("ol > li:last").text());
    // // :frist >> li 3값중에 첫번째만 가져와줌.
    // console.log( $("ol > li:nth-child(2)").text());
    // // nth-child(2) 2번째 자식을 가져와줌
    // console.log( $("ol > li").text());
    console.log( $("ol > li.myList" ).text());

    // b = $("ol > li[.myList]").text();
}