/**
 * Created by 철우 on 2016-11-16.
 */
function myFunc() {
    // 체크박스 만들어 봅시다.
    // $("input:checked").remove();
    // alert($("[type = checkbox]:checked").val());
    // <input type="checkbox">서울<br> 이렇게 있을때는 값을 못읽어옴
    // html의 영역이 잡히지 않기때문에 -> html을 영역을 잡아준다.

    // alert($("[type = checkbox]:checked + span").text());

    // 체크한거 지우기
    // 1. HTML 영역을 잡아주기 위해 변경함.
    // 2. parent()통해서 영역잡고 지워줌

    //<div>
    //<input type="checkbox"><span>서울</span><br>
    //</div>

    $("[type = checkbox]:checked").parent().remove();
}