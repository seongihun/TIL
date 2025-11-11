# SSR실습{id}

```
import { BookData } from "@/types";

export default async function fetchOneBook(id:number): Promise<BookData | null> {
  const url = `http://localhost:12345/book/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  } catch (err) {
    console.log(err);
    return null;
  }
}

```

- id 값을 인수로 전달 타입은 number로 지정하여 number외에는 들어올수 없게 함

- api 주소값 변수에 할당

- 하나의 데이터만 가져옴(목록X) 에러발생시 []대신 null 리턴

## 적용

```
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params!.id;
  const book = await fetchOneBook(Number(id));
  return {
    props: {
      book,
    },
  };
};
```

- SSR 활용 선언

- context.params!.id 값을 꺼내 id 변수에 할당
  ! 연산자를 이용 null 또는 undefined가 아님을 명시

- id인수로 fetchOneBook함수호출 promise값(BookData또는 null) book변수에 할당

- props에 book 전달

```
export default function Page({
  book,
}: InferGetServerSidePropsType<typeof getServerSideProps>)

```

- promis 결과값이 담긴 book 인수로 전달

```
if (!book) return "문제가 발생했습니다 다시 시도하세요";

```

예외 설정 에러 발생시 적용

```
const { id, title, subTitle, description, author, publisher, coverImgUrl } =
    book;

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url(${coverImgUrl})` }}
      >
        <img src={coverImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
```

- book 변수에 객체 전달

- 스타일설정을 적용하여 페이지 렌더링
