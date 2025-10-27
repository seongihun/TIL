type Admin = {
  tag: "Adimin";
  name: string;
  kickcount: number;
};
type Member = {
  tag: "Member";
  name: string;
  point: number;
};

type Guest = {
  tag: "Guest";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Adimin -> {name}님 현재까지 {kickcount} 명 강퇴했습니다
// Member -> {name} 님 현재까지 {point} 모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.

function login(user: User) {
  switch (user.tag) {
    case "Adimin": {
      console.log(`${user.name}님 현재까지 ${user.kickcount}명 강퇴했습니다.`);
      break;
    }
    case "Member": {
      console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
      break;
    }
    case "Guest": {
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
      break;
    }
  }
}

/**
 * 복습
 */

// 비동기 작업의 결과를 처리하는 객체

type loadingTask = {
  state: "LOADING";
};

type failedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type successTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = loadingTask | failedTask | successTask;
// 로딩중 -> 콘솔에 로딩중 출력
// 실패 -> 실패: 에러메세지 출력
// 성공 -> 성공 : 데이터를 출력
function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩중");
      break;
    }
    case "FAILED": {
      console.log(`에러 발생: ${task.error?.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공 : ${task.response?.data}`);
      break;
    }
  }
}

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인은 ~",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터~~",
  },
};
