1. let uninitialized;
console.log(uninitialized); // 결과값 < undefined >
 //암시적으로 정의되지 않은 값은 undefined가 뜨기 때문에

2. < const > apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable
//const는 재선언, 재할당 모두 불가하기 때문

3. let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 >
//배열의 인덱스는 0부터 시작하기 때문에

4. 
let mySchedule = "";
console.log(mySchedule || false); // < false >
console.log(!!mySchedule); // < false >
// ||은 앞 값이 false이면 뒷 값이 나오기 때문에
// !!은 값을 불리업 값으로 명시적으로 변환 가능. ""는 falsy 한 값이기 때문에 false 가 나온다.
//----------------------------------------------

const junhyun = {
    // 조건을 충족하는 코드 작성
    name : "sujin",
    age : 29,
    MBTI : "INFP",
};

console.log(junhyun.name);
console.log(junhyun.age);
console.log(junhyun.MBTI);

//----------------------------------------------

function oddEven(x) {
    if (x%2 === 0) {
        return "짝수";
    } else {
        return "홀수";
    }
}

console.log(oddEven(10)); // 결과값 "짝수";
console.log(oddEven(7)); // 결과값 "홀수";

//----------------------------------------------

function calculator(a, b, c) {
    if (b === "+"){
        return a+c;
    } else if (b === "-"){
        return a-c;
    } else if (b === "*"){
        return a*c;
    } else if (b === "/") { 
        return a/c; }
}

function calculator (a, b, c){
    return a + calculator[1] + c;
}

calculator(3, "+", 6); // 결과값 9
calculator(11, "-", 6); // 결과값 5
calculator(6, "*", 3); // 결과값 18
calculator(15, "/", 3); // 결과값 5

//b의 문자열에서 연산자만 가져오는 방법이 애매했음. 문자열의 경우 더하기 연산자면 문자열로 더해지기 때문에
//코드 찍어보니까 값이 안나오는데 왜 그런지 모르겠음...
//결국 하나하나 풀어서 쓰긴 했는데, 계산기면 다른 기호도 들어가야 할 텐데... 두 번째 solution이 왜 안될까?

//-----------------------------------------------


const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

console.log(scores);
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]

//계산기를 어떻게 쓸지 모르겠음..
