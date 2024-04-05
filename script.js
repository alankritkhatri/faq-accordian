//! Selecting Elements
/* all faq-open-icons */ const faqOpen = document.querySelectorAll(".faq-open");
/* all asnwers to faqs */ const answer = document.querySelectorAll(".answer");
//! Event Listeners
//? Adding the open faq feature
console.log(faqOpen);
faqOpen.forEach((icon, iconNo) => {
  return icon.addEventListener("click", function () {
    answer[iconNo].classList.toggle("block");
    const plusSrc = "../assets/images/icon-plus.svg";
    const minusSrc = "../assets/images/icon-minus.svg";

    if (icon.getAttribute("src") === plusSrc) {
      icon.setAttribute("src", minusSrc);
    } else {
      icon.setAttribute("src", plusSrc);
    }
  });
});
