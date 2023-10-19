import createContainer from "./createContainer"
import createInput from "./createInput";
import createLabel from "./createLabel";

const createInputWithLabel = (formElements) => {
    const formContainer = createContainer("container__form");

    for (const element of formElements) {
        const formField = createContainer("form-field");
        const label = createLabel("text-sm", element.labelText);
        const input = createInput("input border-2 rounded", element.inputType, element.inputPlaceholder)

        formField.appendChild(label);
        formField.appendChild(input);
        formContainer.appendChild(formField);
    }

    return formContainer;
}

export default createInputWithLabel;