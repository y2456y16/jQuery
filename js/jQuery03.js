/**
 * Created by 철우 on 2016-11-16.
 */
function myfunc(){
    console.log($("#apple").text());
    console.log($("#pineapple").text());
    console.log($("ul > li.myList").text());//태그상 안의 값
    //$("#uId").val(); //입력상자안의 값
    console.log($("form > input").attr("id"));
    console.log($("ol > li:first").text());
    console.log($("ol > li:nth-child(2)").text());
    console.log($("ol > li:last").text());
}