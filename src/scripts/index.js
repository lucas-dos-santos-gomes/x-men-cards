const characters = document.querySelectorAll(".character");
const focusedCharacter = document.querySelector(".focused-character");
const characterName = document.querySelector(".character-name");
const characterDescription = document.querySelector(".character-description");

const descriptions = {
  ciclope: "Ele tem o poder de disparar rajadas ópticas por um acidente que aconteceu quando ele era criança, mas não consegue controlá-los",
  jeangrey: "Os poderes de Jean eram restritos a simples telecinese, e até mesmo levantar seu próprio peso rapidamente cansava ela.",
  lincenegra: "Ela tem o poder de atravessar matéria sólida,campos de energia,rajadas ópticas, continuando intacta,e também tem o poder de andar no ar.",
  tempestade: "Tem o poder de controlar as forças da natureza, faz o clima variar entre seus extremos. Ela pode produzir raios, chuvas, gelos, ventos, neblina, entre outros efeitos.",
  vampira: "Ela tem o poder de absorver a vitalidade e memória das pessoas que toca ou no caso dos mutantes os poderes e a memória, mas só temporariamente.",
  wolverine: "Wolverine é um dos mutantes mais importante e reconhecido da história dos X-Men.",
  noturno: "Ele é um mutante que nasceu com cauda, orelhas pontudas, mãos com três dedos e pés com dois dedos.",
  magneto: "Ele tem o poder de magnetismo, ou seja, controlar objetos de metal e criar campos magnéticos."
}

function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

for(const c of characters) {
  c.onmouseover = () => {
    changeCharacter(c);
    hoverCard(c);
  }
  c.onclick = scrollTop;
  c.ontouchstart = scrollTop;
}

function changeCharacter(character) {
  focusedCharacter.src = `./src/assets/card-${character.id}.png`;
  characterName.innerHTML = character.id.replace("-", " ");
  characterDescription.innerHTML = descriptions[character.id.replace("-", "")];
}

function hoverCard(character) {
  const selectedCharacter = document.querySelector(".selected");
  if(selectedCharacter != character) {
    selectedCharacter.classList.remove("selected");
    character.classList.add("selected");
  }
}