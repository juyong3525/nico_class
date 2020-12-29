import axious from "axios";

const AddCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");
const deleteBtns = document.querySelectorAll(".deleteBtn");
const commentSpell = document.getElementById("jsCommentSpell");

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

const decreaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
};

const addComment = (comment) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerHTML = comment;
  li.appendChild(span);
  commentList.prepend(li);
  increaseNumber();
  if (parseInt(commentNumber.innerHTML) === 1) {
    commentSpell.innerHTML = "comment";
  } else {
    commentSpell.innerHTML = "comments";
  }
};

const sendComment = async (comment) => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axious({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment,
    },
  });
  if (response.status === 200) {
    addComment(comment);
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  const commentInput = AddCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

const deleteComment = async (currentComment) => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axious({
    url: `/api/${videoId}/del-comment`,
    method: "POST",
    data: {
      comment: currentComment,
    },
  });
  response;
};

const handleDeleteBtn = (event) => {
  const list = event.target.parentElement;
  const lists = list.parentElement;
  const currentComment = list.childNodes[0].innerHTML;
  deleteComment(currentComment);
  lists.removeChild(list);
  decreaseNumber();
  if (parseInt(commentNumber.innerHTML) === 1) {
    commentSpell.innerHTML = "comment";
  } else {
    commentSpell.innerHTML = "comments";
  }
};

const getDeleteBtn = () => {
  for (let btn of deleteBtns) {
    btn.addEventListener("click", handleDeleteBtn);
  }
};

const init = () => {
  AddCommentForm.addEventListener("submit", handleSubmit);
  getDeleteBtn();
};

if (AddCommentForm) {
  init();
}
