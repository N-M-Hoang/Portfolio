// Typing effect for the title
const typingElement = document.querySelector(".typing");
const words = ["Web Designer", "Backend Developer"];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, letterIndex--);
  } else {
    typingElement.textContent = currentWord.substring(0, letterIndex++);
  }

  if (!isDeleting && letterIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}

type();

// Redirect when "Hire Me" button is clicked
const buttons = document.querySelectorAll(".btn"); // Chọn tất cả các nút có class "btn"

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent.trim() === "Hire Me") {
      // Điều hướng đến form liên hệ
      window.location.href = "contact.html";
    }
  });
});
