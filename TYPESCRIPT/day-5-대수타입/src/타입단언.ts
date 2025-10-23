/**
 * 타입 단언
 */

type PersonType = {
    name: string
    age:number
}

// 빈 객체로만 변수의 값을 초기화 
let person = {} as PersonType
person.name = 'tjsrlgns'    // 변수 선언이후에 프로퍼터의 값들을 초기화 하는 경우 
person.age= 29    // 오류가 발생함 이럴떄 쓰는게 타입단언 as 키워드



type Dog = {
    name: string;
    color: string
};


let dog = {
    name: '돌돌이',
    color: 'brown',
    breed: '진도'
} as Dog

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼 또는 서브타입이어야함 
 */

let num1 = 10 as  never;  // never는 모든 타입의 서브타입 10 = number타입 이기에 규칙에 맞음
let num2 = 10 as unknown; // unknown은 모든 타입의 슈퍼타입 10 = number타입 이기에 규칙에 맞음

// let num3 = 10 as  string; // 10 = number 타입 string 타입과 겹치지 않기에 에러가 발생함 
let num4 = 10 as unknown as string; // unknown 으로 다중으로 단언할 수도 있음 권장 되지는 않음


/**
 * const 단언
 */

let num5 = 10 as const      // 타입을 확인 해보았을떄 넘버 리터럴 타입으로 나온다 const 단언은 마치 const로 변수를 선언했을떄와 동일한 결과를 낸다

// 객체 타입에서의 활용 

let cat = {
    name:'나비',
    color: 'black'
} as const              // readonly 읽기 전용 타입으로 바뀐다 객체 외부에서 점(.) 표기법으로 프로퍼티 value를 수정 할 수 없게 함


/**
 * non-null 단언 ! 키워드
 */

type Post ={
    title: string
    author?:string
}

let post: Post ={
    title:'게시글1',
    author : 'tjsrlgns'
}

const len : number = post.author!.length  