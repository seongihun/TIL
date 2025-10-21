/**
 * Unknown 모든 타입의 슈퍼 타입
 */

function unknownExam() { ///업캐스팅
    let a : unknown = 1;
    let b : unknown = "hello";
    let c : unknown = true ;
    let d : unknown = null ;
    let e : unknown =undefined;


    let unknownVar : unknown;

    // 다운캐스팅
    // let num : number =unknownVar;
    // let str : string = unknownVar
    // let bool : boolean = unknownVar
}

/**
 * never 모든 타입의 서브 타입
 */

function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    let num : number = neverFunc();
    let str : string = neverFunc();
    let bool : boolean = neverFunc();

    // let never1 : never = 1; 
    // let never2: never = ""
    // let never3: never = true;
}


/**
 * void
 */

function  voidExam() {
    function voidFunc():void {
        console.log("hi");
    }

    let voidVar : void =undefined
}

/**
 * any 타입 never를 제외한 모든 타입의 서브와 슈퍼 둘다 될수 있음
 */

function anyExam() {
    let unknownVar : unknown;
    let anyVar: any
    let undefinedVar: undefined
    let neverVar: never;

    anyVar = undefinedVar

    undefinedVar = anyVar

    // neverVar = anyVar
}