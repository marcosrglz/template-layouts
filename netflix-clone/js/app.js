const faqButton = document.querySelector(".faq-question");
const closedEl = document.querySelector(".closed");
const faqAnswerEl = document.querySelector(".faq-answer");

faqButton.addEventListener("click", (e) => {
  if (faqAnswerEl.classList.contains("closed")) {
    faqAnswerEl.classList.remove("closed");
    e.preventDefault();
  } else {
    faqAnswerEl.classList.add("closed");
    e.preventDefault();
  }
});
