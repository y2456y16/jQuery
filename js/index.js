/**
 * Created by 철우 on 2016-11-15.
 */

/*변수
var test;//데이터 타입이 지정되지 않았기 때무에
var test1=100;
var test2=true;
var test3="소리없는 아우성!";
var test4=null;
var test5;

console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
*/

//선언적 함수
function sleepy(temp1, temp2){
    return temp1+temp2;
}
var result = sleepy(10,20);
console.log(result);

var test = function(temp1, temp2){
    return temp1+temp2;
}
console.log(test(50,50));

//자바스크립트 객체 변수:property 함수:method
var obj={
    myName : "홍길동",
    myAge : "24",
    "my Hobby" : "LoL",
    myInfo : function() {}
};
console.log(obj.myName);
console.log(obj["my Hobby"]);
obj.myInfo();
