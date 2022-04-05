const messageBox = document.querySelector(".message_box"),
      message = document.querySelector("#message"),
      sendBtn = document.querySelector(".submit_btn");

const profilePicture = document.querySelector("#profilePicture"),
      changeStatus = document.querySelector(".change_status"),
      statusDivs = changeStatus.querySelectorAll("div"),
      onlineStatus = document.querySelector("#onlineStatus");
// execute some functions after loading the page
window.onload = () => {
  messageScrollDown();
}
// send message
function sendMessage() {
  let p = `<p class="message sent">${message.value.trim()}</p>`;
  messageBox.insertAdjacentHTML("beforeend", p);
}
// scroll to the end of the messages
function messageScrollDown() {
  messageBox.scrollTop = messageBox.scrollHeight;
}
// send message with button
sendBtn.addEventListener("click", (e) => {
  if (!message.value.trim()) {
    e.preventDefault();
    message.focus();
  }
  else {
    sendMessage();
    message.value = "";
    messageScrollDown();
  }
});
// send message with enter key
message.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    if (e.shiftKey) {
      e.preventDefault();
    }
    else {
      if (!message.value.trim()) {
        e.preventDefault();
      }
      else {
        sendMessage();
        message.value = "";
        messageScrollDown();
      }
    }
  }
});


//  profile Pictrue -> change status
profilePicture.addEventListener("click", (e) => {
  e.preventDefault();
  changeStatus.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (e.target.id !== "profilePicture" && e.target.id !== "onlineStatus") {
    changeStatus.classList.remove("active");
  }
});

statusDivs.forEach(statusDiv => {
  statusDiv.onclick = (e) => {
    if (onlineStatus.classList.contains("online")) {
      onlineStatus.classList.replace("online", e.target.className);
    }
    else if (onlineStatus.classList.contains("offline")) {
      onlineStatus.classList.replace("offline", e.target.className);
    }
    else {
      onlineStatus.classList.replace("busy", e.target.className);
    }
  }
});