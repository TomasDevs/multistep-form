import createContainer from "./createContainer";
import createInput from "./createInput";
import createLabel from "./createLabel";

const createInputWithLabel = (formElements) => {
  const formContainer = createContainer("container__form");

  for (const element of formElements) {
    const formField = createContainer("form-field");
    const label = createLabel("text-sm", element.labelText);

    // Přidání atributů k inputu
    const input = createInput(
      "input border-2 rounded",
      element.inputType,
      element.inputPlaceholder
    );
    input.name = element.name;
    if (element.onChange) {
      input.addEventListener("change", element.onChange);
    }

    formField.appendChild(label);
    formField.appendChild(input);
    formContainer.appendChild(formField);
  }

  return formContainer;
};

export default createInputWithLabel;
