# 내일배움캠프 B-12조 (World Best Movie)
## 프로젝트 웹페이지 링크
> 🔗 <https://eunyoung-jo.github.io/movie_nonot/index.html>

<br>
<br>
<br>

## 팀원 소개
<table>
  <tbody>
    <tr>
      <th align="center"><b>팀장: 조은영</b></th>
      <th align="center"><b>팀원: 박유영</b></th>
      <th align="center"><b>팀원: 이수진</b></th>
      <th align="center"><b>팀원: 임다은</b></th>
      <th align="center"><b>팀원: 추유선</b></th>
    </tr>
    <tr>
      <td align="center"><img src="https://avatars.githubusercontent.com/u/82076033?v=4" width="100px;" alt="조은영"/></td>
      <td align="center"><img src="https://avatars.githubusercontent.com/u/54975374?v=4" width="100px;" alt="박유영"/></td>
      <td align="center"><img src="https://avatars.githubusercontent.com/u/59927808?v=4" width="100px;" alt="이수진"/></td>
      <td align="center"><img src="https://avatars.githubusercontent.com/u/167290167?v=4" width="100px;" alt="임다은"/></td>
      <td align="center"><img src="https://avatars.githubusercontent.com/u/167270249?v=4" width="100px;" alt="추유선"/></td>
     <tr/>
      <td align="center"><a href="https://github.com/Eunyoung-Jo">@Eunyoung-Jo</a></td>
      <td align="center"><a href="https://github.com/Park-Yuyeong">@Park-Yuyeong</a></td>
      <td align="center"><a href="https://github.com/leeejin">@leeejin</a></td>
      <td align="center"><a href="https://github.com/pitapat428">@pitapat428</a></td>
      <td align="center"><a href="https://github.com/jamie240417">@jamie240417</a></td>
    </tr>
  </tbody>
</table>

<br>

## 프로젝트 소개
* 팀원들과 함께 JS 문법의 핵심을 적용해 볼 수 있는 영화 검색 사이트를 제작합니다.
* 기존의 개인 과제에서 수행한 내용의 심화 버전으로 진행합니다.
* 바닐라 자바스크립트를 이용하여 온전한 결과물을 제작합니다.

<br>

  ### ✔️ 프로젝트 요구사항
  #### (1) 필수요구사항
  1. TMDB Open API 이용
  2. 영화정보 상세 페이지 구현
     * 기존 영화정보 카드 리스트에서 특정 `item`을 선택할 시, 해당 `item` 상세 페이지로 이동하도록 구현합니다.
     * 상세 페이지에서 메인 페이지(홈)로 이동하는 UI도 함께 구성합니다.
  3. 상세 페이지 영화 리뷰 작성 기능 구현
     * 상세 페이지에서 해당 영화에 대한 의견을 작성할 수 있는 UI를 구현합니다.
     * 작성자, 리뷰, 비밀번호를 입력하도록 구현합니다.
     * 작성한 정보는 브라우저의 `localStorage`에 적재하도록 합니다.
  4. github PR을 통한 협업
  5. UX를 고려한 validation check
     * 영화 검색 시 → 빈 문자열 검색 시 `alert` 메세지
     * 댓글 작성 시 → validation rules에 맞지 않는 리뷰 작성 시 `alert` 메세지
  6. JavaScript 문법 요소를 이용하여 구현
     
  #### (2) 선택요구사항
  * CSS
    * flex 사용하기
    * grid 사용하기
    * 반응형 UI 사용하기
  * 상세 페이지 리뷰 수정 및 삭제 기능 구현
  * 메인 페이지에 조건에 맞는 카드 리스트 정렬 기능 구현 (이름순, 별점 높은 순)

<br>

## Stacks
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

<img src="https://img.shields.io/badge/the movie database-01B4E4?style=for-the-badge&logo=the movie database&logoColor=white">

<img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white"> <img src="https://img.shields.io/badge/visual studio code-007ACC?style=for-the-badge&logo=visual studio code&logoColor=white">

<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"> <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">

<img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">

<br>

## Wireframe
<img src="https://velog.velcdn.com/images/u025/post/713eeb35-3fef-4b26-bbbb-edbc1fa5abe3/image.png" alt="이미지오류">

## 주요 기능
* TMDB 인기 영화 콜렉션 조회
* 영화 제목순, 별점 높은 순으로 영화 리스트 조회 가능
* 영화 제목을 통한 영화 검색 가능
* 영화 카드 클릭시 해당 영화 상세 정보 조회
* 영화 상세 페이지에서 해당 영화에 대한 댓글 작성, 수정, 삭제 가능
