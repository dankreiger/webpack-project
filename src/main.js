require("./main.css");
require("./index.html");

const puppy = () => {
  console.log("%c what up puppy ", 'background: #222; color: #bada55');
  const audio = new Audio('http://soundbible.com/mp3/puppy-barking_ds.mp3');
  audio.play();
}

const text = document.querySelector('h1');
text.addEventListener("click", puppy);
