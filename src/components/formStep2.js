import globalState from "./globalState.js";
import createContainer from "./createContainer";
import createTitleHeading from "./createTitleHeading";
import createToggleOptions from "./createToggleOptions";

const formStep2 = () => {
  const contentContainer = createContainer("container__content--plan p-10");
  contentContainer.style.display = "none";

  const heading = createTitleHeading(
    "heading-class text-3xl font-bold text-indigo-900 mb-2",
    "paragraph-class  text-gray-600 mb-4",
    "Select your plan",
    "You have the option of monthly or yearly billing."
  );

  const toggleElements = [
    {
      className: "toggle-option cursor-pointer z-10",
      title: "Basic",
      description: "$10/mo",
    },
    {
      className: "toggle-option cursor-pointer z-10",
      title: "Advanced",
      description: "$12/mo",
    },
    {
      className: "toggle-option cursor-pointer z-10",
      title: "Pro",
      description: "$16/mo",
    },
  ];

  const updatePlanSelection = (selectedPlan) => {
    globalState.planSelection = selectedPlan;
  };

  const formContainer = createContainer("container__toggle");
  toggleElements.forEach((element) => {
    const card = createToggleOptions(
      element.className,
      element.title,
      element.description,
      updatePlanSelection
    );
    formContainer.appendChild(card);
  });

  contentContainer.appendChild(heading);
  contentContainer.appendChild(formContainer);

  return contentContainer;
};

export default formStep2;
