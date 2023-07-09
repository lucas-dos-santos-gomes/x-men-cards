const characters = document.querySelectorAll(".character");
const focusedCharacter = document.querySelector(".focused-character");

for(const c of characters) {
  c.onmouseover = () => {
    const selectedCharacter = document.querySelector(".selected");
    if(selectedCharacter != c) {
      selectedCharacter.classList.remove("selected");
      c.classList.add("selected");
    }
    focusedCharacter.src = `./src/assets/card-${c.id}.png`;
  }
}