const characters = document.querySelectorAll(".character");
const focusedCharacter = document.querySelector(".focused-character");
const characterName = document.querySelector(".character-name");

function scrollTop() {
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
}

for(const c of characters) {
  c.onmouseover = () => {
    focusedCharacter.src = `./src/assets/card-${c.id}.png`;
    characterName.innerHTML = c.id;
    const selectedCharacter = document.querySelector(".selected");
    if(selectedCharacter != c) {
      selectedCharacter.classList.remove("selected");
      c.classList.add("selected");
    }
  }

  c.onclick = scrollTop;
  c.ontouchstart = scrollTop;
}