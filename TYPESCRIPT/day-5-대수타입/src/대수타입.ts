/**
 * 대수타입
 * ->  여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재
 */

/**
 * 1. 합집합 - Union 타입
 */

let a : string | number | boolean;

a = true

let arr :(number|string|boolean)[]= [1,"hello" , true]




type UnionType = Dog | Person

let Union1 : UnionType = {
    name:  "" ,
    color: "",
}

let union2 : UnionType = {
    name: "" , 
    language: "",
};

let union3  : UnionType = {
    name: "",
    color: "",
    language: "",
}

// let union4 : UnionType = {
//     name: "",
// }

/**
 * 2.교집합 타입 - intersection 타입 객체 타입에서 많이 사용함
 * 
 */



type Dog = {
    name: string;
    color : string;
};

type Person ={
    name: string;
    language: string;
};

type Intersection = Dog & Person;

let intersection1 : Intersection = {
    name: "",
    color: "" ,
    language: "",
}