// 타입 별칭

type User ={
    id?:number;
    name:string;
    nickname:string;
    birth:string;
    bio:string;
    location:string;
}

let user: User ={
    id:1,
    name:"선기훈",
    nickname: "sean",
    birth: "1997.01.21",
    bio: "안녕하세요",
    location: "서울시"
};

let user2: User ={
    id:2,
    name:"홍길동",
    nickname: "sean",
    birth: "1997.01.21",
    bio: "안녕하세요",
    location: "서울시"
};


// 인덱스 시그니쳐

type CountryCodes ={
    [key : string] :string
}

let countryCodes: CountryCodes ={
    Korea: 'ko',
    UnitedState: "us",
    UnitedKindom: "uk",
}


type CountryNumberCodes ={
    [key : string] : number
}

let countryNumberCodes:CountryNumberCodes ={
    Korea: 410,
    UnitedState: 840,
    UnitedKindom : 826
}