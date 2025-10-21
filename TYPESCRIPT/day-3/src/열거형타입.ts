// enum type 
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
    Admin ,
    User = 10 ,
    Guest 
}

enum Language {
    korean = "ko",
    englisg = "en",
}

const user1 = {
    name : "선기훈",
    role: Role.Admin ,// 0 <- 관리자
    language: Language.korean,
}

const user2 = {
    name : "홍길동",
    role : Role.User // 1 <-일반 유저
}


const user3 = {
    name : "심청이",
    role : Role.Guest // 2 <- 게스트 
}

console.log(user1, user2, user3)