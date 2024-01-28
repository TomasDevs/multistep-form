import createContainer from "./createContainer";

const createMultiSelectOptions = (className, title, description, onClick) => {
  const colToggle = createContainer("col__multi-select");
  const card = document.createElement("div");
  card.className = className;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox__option";

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

  card.appendChild(checkbox);
  card.appendChild(titleElement);
  card.appendChild(descriptionElement);
  colToggle.appendChild(card);

  return colToggle;
};

export default createMultiSelectOptions;
