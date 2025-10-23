/**
 * 타입 추론
 */

// 초기화된 값을 기준으로 자동으로 변수의 타입를 추론할수 있음

// 대표적인 상황 변수 선언
let a = 10
let b = "h"
let c= {
    id:1,
    name:"tjsrlgns",
    profile: {
        nickname: "sean"
    },
    email: ["tjsrlgns97@gmail.com"]
}

let { id , name, profile} = c

let [one, two, three] = [1,"hello", true]

// 함수의 반환값 타입을 추론할 떄는 초기화하는 값이 아니라 return 문 다음에 오는 반환갑을 기준으로 추론한다 
// 밑에 함수는 string 타입을 반환함
function func() {
    return 'hello'
}

//당황 스러운상황

let d; //초기화된 값이 업기에 any 타입

d= 10 ;             // any -> number
d.toFixed();        // 여기까지는 number  타입으로 진화

d = "hello"         // any -> string

d.toUpperCase()     // 여기까지 string 타입으로 진화 


const num = 10;     //const 로 선언한 변수는 넘버리터럴 타입으로 지정됨
const str ='hello'

let arr = [1, 'string']  //union 타입으로 지정됨 