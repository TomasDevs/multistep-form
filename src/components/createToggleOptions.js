import createContainer from "./createContainer"

const createToggleOptions = (className, title) => {
    const colToggle = createContainer("col__toggle");
    const card = document.createElement("div");
    card.className = className;
    card.textContent = title;

    colToggle.appendChild(card);

    return colToggle;
}

export default createToggleOptions;