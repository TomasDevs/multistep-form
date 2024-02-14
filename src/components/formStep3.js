import globalState from "./globalState.js";
import createContainer from "./createContainer";
import createTitleHeading from "./createTitleHeading";
import createMultiSelectOptions from "./createMultiSelectOptions";

const formStep3 = () => {
  const contentContainer = createContainer("container__content--add p-10");
  contentContainer.style.display = "none";

  const heading = createTitleHeading(
    "heading-class text-3xl font-bold text-indigo-900 mb-2",
    "paragraph-class text-gray-600 mb-4",
    "Pick add-ons",
    "Add-ons help enhance your gaming experience."
  );

  const multiSelectElements = [
    {
      className:
        "multi-select-option flex flex-col py-2 px-5 mb-5 border-2 rounded cursor-pointer z-10",
      title: "Online service",
      description: "Access to mutltiplayer games",
    },
    {
      className:
        "multi-select-option flex flex-col py-2 px-5 mb-5 border-2 rounded cursor-pointer z-10",
      title: "Large storage",
      description: "Extra 1TB storage",
    },
    {
      className:
        "multi-select-option flex flex-col py-2 px-5 mb-5 border-2 rounded cursor-pointer z-10",
      title: "Customizable profile",
      description: "Custom there your profile",
    },
  ];

  const updateOptionSelections = (selectedOption, isChecked) => {
    if (isChecked) {
      // Add an option to the field if not already added
      if (!globalState.optionSelections.includes(selectedOption)) {
        globalState.optionSelections.push(selectedOption);
      }
    } else {
      // Remove the option from the field if unchecked
      globalState.optionSelections = globalState.optionSelections.filter(
        (option) => option !== selectedOption
      );
    }
  };

  const formContainer = createContainer("container__multi-select");
  multiSelectElements.forEach((element) => {
    const card = createMultiSelectOptions(
      element.className,
      element.title,
      element.description,
      updateOptionSelections
    );
    formContainer.appendChild(card);
  });

  contentContainer.appendChild(heading);
  contentContainer.appendChild(formContainer);

  return contentContainer;
};

export default formStep3;
