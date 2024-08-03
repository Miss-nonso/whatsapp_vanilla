// const notMsgs = document.getElementsByClassName("user");
// const message = () => {
//   alert("ydftf");
// };
// for (const notmsg of notMsgs) {
//   notmsg.addEventListener("click", message());
// }
// Get the modal

// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// function handleAddChat(event) {
//   console.log(event);
//   modal.style.display = "block";
// }

// let meSent, broBernardSent;

let typedMsg = document.getElementById("typedMsg");
const rightBodyContainer =
  document.getElementsByClassName("rightBodyContainer");
const chatNavigator = document.getElementById("chatNavigator");

typedMsg.onchange = (event) => {
  typedMsg = event.target.value;
};

document.getElementById("sendMsg").onclick = (event) => {
  rightBodyContainer[0].innerHTML += `  <div class="wideChatContainer replyContainer" >
  <div class=" chatBox reply">
      <div class=" repliedChatContainer">
          ${typedMsg}</div>
      <div class="timeOfReply"><small>${new Date().getHours()}:${new Date().getMinutes()}</small>
          <div class="blueTick"><i class="fa-solid fa-check-double fa-sm" style="color: #3ca3c0;"></i>
          </div>
      </div>
  </div>
</div>`;
  rightBodyContainer[0].scrollTo(0, rightBodyContainer[0].scrollHeight);
};

document.getElementById("bernerdMsg").onclick = (event) => {
  rightBodyContainer[0].innerHTML += `
<div class="wideChatContainer repliedContainer" >
<div class="chatBox replied">
    <div class="repliedChatContainer">${typedMsg}</div>
    <div class="timeOfReply"><small>${new Date().getHours()}:${new Date().getMinutes()}</small>
    </div>
</div>
</div>
`;
  rightBodyContainer[0].scrollTo(0, rightBodyContainer[0].scrollHeight);
};

chatNavigator.onclick = (event) => {
  rightBodyContainer[0].scrollTo(0, rightBodyContainer[0].scrollHeight);
};
