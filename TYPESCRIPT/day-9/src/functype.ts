// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 설명
//  어떤 [타입의] 매개변수를 받고 , 어떤 [타입의]결과값을 반환하는지 정하기
function func(a:number, b:number) {
  return a + b;
}


/**
 * 화살표 함수
 */

const add = (a: number, b: number) => a + b;

/**
 * 매개변수 기본값 설정
 */

function introduce(name = "이정환") {
  console.log(`name : ${name}`);
}

// introduce(1); // 오류

/**
 * 선택적 매개변수 정의
 */

function introduce1(name = "이정환", age: number , tall?: number) {
	// 오류! 선택적 인수는 필수인수 뒤에 배치하기 
  console.log(`name : ${name}`);
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
}

/**
 * 나머지 매개변수
 */

function getSum(...rest:number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

getSum(1,2,3,4)


/**
 * rest 매개변수의 길이를 고정하고 싶다면 튜플타입사용하기
 */

function getSum1(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

getSum1(1, 2, 3)    // ✅
//getSum1(1, 2, 3, 4) // ❌