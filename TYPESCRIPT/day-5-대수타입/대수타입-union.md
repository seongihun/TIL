# 대수 타입 

+ 여러개의 타입을 합성해서 새롭게 만들어낸 타입
+ 합집합 타입 (Union Type)과 교집합 타입 (Intersection Type)이 있습니다.

##  합집합 - Union 타입
```
let a : string | number | boolean;

a = true
```

변수를 선언하고 타입 구문에  type | type | type
" | " 으로 사용함 

변수 a 에는 문자열,숫자,참거짓 값을 모두 초기화 할 수 있음

만일 선언문이 아닌곳에서 위에 선언된 타입 외에 다른 타입을 넣고 싶다면 | 바를 사용  해서 추가하면 된다

```
let a : string | number | boolean | undefined;

a = undefined
```
### 배열 사용
```
let arr= [1,"hello" , true]
```

 변수 arr 에는  number type 1 , string type "hello" boolean true 가 요소로 있는 배열을 선언 했다 

배열 안에 요소들의 타입을 지정하는 법 
()[] 괄호와 배열을 타입지정문에 넣고 

위에서 사용한 union 타입으로 지정하면 된다 

```
let arr :(number|string|boolean)[] = [1,"hello" , true]
```

## 활용 예시 

```
type Dog = {
    name: string;
    color : string;
};

type Person ={
    name: string;
    language: string;
};
```
Dog 타입과 Person 타입을 만들고 

```
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
```

UnionType 타입의 합집합(union)으로 Dog 와 Person의 합집합을 만들었다 

UnionType 타입은 Dog , Person 둘중 어느 하나의 구조를 만족하는 새로운타입으로 선언함

```
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

 let union4 : UnionType = {
     name: "",
 }
```

union4 객체를 선언했을때는 에러가 발생한다 

객체 내부에 name 프로퍼티만 존재하고  Dog,Person 타입에 존재하는 다른 프로퍼티가 없다 

그렇기에 Dog,Person 둘중 어느 하나의 구조도 만족하지 않기에 에러가 발생하는 거라고 한다 




