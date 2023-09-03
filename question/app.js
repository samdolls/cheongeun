// Q1 배열 다루기
console.log("Q1 배열다루기");
const arr = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [1, [2, 3, [4, 5, 6], 7], [8, 9]];

// Q1-1. arr에서 3출력 (Hint:인덱싱은 0부터 시작!)
console.log(arr[2]);

// Q1-2. arr에서 [1,2,3]출력 (Hint:Array.js에서 slice함수를 사용해볼까요?)
console.log(arr.slice(0,3));

// Q1-3. arr2에서 [8, 9]출력 (Hint:배열 안에 원소가 배열일 뿐!)
console.log(arr2[2]);

// Q1-4. arr2에서 [4, 5, 6]출력 (Hint:원소안 원소!)
console.log(arr2[1][2]);

console.log("======= 문제 구분선 =======");

// Q2
console.log("Q2 객체(JSON)다루기");
const obj = {
  name: "김민준",
  age: 23,
  isPerson: true,
  hobby: ["JS 공부하기", "프로젝트하기", "코드 리뷰받기", "술마시기"],
  gpa: {
    Electronic: "A+",
    Math: "A-",
    English: "B+",
  },
  student: [
    {
      name: "박청은",
      age: 21,
      lecture: [
        ["프로그래밍 기초", "어드벤처디자인"],
        ["웹프로그래밍", "2학기 예습", "프론트 강좌"],
      ],
    },
    {
      name: "홍길동",
      age: 22,
      lecture: [
        ["산업시스템의 이해", "어드벤처디자인"],
        ["응용통계학", "산업시스템 프로그래밍", "인간공학"],
      ],
    },
  ],
};

// Q2-1. 김민준의 나이를 obj객체로부터 출력하기 (Hint:obj.~~)
console.log(obj.age);

// Q2-2. 김민준의 Electronic 학점(A+)을 obj객체로부터 출력하기
console.log(obj.gpa.Electronic);

// Q2-3. 김민준의 학생인 박청은의 나이(21)를 obj객체로부터 출력하기 (Hint:obj안에 배열)
console.log(obj.student[0].age);

// Q2-4. 김민준의 학생인 홍길동이 수강한 강의 중에서 "인간간공학"을 obj객체로부터 출력하기
console.log(obj.student[1].lecture[1][2]);
//정확히 모르셌숩니당..또르르

console.log("======= 문제 구분선 =======");

// Q3 map함수, filter함수 활용 (Hint:Array.js에서 map, filter함수 참고 or 구글림!)
console.log("Q3map함수, filter함수 활용");
const arr3 = [1, 2, 3, 4, 5, 6];

// Q3-1. map함수와 arr3을 활용하여 [10,20,30,40,50,60]을 출력하시오.
const a = arr3.map(arr3 => arr3*10);

console.log(a);
//방법 1
const x = [];
for(var i=0; i<arr3.length; i++){
  x.push(arr3[i]*10);
};

console.log(x);
//방법2

// Q3-2. filter함수와 arr3을 활용하여 [1,3,5]출력하기 (Hint:홀수와 짝수 구분은 "%2"를 활용)
const y = arr3.filter(arr3 => arr3 % 2 ===1);
console.log(y);

console.log("======= 문제 구분선 =======");

// Q4 함수 & 논리연산자 문제
console.log("Q4 함수 & 조건문 문제");
/*
[문제]
윤년의 조건은 다음과 같다.
1. 연수가 4로 나누어 떨어지는 해는 윤년임
2. 100으로 나누어 떨어지는 해는 윤년이 아님
3. 400으로 나누어 떨어지는 해는 윤년임
인자로 연도를 받으면, 해당 연도가 윤년인지 아닌지 출력하는 isLeap함수를 만들어라.

[출력 예시]
console.log(isLeap(2020));  -> 윤년이 맞습니다.
console.log(isLeap(2021));  -> 윤년이 아닙니다.
*/
const input = prompt("년도를 입력해주세요:");  
const year = Number (input);
function isLeap(year){
  if(year % 4 ===0 || year % 400 ===0){
    return console.log(`${year}년은 윤년이 맞습니다.`);
  }
  else if( year % 100 !==0){
    return console.log(`${year}년은 윤년이 아닙니다.`);
  }
  else{
    return aconsole.log(`${year}년은 윤년이 아닙니다.`);
  }

}
isLeap(year);

// console.log(isLeap(2020));  <- 다 풀고 주석 풀어주세요!
// console.log(isLeap(2021));  <- 다 풀고 주석 풀어주세요!

console.log("======= 문제 구분선 =======");

// Q5 반복문 연습1
console.log("Q5 반복문 연습문제1");
/*
다음을 출력하시오
*
**
***
****
*****
(Hint:for문 or while문 사용 + console.log("*")사용)
*/

for(let i=1; i<6; i++){
  console.log("*".repeat(i));
}

console.log("======= 문제 구분선 =======");

// Q6 반복문 연습2
console.log("Q6 반복문 연습문제2");
/*
다음을 출력하시오
    *
   **
  ***
 ****
*****
(Hint:console.log(" ")로 빈칸 표현)
*/

for(let i=1; i<6; i++){
  console.log(" ".repeat(5-i)+"*".repeat(i));
}
console.log("======= 문제 구분선 =======");

// Q7 반복문 연습3
console.log("Q7 반복문 연습문제3");
/*
다음을 출력하시오
    *
   ***
  *****
 *******
*********
(Hint:이중for문 활용)
*/

for(let i = 1 ; i < 11 ; i +=2){
  console.log(" ".repeat((9 - i)/2) + "*".repeat(i));
}

console.log("======= 문제 구분선 =======");

// Q8
console.log("Q8 반복문 연습문제4");
/*
다음을 출력하시오
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
(Hint:이중for문 활용)
*/
/*
for(let i = 1, j = 0; i<=4; i++){
  console.log(" ".repeat(4 - i) + "*".repeat(i + j));
  j = j + 1;
}

for(let i=7, b=6; i>=0; i--){
  console.log(" ".repeat(7 - i) + "*".repeat(i + j));
  j = j-1;
}*/
for(let i = 1 ; i < 11 ; i +=2){
  console.log(" ".repeat((9 - i)/2) + "*".repeat(i));
}
for(let i = 7 ; i >0 ; i -=2){
  console.log(" ".repeat((9-i)/2) + '*'.repeat(i));
}