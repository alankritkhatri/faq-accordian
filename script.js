//! Selecting Elements
/* all faq-open-icons */ const faqOpen = document.querySelectorAll(".faq-open");
/* all asnwers to faqs */ const answer = document.querySelectorAll(".answer");
//! Event Listeners
//? Adding the open faq feature
console.log(faqOpen);
faqOpen.forEach((icon, j) => {
  return icon.addEventListener("click", function () {
    answer[j].classList.toggle("block");
  });
});
