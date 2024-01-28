import globalState from "./globalState.js";
import createContainer from "./createContainer";
import createTitleHeading from "./createTitleHeading";
import createInputWithLabel from "./createInputWithLabel";

const formStep1 = () => {
  const contentContainer = createContainer("container__content--info");
  contentContainer.style.display = "block";

  const heading = createTitleHeading(
    "heading-class",
    "paragraph-class",
    "Personal info",
    "Please provide your name, email address, and phone number."
  );

  // Global status update
  const updateGlobalState = (event) => {
    const { name, value } = event.target;
    globalState.userData[name] = value;
  };

  // Array from createInputWithLabel
  const formElements = [
    {
      name: "name",
      labelText: "Name",
      inputType: "text",
      inputPlaceholder: "e.g. John Doe",
      onChange: updateGlobalState, // assigning a handler for the event
    },
    {
      name: "email",
      labelText: "Email address",
      inputType: "email",
      inputPlaceholder: "e.g. johndoe@lorem.com",
      onChange: updateGlobalState,
    },
    {
      name: "phone",
      labelText: "Phone number",
      inputType: "number",
      inputPlaceholder: "e.g. +1 234 567 890",
      onChange: updateGlobalState,
    },
  ];

  const formField = createInputWithLabel(formElements);

  contentContainer.appendChild(heading);
  contentContainer.appendChild(formField);

  return contentContainer;
};

export default formStep1;
