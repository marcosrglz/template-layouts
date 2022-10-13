const chatWindow = document.querySelector(".chat-window")
const chatButton = document.getElementById("chat-button-status")

chatButton.addEventListener("click", (event) => {
  const classList = chatWindow.classList
  if(classList.contains("expanded")){
    classList.remove("expanded")
  } else {
    classList.add("expanded")
  }
});