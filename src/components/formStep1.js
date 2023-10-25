import createContainer from "./createContainer"
import createTitleHeading from "./createTitleHeading";
import createInputWithLabel from "./createInputWithLabel";

const formStep1 = () => {
    const contentContainer = createContainer("container__content");

    const heading = createTitleHeading("heading-class", "paragraph-class", "Personal info", "Please provide your name, email address, and phone number.");
      
    // Array from createInputWithLabel
    const formElements = [
        { labelText: "Name", inputType: "text", inputPlaceholder: "e.g. John Doe" },
        { labelText: "Email address", inputType: "email", inputPlaceholder: "e.g. johndoe@lorem.com" },
        { labelText: "Phone number", inputType: "number", inputPlaceholder: "e.g. +1 234 567 890" }
    ];

    const formField = createInputWithLabel(formElements);

    // Vytvořte globální objekt pro uchování hodnot vyplněných polí
    const formData = {};

    // ...

    // V kroku 1, při načítání formuláře, zkontrolujte, zda existují uložené hodnoty
    if (formData.name) {
    // Naplňte pole s názvem "Name" uloženou hodnotou
    const nameInput = document.querySelector('[name="Name"]');
    if (nameInput) {
        nameInput.value = formData.name;
    }
    }

    if (formData.email) {
    // Naplňte pole s názvem "Email address" uloženou hodnotou
    const emailInput = document.querySelector('[name="Email address"]');
    if (emailInput) {
        emailInput.value = formData.email;
    }
    }

    if (formData.phoneNumber) {
    // Naplňte pole s názvem "Phone number" uloženou hodnotou
    const phoneNumberInput = document.querySelector('[name="Phone number"]');
    if (phoneNumberInput) {
        phoneNumberInput.value = formData.phoneNumber;
    }
    }

    contentContainer.appendChild(heading);
    contentContainer.appendChild(formField);

    return contentContainer;
}

export default formStep1;