const createButton = (className, textContent) => {
    const buttton = document.createElement("button");
    buttton.className = className;
    buttton.textContent = textContent;
    return buttton;
}

export default createButton;