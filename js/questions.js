(function () {
  const titleQuestions = document.querySelectorAll(".questions__title");

  titleQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const addPadding = question.parentElement.parentElement;

      addPadding.classList.toggle("questions__padding--add");
      question.children[0].classList.toggle("questions__arrow--rotate");

      answer.style.height =
        answer.clientHeight === 0 ? `${answer.scrollHeight}px` : "0";
    });
  });
})();
