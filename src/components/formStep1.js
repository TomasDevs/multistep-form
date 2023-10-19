import createContainer from "./createContainer"
import createTitleHeading from "./createTitleHeading";
import createInputWithLabel from "./createInputWithLabel";
import createButton from "./createButton";

const formStep1 = () => {
    const contentContainer = createContainer("container__content--info");

    const heading = createTitleHeading("heading-class", "paragraph-class", "Personal info", "Please provide your name, email address, and phone number.");
      
    // Array from createInputWithLabel
    const formElements = [
        { labelText: "Name", inputType: "text", inputPlaceholder: "e.g. John Doe" },
        { labelText: "Email address", inputType: "email", inputPlaceholder: "e.g. johndoe@lorem.com" },
        { labelText: "Phone number", inputType: "number", inputPlaceholder: "e.g. +1 234 567 890" }
    ];

    const formField = createInputWithLabel(formElements);

    const button = createButton("btn__next", "Next step");

    contentContainer.appendChild(heading);
    contentContainer.appendChild(formField);
    contentContainer.appendChild(button);

    button.addEventListener("click", () => {
    })

    return contentContainer;
}

export default formStep1;