/**
 * 함수타입의 호환성
 * 특정 함수 타입을 다른함수 타입으로 취급해도 괜찮은가
 * 1. 반환값의 타입 호환
 * 2. 매개변수의 타입 호환
 */

// 기준1. 반환값 호환가능여부

type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // 업캐스팅
// b = a; 다운캐스팅

// 반환값기준 다운캐스팅이어서 안된다

// 기준 2 .매개변수 호환가능여부
// 2-1. 매개변수의 개수가 같을떄

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c=d  //매개변수가 기준일떄는 업캐스팅은 불가능   
d = c; 

// 추가 설명
//  D 타입은 10 만 가지고 있음 C 타입은 number라서 20,30 같은 값도 들어갈 수 있지만 D 타입은 오로지 10 만 가지고 있기 떄문에 불가능
// 반대로 10을 포함하는 number 전체를 받을 수 있어서 가능하다

//---예시---
type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

//animalFunc = dogFunc;
dogFunc = animalFunc;

let testFunc = (animal: Animal) => {
  //Animal 타입은 Dog 타입의 슈퍼 타입 dog 타입이 가지고 있는 속성을 전부 가지고 있지 않음
  console.log(animal.name);
  //console.log(animal.color);
};

let testFunc2 = (dog: Dog) => {
  //Dog 타입은 Animal 타입의 서브 타입 Animal 타입이 가지고 있는 속성을 전부 가지고 있음
  console.log(dog.name);
  console.log(dog.color);
};
// 2-2. 매개변수의 개수가 다를때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
//func2 = func1;

// 매개변수의 개수가 다를 때는 "받는 함수의 매개변수 수가 더 적어야" 대입 가능하다.
// 두 함수의 매개변수 타입(number)은 동일해야 한다.
