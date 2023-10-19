const createLabel = (className, textContent) => {
    const label = document.createElement("label")
    label.className = className;
    label.textContent = textContent;
    return label;
}

export default createLabel;