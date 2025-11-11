# SSR실습(쿼리스트링)

완성본

```
import { BookData } from "@/types";

export default async function fetchBooks(q?:string): Promise<BookData[]> {
  let url = `http://localhost:12345/book`;

  if(q){
    url += `/search?q=${q}`
  }

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

- q 를 인수로 전달

- api 주소 url 할당

- 조건문 작성
  q 가 참이면 api 주소값에 `/search?q=${q}` 붙여넣음
  예제

  ```
  let url = `http://localhost:12345/book/search?q=${q}`;
  ```

- 예외 설정 try catch 문 작성

### 적용 하기

```
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // 컴포넌트보다 먼저 실행되어서 ,컴포넌트에 필요한 데이터를 불러오는 함수

  const q = context.query.q;
  const books = await fetchBooks(q as string);
  return {
    // **리턴 값은 반드시 props 라는 객체 프로퍼티를 포함하는 객체여야함
    props: {
      books,
    },
  };
};
```

- Context에서 쿼리 추출

- Promise의 결과값 books 변수에 할당

- props 객체 반환

```
export default function Page({
  books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {


  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
```

- Promise의 결과값 books 변수 인수로 전달

- Promise 결과값 = 배열형태

- 배열을 순회하면서 각요소를 순서대로 꺼냄

- 꺼내진 요소는 임시변수 book 에 전달

- book 데이터에 대해 BookItem 컴포넌트 생성 및 렌더링
