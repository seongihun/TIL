### 페이지 라우터 

  안정적인 라우터 
  React Router 와 비슷한 기능

  pages 폴더의 기준으로 라우팅이 됨

  파일,폴더명 기반의페이지 라우팅 

  동적 경로 설정

  item 폴더 아래에 "[id] .js" 로 만들기 

## APP.tsx

  NEXT.JS 에서는 모든 페이지는 App 컴포넌트 하위에 page 가 있음 

## document.tsx 

  페이지 전체에 다 적용되는 HTML 태그를 관리 하기 위해 사용되는 페이지 

  + 메타 태그
  + 폰트 
  + 캐릭터 set
  + third party SCript

## next config.mjs


# 페이지 라우팅 설정하기 

index page

Search 페이지

books page

### catch All segment

쿼리 스트링의 아이디 값이 여러개 이거나 터무니없이 긴 아이디를 처리 할떄 

파일 이름을 {} 안에 ... 을 넣어준다 

![alt text](image.png)

넥스트에서 ... 은 해당하는 모든구간에 다 대응하는 페이지를 만들겠다라는 의미로  작성한다

### 저장 방식 

url 파라미터들은 컴포넌트에 id 변수에 배열 형태로 저장이된다 

### catch All segment 가 처리하지 못하는 경우

+ / 뒤에 아무것도 없는 페이지 
```
/books 
````

이런경우 폴더 경로에 index.ts 페이지를 만들면 해결되지만 파일을 추가적으로 생성하지 않고 처리하고 싶다면 

파일이름에 [] 를 한번 더 감싸주면된다

![alt text](image-1.png)

이렇게 만들면 완전히 범용적인 페이지로 진화하게된다 

이렇게 설정된 페이지를 OPtinal catch All Segment 라고 한다


## 네비게이팅


### Link 컴포넌트 

```
<Link href={주소값}>
```

CSR 사용으로 쾌적하게 넘어가는것을 볼 수 있다 

### 프로그래메틱하게 이동

특정 버튼 이나 조건이 만족했을떄 페이지가 이동되는것 

```
<div>
<button></button>
</div>
```

div 태그안에 button 태그를 설정하고 


```
 <div>
    <button onClick={onClickButton}>/test 페이지 이동</button>
  </div>
```

onClick 이벤트로 버튼 클릭했을떄 작동하는 함수를 전달한다 

```
const router= useRouter()
```

useRouter를 import 하고 useRouter 객체를 변수에 할당한다 

```
const onClickButton=() => {
    router.push("주소값")
  }
```

App 컴포넌트 함수안에 이벤트 함수를 선언하고 동작문에 push 메소드를 이용하여 이동하고자 하는 페이지 주소값을 넣는다

## 프리패칭 

페이지를 사전에 불러온다 
페이지 이동요청이 발생하기 전에 미리 불러와 놓음

초기접속 요청이 왔을때 모든 js 파일을 전달할 경우 용량이 너무 커져 
하이드레이션이 늦어지게 된다 

그렇기에 현재 접속을 요청한 그런 페이지에만 해당하는 js코드들만 따로따로 보내 주게 됨

현재 페이지에서 이동할 수 있는 모든 페이지의 js 코드를 사전에 불러와 놓게 된다

최종적으로 초기접속 요청 시에 하이드레이션을 더 빠르게 처리 할 수 있도록 만들어준다

Link 컴포넌트로 페이지를 이동하도록 설정 하면 프리 패칭이 잘 이루어진다

test 페이지의 경우에도 똑같이 프리패칭을 시켜주고 싶다면 

```
useEffect(()=>{
    router.prefetch("/test")
  },[])
```
useEffect 컴포넌트 내부에 호출 하고 
딱 한번만 실행시킬 거니까 덱스를 빈배열로 전달해 주고 

router 객체에 prefetch 메서드를 호출후 
인수로 프리패칭할 "주소값" 을 넣어준다


### 프리패칭 해제

```
<Link href={"/search"} prefetch={false} > search</Link>
```

프리패칭이 굳이 필요없는 페이지에 LInk 태그안에 prefetch props를  false로 전달하면 된다 

설정하면 이 링크에 해당하는 페이지는 프리패칭이 발생하지 않게 된다 

서버를 종료후에 
```
npm run build
```

```
npm run start
```

새롭게 서버를 실행하고 개발자 도구 네트워크탭을 열고 새로고침 하면

설정한 링크는 프리패칭이 밣생하지 않는 걸 확인할 수 있다

### Api 라우트 

간단한 api를 구축 브라우저로 부터 요청을 받아 데이터 베이스에서 데이터를 꺼내온다던가 써드파티에서 데이터를 불러와서 전달을 해줄 수 있다 

+ 설정하는법

api/hello

api 폴더내에 hello 라는 이름으로 작성을 하게 되면 api 라우트로 설정이 된다 브라우저를 통해서 해당경로로 API 요청을 하게되면 데이터를 불러올 수 있다


### 스타일링

일반적인 css 스타일링 과 다른점

+ 파일명 
  + .module.css

일반 CSS를 쓰면, 모든 클래스가 전역(Global)으로 적용돼서 다른 컴포넌트와 충돌할 수 있다 

CSS Module은 클래스 이름을 고유하게 만들어 줍니다

+ 컴포넌트 단위 스타일 관리

CSS Module을 쓰면 각 컴포넌트마다 스타일 파일을 분리할 수 있어요.

ComponentA.module.css → ComponentA.tsx 전용

ComponentB.module.css → ComponentB.tsx 전용

➡ 코드 유지보수가 쉽고, 불필요한 스타일 전파를 막을 수 있음