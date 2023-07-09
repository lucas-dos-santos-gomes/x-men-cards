const characters = document.querySelectorAll(".character");

for(const c of characters) {
  c.onmouseover = () => {
    const selectedCharacter = document.querySelector(".selected");
    if(selectedCharacter != c) {
      selectedCharacter.classList.remove("selected");
      c.classList.add("selected");
    }
  }
}