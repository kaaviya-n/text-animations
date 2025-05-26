# ✨ Reveal Text Animation with Vanilla JavaScript

This project demonstrates a **staggered text reveal animation** using **HTML**, **CSS**, and **JavaScript** — no libraries or frameworks involved.

Each word in the sentence appears one after another with a smooth upward motion, creating a visually engaging entrance animation for headlines or hero text.

---

## 🎯 Technique Used

The animation is achieved by:
- Splitting a sentence into words using JavaScript.
- Dynamically creating a `<div>` for each word.
- Wrapping each word in a `<span>` with a delay in the CSS animation.
- Animating each word from below into place using a `translateY()` transform.

This technique gives a **staggered text entrance effect**, perfect for landing pages, banners, or intros.

---

## 📁 Project Structure

```bash
reveal-text-effect/
├── index.html # HTML page
├── style.css  # CSS animations and layout
└── script.js  # JavaScript logic for word generation
```


---

## 🔑 CSS Concepts Used:

| Concept                     | Explanation                                       |
| --------------------------- | ------------------------------------------------- |
| `@keyframes`                | Defines the "reveal" motion from bottom to top    |
| `animation-delay`           | Delays each word’s animation for staggered effect |
| `transform: translateY()`   | Moves the text vertically                         |
| `text-transform: uppercase` | Capitalizes all text                              |
| `flexbox`                    | Aligns text to the bottom-right of the screen     |

## ✅ Key JavaScript Concepts:

- `split(" ")` breaks the sentence into an array of words.
- `document.createElement()` dynamically creates HTML elements.
- `animationDelay` creates the staggered timing.
- `appendChild()` places each word in the DOM.

## ✅ Use Cases

- Hero headers on websites
- Section titles or banners
- Page loading intros
- Portfolio splash screens

## ✍️ Author
Made with ❤️ by **Kaaviya Nakkeeran**
Checkout my [Blog](https://itravdev.com/)