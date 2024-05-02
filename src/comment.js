const $input_user_name = document.getElementById("input-user-name"); // 사용자 이름
const $input_user_password = document.getElementById("input-user-password"); //사용자 비밀번호
const $input_comment = document.getElementById("input-comment"); //댓글 인풋
const $content_comment = document.getElementById("content-comment"); // 댓글 내용 담는 용
const $button_comment = document.getElementById("button-comment"); //댓글 버튼
let postId = 1; // 지금 보고 있는 포스트 id를 뜻하고 상세페이지가 완성됨에 따라 db에서 주는 id로 바꿔야 합니다
let comments = JSON.parse(localStorage.getItem(`${postId}`)) || []; // 댓글 데이터

/**댓글 불러오기 및 사용자 확인*/
const callGetCommentData = () => {
  if (!comments.length) {
    $content_comment.innerHTML = `<h3>리뷰가 존재하지 않습니다! 리뷰를 남겨주세요</h3>`;
    return;
  }
  $content_comment.innerHTML = comments.reduce((prev, cur, index) => {
    //작성자 이름은 두글자 이상이어야하고 두글자는 이름 다보이고 그 위로는 *로 나타남
    let new_username = cur.username.slice(0,2) + "*".repeat(cur.username.length -2);

    let html = `
    <div data-index="${index}">
      <form id="confirmDiv">
      <h4>${new_username} <span class="text-sub">${cur.date}</span></h4>
      <button class="btn-edit" data-action="delete" data-index="${index}" >삭제</button>
      <button class="btn-edit" data-action="modify" data-index="${index}" >수정</button>
      </form>
      <span>${cur.content}</span>
  `;
   if(index !== comments.length -1) html += `<hr class="hr"/>`;
   html +=`</div>`;

    return (prev + html);
  }, "");

};
window.onload = callGetCommentData();

/**댓글 달기 */
const handleSendComment = () => {
  let newComment = {
    username: $input_user_name.value,
    userpw: $input_user_password.value,
    content: $input_comment.value,
    date: handleDateFilter(),
  };
  let error={
    username : newComment.username.length<=2, // 임시로 2글자 이하면 에러로 했지만 만약 바꾸고싶으면 글자수에 맞게 17번째 줄도 바꿔야 합니다
    userpw : !newComment.userpw.length, // 비밀번호 유효성을 입력해주세요
    content: !newComment.content.length // 리뷰 내용 몇글자까지 해야할지 정해주세요
  }
  
// 에러가 없는 경우에만 실행
if (!(error.username || error.userpw || error.content)) {
  comments.push(newComment);
  localStorage.setItem(`${postId}`, JSON.stringify(comments));
} else {
  if (error.username) alert("사용자 이름은 2글자 이상이어야 합니다.");
  else if (error.userpw) alert("비밀번호를 입력해주세요.");
  else if (error.content) alert("리뷰 내용을 입력해주세요.");
}
}
$button_comment.addEventListener("click", handleSendComment);

/** 날짜 데이터 필터링 함수 */
const handleDateFilter = () => {
  const today = new Date().toString().split(" ").slice(1, 5);
  let month = ["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${today[2]}-0${month.indexOf(today[0])}-${today[1]} ${today[3]}`;
};

/** 각 확인 버튼에 이벤트 리스너 등록 */
$content_comment.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-edit")) {
    const action = e.target.dataset.action;
    const index = e.target.dataset.index;
    const parentDiv = e.target.closest("div");
    if (action === "delete") {
      handleDeleteComment(parentDiv);
    } else if (action === "modify") {
      handleModifyComment(index,parentDiv);
    }
  }
});

/** 댓글 삭제 */
const handleDeleteComment = (parentDiv) => {
  const id = parentDiv.dataset.index;
  const local_data = JSON.parse(localStorage.getItem(`${postId}`));
  const input_confirm_password = window.prompt(
    "삭제를 위해 리뷰작성시 입력하였던 비밀번호를 입력하시오",
    ""
  );

  if (input_confirm_password !== local_data[id].userpw) {
    alert("사용자 비밀번호와 맞지 않습니다!");
    return;
  }
  local_data.splice(id, 1);
  localStorage.setItem(`${postId}`, JSON.stringify(local_data));

  alert("리뷰가 성공적으로 삭제되었습니다!");
};

/**댓글 수정 */
const handleModifyComment = (index,parentDiv) => {
  const id = parentDiv.dataset.index;
  const input_confirm_password = window.prompt(
    "수정을 위해 리뷰작성시 입력하였던 비밀번호를 입력하시오",
    ""
  );
  const local_data = JSON.parse(localStorage.getItem(`${postId}`))[id];
  if (input_confirm_password !== local_data.userpw) {
    alert("사용자 비밀번호와 맞지 않습니다!");
    return;
  }

  parentDiv.innerHTML += `<form>
            <input type="text" placeholder="수정하실 내용을 입력해주세요" id="input-modify-${index}" value="${local_data.content}"/>
            <button class="btn btn-modify" id="button-confirm-${index}">확인</button>
            <button class="btn btn-modify" id="button-cancel-${index}">취소</button>
            </form>
            `;
            
  const button_confirm = document.getElementById(`button-confirm-${index}`);
  button_confirm.addEventListener("click", () => {
    let data = JSON.parse(localStorage.getItem(`${postId}`))[id];
    data.content = document.getElementById(
      `input-modify-${index}`
    ).value;
    localStorage.setItem(`${postId}`, JSON.stringify(data));

    alert("성공적으로 수정되었습니다!");
  });
  const button_cancel = document.getElementById(`button-cancel-${index}`);
  button_cancel.addEventListener("click", () => {
    //취소
  });
};
