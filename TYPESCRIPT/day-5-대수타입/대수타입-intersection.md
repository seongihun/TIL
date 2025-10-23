# 교집합 타입 - intersection 타입

and (&) 키워드를 활용하여 작성가능

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
먼저 객체 타입을 두개 선언하고 

두 타입의 교집합타입을 만든다

```
type IntersectionType = Dog & Person;
```

IntersectionType 타입은 Dog,Person  타입의 모든 속성을 모두 포함하는 새로운 타입

즉, IntersectionType은 name, color, language 세 가지 속성을 필수로 가져야 한다.

```
type Dog = {
    name: string;
    color : string;
};

type Person ={
    name: string;
    language: string;
};

type IntersectionType = Dog & Person;

let intersection1 : IntersectionType = {
    name: "",
    color: "" ,
    language: "",
}
```

intersection1 객체 내부 프로퍼티에는 Dog,Person 타입의 모든 속성을 가지고 있기에 정상작동 된다 
