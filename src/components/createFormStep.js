import createContainer from "./createContainer";

// Universal component for step form
const createFormStep = (stepNumber, stepDescription, stepTitle) => {
  const stepContainer = createContainer(
    "flex justify-start items-center gap-4 cursor-pointer"
  );
  const stepWrapper = document.createElement("div");
  stepWrapper.className = "uppercase";

  const stepNum = document.createElement("div");
  stepNum.textContent = stepNumber;
  stepNum.className =
    "step__number border-2 border-white rounded-full w-12 h-12 flex justify-center items-center font-bold";

  const stepDesc = document.createElement("div");
  stepDesc.textContent = stepDescription;
  stepDesc.className = "text-sm text-gray-100";

  const stepName = document.createElement("div");
  stepName.textContent = stepTitle;
  stepName.className = "font-bold";

  stepWrapper.appendChild(stepDesc);
  stepWrapper.appendChild(stepName);
  stepContainer.appendChild(stepNum);
  stepContainer.appendChild(stepWrapper);

  return stepContainer;
};

export default createFormStep;
