# any
## 특정 변수의 타입을 우리가 확실히 모를떄 

```
let anyVar:  = 10;
anyVar = "hello" //에러발생 !!
```

### 이유는?

+ TypeScript 에서는 초기화된 값의 타입을 기준으로 자동으로 해당 변수의 타입을 추론함 
+ 위에서 anyVar 라는 변수에 10(number) 타입으로 값을 초기화(할당) 해주었기 때문에 number 타입 외에 다른 타입의 값을 할당하려 하면 에러가 발생한다

```
let anyVar: any = 10;
anyVar = "hello"
```

이떄 타입에 any 를 지정하게 되면 어떠한 타입도 들어갈 수 있는 타입으로 지정이 가능하다

```
let anyVar: any = 10;
anyVar = "hello"

anyVar = true;
anyVar = {}
anyVar = () => {} 

anyVar.toUpperCase()
anyVar.toFixed()

let num : number = 10

num = anyVar
```

이처럼 any 타입에는 어떠한 타입의 값도 할당할 수 가 있고

모든 타입의 변수에  any타입을 집어넣을수도 있다 

# unknown

```
// unknown
let unknownVar : unknown
 unknownVar = ""
 unknownVar = 1;
 unknownVar = () => {}

 num = unknownVar // error!
```

unknown 타입은 any 타입과는 다르게 
메소드는 사용이 불가능하고 
다른 타입의 변수에 집어넣을수 없다 