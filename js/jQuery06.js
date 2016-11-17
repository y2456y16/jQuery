/**
 * Created by 철우 on 2016-11-16.
 */
function myFunc() {
    $("ul > li").addClass("inStyle");
}
function inStyle() {
    //현재 선택된 Li에 대해서 style을 적용해 주면 됨
    $(this).addClass("inStyle");
    $(this).removeClass("outStyle");
}
function outStyle() {
    $(this).addClass("outStyle");
    $(this).removeClass("inStyle");
}