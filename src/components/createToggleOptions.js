import createContainer from "./createContainer";

const createToggleOptions = (className, title, description, onClick) => {
  const colToggle = createContainer("col__toggle");
  const card = document.createElement("div");
  card.className = className;

  const titleElement = document.createElement("span");
  titleElement.className = "title__option font-bold";
  titleElement.textContent = title;

  const descriptionElement = document.createElement("span");
  descriptionElement.className = "description__option text-gray-600";
  descriptionElement.textContent = description;

  // Adding a click event listener that updates the global state
  card.addEventListener("click", () => onClick(title));

  card.appendChild(titleElement);
  card.appendChild(descriptionElement);
  colToggle.appendChild(card);

  return colToggle;
};

export default createToggleOptions;
