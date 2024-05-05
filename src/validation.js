// 리뷰등록 유효성검사 함수
// 웹페이지에 사용자가 입력해야 하는 값들에 대한 유효성 멘트 제공
// detail 폼의 html id css코드 들과 재연결 필요함

window.onload = function () {
  const userName = document.querySelector("#input-user-name");
  const userPassword = document.querySelector("#input-user-password");
  const reviewInput = document.querySelector("#input-comment");
  const nameFailureMessage = document.querySelector(".name-failure-message");
  const pwFailureMessage = document.querySelector(".pw-failure-message");
  const rwFailureMessage = document.querySelector(".rv-failure-message");
  const rvButton = document.querySelector("#button-comment");
  //html 요소들과 연결해주기

  userName.onkeyup = function () {
    if (userName.value.length < 2) {
      //userName의 글자수가 2보다 많은지 적은지에 따라 .hide 끄고 키기
      nameFailureMessage.classList.remove("hide");
    } else {
      nameFailureMessage.classList.add("hide");
    }
  };

  userPassword.onkeyup = function () {
    if (userPassword.value.length === 4) {
      //userPassword 의 숫자의 갯수가 4일때만 유효성멘트가 꺼진다
      pwFailureMessage.classList.add("hide");
    } else {
      pwFailureMessage.classList.remove("hide");
    }
  };

  reviewInput.onkeyup = function () {
    //reviewInput의 값이 10 이상일때 유효성멘트가 꺼진다
    if (reviewInput.value.length >= 10) {
      rwFailureMessage.classList.add("hide");
    } else {
      rwFailureMessage.classList.remove("hide");
    }
  };

  //입력값에 따른 버튼 활성화 비활성화. 초기 버튼은 disabled 되어있다.
  //   userName.addEventListener("keyup", activeEvent);
  //   userPassword.addEventListener("keyup", activeEvent);
  //   reviewInput.addEventListener("keyup", activeEvent);
  //   rvButton.addEventListener("click", errorEvent);

  //   function activeEvent() {
  //     switch (!(userName.value && userPassword.value && reviewInput.value)) {
  //       case true:
  //         console.log(userName.value);
  //         rvButton.disabled = true;
  //         break;
  //       case false:
  //         rvButton.disabled = false;
  //         break;
  //     }
  //   }
  //   function errorEvent() {
  //     formWrap.classList.add("error"); > formWrap 설명 필요
  //   }
};
