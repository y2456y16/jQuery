/**
 * Created by 철우 on 2016-11-16.
 */
function myfunc() {
    alert($("select > option:selected").val());
    // :selected를 통해서 골라준거중에서 val값(사용자입력값은 val) 가져옴
}