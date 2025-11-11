# SSR 실습

## 준비물

1. 실습용 서버
2. 로컬 코드 스페이스

## 실습

1. 실습용 서버 실행

```
npm run start
```

2. 로컬 코드스페이스 개발 모드 실행

```
npm run dev
```

3. api 서버로부터 데이터를 받는 컴포넌트 제작

```
루트디렉토리-lib폴더생성-.ts 파일 생성 -비동기 함수 작성
```

```
export default async function fetchBooks() => {}
```

4. api주소를 받는 변수 선언

```
 let url = api주소;
```

### 주의!!

주소값은 정확하여야 한다 오타가 없는지 잘 확인하기

5. 예외 설정 try catch 문 활용

```
try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  } catch (err) {
    console.log(err);
    return [];
  }
```

웹에서 데이터를 비동기적으로 가져오는(fetch) 기능을 수행하며, 에러 발생 시 안전하게 빈 배열을 반환하도록 설계된 코드

6. 함수 타입 설정

```
export default async function fetchBooks(): Promise<BookData[]>
```

async = 함수의 비동기적 선언

Promis<BookData[]> Promise 객체 반환에 성공했을때 BookData타입 객체들의 배열을 결과값으로 가져온다

7. index 파일 코드 작성

```
export const getServerSideProps = async () => {
  return {
    props:{

    }
  }
}
```

이 페이지는 SSR 방식을 사용하여 렌더링 될것을 선언 객체를 반환하고 props객체를 반환함

8. api 데이터를 받는 함수호출

```
const allBooks = await fetchBooks()
```

9. props 로 넘겨주기

```
return {
  props:{
    allBooks
  }
}
```

10. 적용하기

export default function Home({
allBooks,}) : InferGetServerSidePropsType<typeof getServerSideProps>

- props로 넘겨준 변수를 home컴포넌트에 인수로 전달하고

- Home컴포넌트가 어떤 props를 받아야하는지에 대한 타입 명시

```
 return (
  <section>
        <h3> 등록된 모든 도서 </h3>
        {allBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
 )
```

- allBooks 배열을 순회 배열내부의 각 요소를 화면에 렌더링

### 확장하기

1. lib 폴더에 .ts 파일 생성

2. api 서버로부터 데이터를 받는 컴포넌트 제작

```
import { BookData } from "@/types";

export default async function fetchRandomBooks(): Promise<BookData[]> {
  const url = "http://localhost:12345/book/random";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  } catch (err) {
    console.log(err);
    return [];
  }
}

```

- 제작했던 컴포넌트와 형태는 같음

3. 확장 및 적용

```
const allBooks = await fetchBooks()
const randomBooks = awit fetchRandomBooks()
```

### 이렇게 변수를 선언하면 직렬적으로 fetchBooks 함수가 끝나야 fetchRandomBooks를 실행한다 동시에 진행하게끔 병렬적구조가 실용적!!

```
const [allBooks, randomBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);
```

- 비동기 함수를 호출 -> Promise 객체 반환

- Promise 객체들의 배열을 Promis.all 인수로 전달

- Promis.all 모든 Promise 들을 동시에 실행

- 성공적 비동기 작업 완료 대기

- 각 Promise 결과값을 받음

- allBooks, randomBooks 변수에 구조분해 할당

4. return 안에 props에 할당

```
return {
    // **리턴 값은 반드시 props 라는 객체 프로퍼티를 포함하는 객체여야함
    props: {
      allBooks,
      randomBooks,
    },
  };
```

5. 적용

```
export default function Home({
  allBooks,
  randomBooks,
})
```

- 인수에 구조분해 할당

```
return (
    <div className={style.container}>
      <section>
        <h3> 지금 추천하는 도서</h3>
        {randomBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3> 등록된 모든 도서 </h3>
        {allBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
)
```

- allBooks, randomBooks 배열을 순회
- 배열내부의 각 요소를 화면에 렌더링
