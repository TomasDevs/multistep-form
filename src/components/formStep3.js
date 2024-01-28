import globalState from "./globalState.js";
import createContainer from "./createContainer";
import createTitleHeading from "./createTitleHeading";
import createMultiSelectOptions from "./createMultiSelectOptions";

const formStep3 = () => {
  const contentContainer = createContainer("container__content--add");
  contentContainer.style.display = "none";

  const heading = createTitleHeading(
    "heading-class",
    "paragraph-class",
    "Pick add-ons",
    "Add-ons help enhance your gaming experience."
  );

  const multiSelectElements = [
    {
      className: "multi-select-option cursor-pointer z-10",
      title: "Option 1",
      description: "Description 1",
    },
    {
      className: "multi-select-option cursor-pointer z-10",
      title: "Option 2",
      description: "Description 2",
    },
    {
      className: "multi-select-option cursor-pointer z-10",
      title: "Option 3",
      description: "Description 3",
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
