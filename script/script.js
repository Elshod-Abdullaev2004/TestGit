const startButton = document.querySelector(".menu__button_exit");
const recordsButton = document.querySelector(".menu__button_records");
const optionButton = document.querySelector(".menu__button_option");
const exitButton = document.querySelector(".menu__button_exit");

exitButton.addEventListener("click", function () {
  window.close();
});

const allButtons = document.querySelectorAll(".main__menu_list-button");
const audioForButtons = new Audio("./music/audioForButtons.mp3");

// allButtons.addEventListener("mouseover", () => {
//   audioForButtons.play();
// });

let selectedButtonIndex = 0;
// Функция для выбора кнопки
function selectButton(index) {
  allButtons.forEach((allButton, i) => {
    allButton.classList.toggle("active", i === index); // Включить/выключить класс 'active'
  });
  selectedButtonIndex = index;
}

selectButton(selectedButtonIndex);

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "w": // Вверх
    case "ц":
    case "ArrowUp":
      selectedButtonIndex = Math.max(0, selectedButtonIndex - 1); // Выбрать предыдущую кнопку
      selectButton(selectedButtonIndex);
      event.preventDefault();

      break;
    case "s": // Вниз
    case "ы":
    case "ArrowDown":
      selectedButtonIndex = Math.min(
        allButtons.length - 1,
        selectedButtonIndex + 1
      ); // Выбрать следующую кнопку
      selectButton(selectedButtonIndex);
      event.preventDefault();

      break;
    case "Enter": // Enter
      activateButton(selectedButtonIndex); // Активировать выбранную кнопку
      break;
  }
});

function activateButton(index) {
  const allButton = allButtons[index];
  // ... (логика активации кнопки)
  if (index === 3) {
    window.close();
  }
  console.log(`Вы активировали кнопку "${allButton.textContent}".`); // Вывод приветствия
}

console.log("dslfkj");
