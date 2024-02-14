import createContainer from "./createContainer";

const createMultiSelectOptions = (className, title, description, onClick) => {
  const colToggle = createContainer("col__multi-select");
  const card = document.createElement("div");
  card.className = `${className} selectable-card`;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox__option";
  // Skryjeme checkbox, protože klikání bude řízeno celým card
  checkbox.style.opacity = "0";
  checkbox.style.position = "absolute";
  checkbox.style.left = "-9999px";

  const titleElement = document.createElement("span");
  titleElement.className = "title__option";
  titleElement.textContent = title;

  const descriptionElement = document.createElement("span");
  descriptionElement.className = "description__option";
  descriptionElement.textContent = description;

  // Adding a click event listener that updates the global state
  checkbox.addEventListener("change", (event) => {
    onClick(title, event.target.checked);
  });

  // New event listener for click on card
  card.addEventListener("click", () => {
    checkbox.checked = !checkbox.checked;
    if (checkbox.checked) {
      card.classList.add("selected-option");
    } else {
      card.classList.remove("selected-option");
    }
    onClick(title, checkbox.checked);
  });

  if (checkbox.checked) {
    card.classList.add("selected-option");
  } else {
    card.classList.remove("selected-option");
  }

  card.appendChild(checkbox);
  card.appendChild(titleElement);
  card.appendChild(descriptionElement);
  colToggle.appendChild(card);

  return colToggle;
};

export default createMultiSelectOptions;
