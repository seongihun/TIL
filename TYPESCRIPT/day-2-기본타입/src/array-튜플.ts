// 배열

let numArr : number[] =[1,2,3]

let strArr:string[] = ["hello", "im", "hun"]

let boolArr:Array<boolean> = [true,false,true]

// 배열에 들어가는 요소들의 타입이 다양할 경우

let multiArr: (number | string)[] = [1,"hello"]

// 다차원배열의 타입을 정의하는 방법

let doubleArr: (number | string)[][] = [
    [1,2,3],
    ["hello","im","hun"]
]


// 튜플
// 길이와 타입이 고정된 배열

let tup1:[number,number] = [1,2]

let tup2:[number,string,boolean] = [1,"2", true]

const users : [string,number][]= [
    ["선기훈", 1],
    ["김모씨", 2],
    ["이모씨", 3],
    ["박모씨", 4],
  //  [5, "최모씨"]
]