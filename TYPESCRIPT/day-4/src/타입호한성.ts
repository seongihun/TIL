/**
 * 기본타입간의 호환성
 */

let num1 : number = 10
let num2: 10 =10

num1 = num2;

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체 타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
    name: string;
    color: string;
};

type Dog = {
    name: string;
    color: string;
    breed: string;
};

let animal: Animal = {
    name: "기린",
    color: "yello"
};

let dog : Dog = {
    name:"돌돌이",
    color: "brown",
    breed:"진도"
};

animal = dog  // dog 타입을 animal로 취급은 가능 업캐스팅

 //dog = animal  //animal 타입을 dog 취급은 불가능 다운캐스팅

// animal 타입은 dog 타입을 포함하는 슈퍼타입 dog는 서브타입
// 객체 타입은 프로퍼티를 기준으로 이런 관계를 가진다 



type ProgramingBook = {
    name: string
    price: number
    skill: string 
}


// 연습 예시 
let book:Book = {
    name: "동화책",
    price: 50000
}

let programingbook : ProgramingBook = {
    name: "typescript",
    price: 50000,
    skill: "typescript"
}

book = programingbook

 // programingbook = book

/**
 * 초과 프로퍼티 검사 
 */

type Book = {
    name: string
    price : number
}

 let book2 : Book ={
    name: "typescript",
    price: 50000,
   //  skill: "typescript"
 }

 let book3 : Book = programingbook

function func(book:Book) {
    func({
        name: "typescript",
        price: 50000,
        //skill: "typescript"
    })
}

func(programingbook)