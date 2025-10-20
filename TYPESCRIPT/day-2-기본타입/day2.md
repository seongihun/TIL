# 타입스크립트의 기본 타입
+ 변수를 선언 하고 :(콜론) 뒤에 타입을 명시하는 것을 주석(annotation) 이라고 함

## 원시 타입
### 하나의 값만 저장하는 타입
1. number

```
let num1: number = 123;         양수
let num2: number = -123;        음수
let num3: number = 0.123;       소수
let num4: number = -0.123;      음의소수
let num5: number = Infinity;    무한
let num6: number = -Infinity    음의무한
let num7: number = NaN;         숫자가 아님
```

2. string
```
let str1: string = "abc"
let str2: string = 'abc'
let str3: string = `abc`
let str4: string = `abc ${num1}`
```

3. boolean
```
let bool1 : boolean = true
let bool2 : boolean = false
```

4. null
```
let null1 : null = null
```

5. undefined
```
let unde1 : undefined = undefined
```

개발중 변수에 넣을 값이 아직은 없을떄 

ex
```
let numA: number = null
```

tsconfig.json 안에 

exactOptionalPropertyTypes 옵션을 false 로 지정한다 

strictNullChecks 옵션도 false 로 지정한다

안전한 코드만 쓸거다 라고 하면 안쓰면 가능함

6. 리터럴 타입 리터럴->값

```
let numA: 10 = 10;

let strA: "h" = "h"

let boolA : true = true
```
타입주석 그 자체를 값으로 지정함 
지정된 값외에 다른 값을 지정하려하면 에러가 남

## 비원시 타입

1. array

```
let numArr : number[] =[1,2,3]

let strArr:string[] = ["hello", "im", "hun"]

let boolArr:Array<boolean> = [true,false,true]
```

타입 스크립트에서 배열 타입을 정의 하는 방식은 2가지

    1. 타입 구문

     배열 요소의 타입 뒤에 [] 를 붙여서 정의 
    
    2. 제네릭 구문
     Array 키워드를 사용 <>안에 배열 요소의 타입을 넣어서 지정

2. 튜플(길이와 타입이 고정된 배열)

```
let tup1:[number,number] = [1,2]

let tup2:[number,string,boolean] = [1,"2", true]

const users : [string,number][]= [
    ["선기훈", 1],
    ["김모씨", 2],
    ["이모씨", 3],
    ["박모씨", 4],
  //  [5, "최모씨"] 에러발생 
]
```

코드를 컴파일해보면 
```
let tup1 = [1, 2];
let tup2 = [1, "2", true];
const users = [
    ["선기훈", 1],
    ["김모씨", 2],
    ["이모씨", 3],
    ["박모씨", 4],
    //  [5, "최모씨"]
];
```
배열로 나옴
그래서 배열 메소드를 사용할 수 있다
    
    하지만!!!
    튜플은 길이를 정해 놓은 배열
    push(),pop()과 같은 배열에 요소를 추가 하거나 삭제하는 메소드를 사용할 떄는 각별한 주의가 필요하다

튜플은 언제 사용하면 좋은가??
    
    배열의 index에 지정된 타입만 들어가야 할때
## 타입스크립트에만 존재하는 타임