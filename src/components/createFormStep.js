// universal component for step form
const createFormStep = (stepNumber, stepDescription, stepTitle) => {
    const stepContainer = document.createElement("div");
    stepContainer.className = "flex";

    const stepNum = document.createElement("p");
    stepNum.textContent = stepNumber;

    const stepDesc = document.createElement("div");
    stepDesc.textContent = stepDescription;

    const stepName = document.createElement("div");
    stepName.textContent = stepTitle;
    stepName.className = "font-bold";

    stepContainer.appendChild(stepNum);
    stepContainer.appendChild(stepDesc);
    stepContainer.appendChild(stepName);

    return stepContainer;
} 

export default createFormStep;