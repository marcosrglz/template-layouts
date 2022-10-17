const chatWindow = document.querySelector(".chat-window");
const chatButton = document.getElementById("chat-button-status");

chatButton.addEventListener("click", (event) => {
  const classList = chatWindow.classList;
  if (classList.contains("expanded")) {
    classList.remove("expanded");
  } else {
    classList.add("expanded");
  }
});

const bodyTag = document.body;
const themeButton = document.getElementById("top-tweets-button");

themeButton.addEventListener("click", (e) => {
  let bodyClassList = bodyTag.classList;

  if (bodyClassList.contains("light-theme")) {
    bodyClassList.remove("light-theme");
    e.stopPropagation();
  } else {
    bodyClassList.add("light-theme");
    e.stopPropagation();
  }

  localStorage.setItem("theme", bodyTag.classList || "");
});

bodyTag.setAttribute("class", localStorage.getItem("theme"));