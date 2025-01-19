// Typing effect for the title
const typingElement = document.querySelector(".typing");
const words = ["Web Designer", "Graphic Designer", "Developer"];
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
