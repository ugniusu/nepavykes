// ////////////////////
// NEVEIKIA !!!

document.addEventListener("DOMContentLoaded", function () {
  const findBtn = document.getElementById("find");
  findBtn.addEventListener("click", findWord);
});

function findWord() {
  const word = document.getElementById("word").value.toLowerCase();
  const text = document.getElementById("text").value;
  const result = document.getElementById("result");

  const plainText = text.replace(/<span class="highlight">|<\/span>/gi, "");

  const words = plainText.split(" ");
}
