const textEl = document.getElementById("text");
const words = [
  "Hello, World!",
  "Happy Coding",
  "Enjoy Learning",
];
let wordIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
let typeSpeed = 100;

function type() {
  const fullText = words[wordIndex];

  if (isDeleting) {
    currentText = fullText.substring(0, charIndex--);
  } else {
    currentText = fullText.substring(0, charIndex++);
  }

  textEl.textContent = currentText;

  if (!isDeleting && charIndex > fullText.length) {
    setTimeout(() => {
      isDeleting = true;
      type();
    }, 2000);
    return;
  }

  if (isDeleting && charIndex < 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; // this is to iterate through the words

    // wordIndex++;
    // if (wordIndex >= words.length) return; // stop the loop
  }

  setTimeout(type, isDeleting ? typeSpeed/2 : typeSpeed);
}

type();
