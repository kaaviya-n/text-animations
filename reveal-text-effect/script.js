const text = "reveal your text this way to enhance your website".split(" ");

for (let i = 0; i < text.length; i++) {
  const div = document.createElement("div");
  div.classList.add("reveal-text");

  const span = document.createElement("span");
  span.innerText = text[i];
  span.classList.add("text-wrapper");
  span.style.animationDelay = `${i * 400}ms`; // without this the text reveals all at once

  div.appendChild(span);
  document.body.appendChild(div);
}
