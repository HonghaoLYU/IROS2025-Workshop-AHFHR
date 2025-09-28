document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".toggle-btn").forEach(button => {
    button.addEventListener("click", () => {
      const shortText = button.parentElement.querySelector(".short-text");
      const fullText = button.parentElement.querySelector(".full-text");

      if (fullText.style.display === "none") {
        fullText.style.display = "inline";
        shortText.style.display = "none";
        button.textContent = "Show less";
      } else {
        fullText.style.display = "none";
        shortText.style.display = "inline";
        button.textContent = "Show more";
      }
    });
  });
});
