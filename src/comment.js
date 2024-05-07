const urlParams = new URLSearchParams(window.location.search);
const detailMovieTitle = urlParams.get("title"); // 현재 상세페이지 영화 제목

const $input_user_name = document.getElementById("input-user-name"); // 사용자 이름
const $input_user_password = document.getElementById("input-user-password"); //사용자 비밀번호
const $input_comment = document.getElementById("input-comment"); //댓글 인풋
const $content_comment = document.getElementById("content-comment"); // 댓글 내용 담는 용
const $button_comment = document.getElementById("button-comment"); //댓글 버튼
let data = JSON.parse(localStorage.getItem(`${detailMovieTitle}`)); // 댓글 데이터
/** 댓글 객체 추가 */
const addCommentsObject = async () => {
  if (!data.hasOwnProperty("comments")) {
    data.comments = []; // comments 키가 없는 경우 빈 배열 추가
    localStorage.setItem(`${detailMovieTitle}`, JSON.stringify(data));
  }

  callGetCommentData();
};
/**댓글 불러오기 및 사용자 확인*/
const callGetCommentData = () => {
  if (!data.comments.length) {
    $content_comment.innerHTML = "<h3>리뷰가 존재하지 않습니다! 리뷰를 남겨주세요</h3>";
    return;
  }
  $content_comment.innerHTML = data.comments.reduce((prev, cur, index) => {
    //작성자 이름은 두글자 이상이어야하고 두글자는 이름 다보이고 그 위로는 *로 나타남
    let new_username = cur.username.slice(0, 2) + "*".repeat(cur.username.length - 2);

    let html = `
    <div data-index="${index}">
      <form action="#" id="confirmDiv">
      <h4>${new_username} <span class="text-sub">${cur.date}</span></h4>
      <button class="btn-edit" data-action="delete" data-index="${index}" >삭제</button>
      <button class="btn-edit" data-action="modify" data-index="${index}" >수정</button>
      </form>
      <span>${cur.content}</span>
  `;
    if (index !== data.comments.length - 1) html += `<hr class="hr"/>`;

    return prev + html + `</div>`;
  }, "");
};

window.onload = addCommentsObject();

/**댓글 달기 */
const handleSendComment = (e) => {
  e.preventDefault();
  let newComment = {
    username: $input_user_name.value,
    userpw: $input_user_password.value,
    content: $input_comment.value,
    date: handleDateFilter()
  };
  let error = {
    username: newComment.username.length < 2, // 이름은 최소 두 자리
    userpw: newComment.userpw.length !== 4 || isNaN(newComment.userpw), // 비밀번호는 숫자 4자리
    content: newComment.content.length < 10 // 리뷰 내용 몇글자까지 해야할지 정해주세요 (10자리 이상)
  };

  // 에러가 없는 경우에만 실행
  if (!(error.username || error.userpw || error.content)) {
    data.comments.push(newComment);
    localStorage.setItem(`${detailMovieTitle}`, JSON.stringify(data));
  } else {
    if (error.username) alert("사용자 이름은 2글자 이상이어야 합니다.");
    else if (error.userpw) alert("비밀번호는 숫자 4자리입니다.");
    else if (error.content) alert("리뷰 내용은 10글자 이상 입력해주세요.");
  }
  callGetCommentData();
  $input_user_name.value = $input_user_password.value = $input_comment.value = "";
};
$button_comment.addEventListener("click", handleSendComment);

/** 날짜 데이터 필터링 함수 */
const handleDateFilter = () => {
  const today = new Date().toString().split(" ").slice(1, 5);
  let month = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${today[2]}-0${month.indexOf(today[0])}-${today[1]}`;
};

/** 각 확인 버튼에 이벤트 리스너 등록 */
$content_comment.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("btn-edit")) {
    const action = e.target.dataset.action;
    const index = e.target.dataset.index;
    const parentDiv = e.target.closest("div");
    if (action === "delete") {
      handleDeleteComment(parentDiv);
    } else if (action === "modify") {
      handleModifyComment(index, parentDiv);
    }
  }
});

/** 댓글 삭제 */
const handleDeleteComment = (parentDiv) => {
  const id = parentDiv.dataset.index;
  const input_confirm_password = window.prompt("삭제를 위해 리뷰작성시 입력하였던 비밀번호를 입력하시오", "");

  if (input_confirm_password !== data.comments[id].userpw) {
    alert("사용자 비밀번호와 맞지 않습니다!");
    return;
  }
  data.comments.splice(id, 1);
  localStorage.setItem(`${detailMovieTitle}`, JSON.stringify(data));

  alert("리뷰가 성공적으로 삭제되었습니다!");
  callGetCommentData();
};

/**댓글 수정 */
const handleModifyComment = (index, parentDiv) => {
  const id = parentDiv.dataset.index;
  const input_confirm_password = window.prompt("수정을 위해 리뷰작성시 입력하였던 비밀번호를 입력하시오", "");
  if (input_confirm_password !== data.comments[id].userpw) {
    alert("사용자 비밀번호와 맞지 않습니다!");
    return;
  }

  parentDiv.innerHTML += `<form action="#">
            <input type="text" placeholder="수정하실 내용을 입력해주세요" id="input-modify-${index}" value="${data.comments[id].content}"/>
            <button class="btn btn-modify" id="button-confirm-${index}">확인</button>
            <button class="btn btn-modify" id="button-cancel-${index}">취소</button>
            </form>
            `;

  const button_confirm = document.getElementById(`button-confirm-${index}`);
  button_confirm.addEventListener("click", () => {
    let = modifyComment = document.getElementById(`input-modify-${index}`).value;

    if (modifyComment.length >= 10) {
      data.comments[id].content = modifyComment;
      localStorage.setItem(`${detailMovieTitle}`, JSON.stringify(data));

      alert("성공적으로 수정되었습니다!");
      callGetCommentData();
    } else alert("리뷰 내용은 10글자 이상 입력해주세요.");
  });
  const button_cancel = document.getElementById(`button-cancel-${index}`);
  button_cancel.addEventListener("click", () => {
    //취소
  });
};
