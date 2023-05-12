const containerAlphabet = document.querySelector("#alphabet");
const containerUnderline = document.querySelector(".underline");
const containerLetters = document.querySelector(".letters");

let letter;
let word;
let lives = 10;

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let livesGame = document.createElement("h2");
livesGame.textContent = lives;
containerUnderline.appendChild(livesGame);
// Alphabet Buttons
alphabet.forEach((letter) => {
  const button = document.createElement("button");
  button.id = letter;
  button.textContent = letter;
  button.value = letter;
  containerAlphabet.appendChild(button);
});

// API
async function fetchRandomWord() {
  try {
    const response = await fetch(
      "https://random-word-api.herokuapp.com/word?number=1"
    );
    const data = await response.json();
    word = data[0];
    letter = data[0].split("");

    return data[0];
  } catch (error) {
    console.error("Error:", error);
  }
}
fetchRandomWord().then((data) => {
  for (let i = 0; i < data.length; i++) {
    const span = document.createElement("span");
    span.innerHTML = "___";
    containerUnderline.appendChild(span);
  }
  console.log(data);
});

const btn = document.querySelectorAll("button");
btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    let clicked = button.value;
    for (let i = 0; i < word.length; i++) {
      if (clicked === word[i]) {
        const span = document.querySelectorAll(".underline span");
        span[i].textContent = clicked;
      }
    }
  });
});

// FOR LOOP
// for (let i = 0; i < btn.length; i++) {
//   btn[i].addEventListener("click", (e) => {
//     e.preventDefault();
//     btn[i].style.backgroundColor = "red";
//   });
// }

// underlines

// const underlineFunc = function (word) {
//   const underline = "_".repeat(word.length);
//   console.log(underline);
// };

// underlineFunc();
