# void 

```
function fun2(): void {
    console.log("hello")
}

let a : void 

a= undefined
```

void 타입에서는 오직 undefined 만 지정가능

## 왜 사용하냐??

undefined 이나 null을 타입으로 지정 하면 되지 않냐??

undefined,null을 지정하게 되면 

```
function fun2(): undefined {
    console.log("hello");
    return undefined;
}
```

```
function fun2(): null {
    console.log("hello");
    return null;
}
```

반드시 함수안에 return 으로  반환 해줘야 한다 

return 문을 사용하고 싶지 않은 함수에 void를 설정하는 이유이다

# never

불가능을 의미하고 모순이라는 타입

ex 
```
//never

function func3() :never {
    while (true) {}
}

function func4() {
    throw new Error();
}
```

위 함수는 무한루프를 발생시키는 함수 에러를 던져주는 함수이다 

첫번째 함수는 무한루프이기 떄문에 함수가 끝나지 않는다 

void 타입은 반환문이 없기 떄문에 void를 사용하지만 

func3에서는 반환을 할 수가 없어서 애초에 정상적으로 종료가 불가능 하기에 

해당 함수가 뭔가를 반환하는것은 모순이다 라고 해서 never 타입을 지정한다 

func4는 에러를 던지는 즉시 함수가 종료되기에 never 타입을 지정한다 

 

```
let anyVar : any


let a : never

a= 1:             //전부 에러가 발생!!
a= {}
a= ""
a= undefined
a= null
a= anyVar
```

never 타입에는 아무런 값도 할당할수 없다 any 타입의 값도 저장할 수 없다