const createInput = (className, type, placeholder) => {
    const input = document.createElement("input")
    input.className = className;
    input.type = type;
    input.placeholder = placeholder;
    return input;
}

export default createInput;