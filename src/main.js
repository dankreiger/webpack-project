require("./main.css");
require("./index.html");

const puppy = () => {
  console.log("what up puppy");
  const audio = new Audio('http://soundbible.com/mp3/puppy-barking_ds.mp3');
  audio.play();
}

const text = document.querySelector('h1');
text.addEventListener("click", puppy);
