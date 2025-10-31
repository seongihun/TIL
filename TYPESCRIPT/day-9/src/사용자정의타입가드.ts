/**
 * 사용자 정의 타입가드
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

function isDog(animal:Animal):animal is Dog {
    return (animal as Dog).isBark !== undefined
}


function isCat(animal:Animal):animal is Cat {
    return (animal as Cat).isScratch !== undefined
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    console.log(animal.isBark ? "짖습니다" : "안짖어요");
  } else {
    console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
  }
}


// 테스트용 데이터
const dog: Dog = { name: "뽀삐", isBark: true };
const cat: Cat = { name: "나비", isScratch: false };

// 함수 호출
warning(dog); // 뽀삐: 짖습니다
warning(cat); // 나비: 안할퀴어요
