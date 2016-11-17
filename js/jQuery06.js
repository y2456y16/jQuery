/**
 * Created by 철우 on 2016-11-16.
 */
function myFunc() {
    $("ul > li").each(function(idx, item){
        //idx : index 번호
        //item : 현재 선택된 문서객체를 지칭
        console.log($(item).text() + "입니다");
    });
}