import createContainer from "./createContainer";
import createFormStep from "./createFormStep";

// Main navigation for all steps
const formNavigation = (currentStep, updateStep) => {
  const contentStep1 = document.querySelector(".container__content--info");
  const contentStep2 = document.querySelector(".container__content--plan");
  const contentStep3 = document.querySelector(".container__content--add");
  const contentStep4 = document.querySelector(".container__content--summary");

  const containerNav = createContainer(
    "container__step flex flex-col justify-start gap-6 p-10 bg-fuchsia-950 text-white rounded-lg"
  );
  const stepOne = createFormStep("1", "Step 1", "Your Info");
  const stepTwo = createFormStep("2", "Step 2", "Select Plan");
  const stepThree = createFormStep("3", "Step 3", "Add-ons");
  const stepFour = createFormStep("4", "Step 4", "Summary");

  if (currentStep === 1) {
    stepOne.classList.add("active");
  } else if (currentStep === 2) {
    stepTwo.classList.add("active");
  } else if (currentStep === 3) {
    stepThree.classList.add("active");
  } else if (currentStep === 4) {
    stepFour.classList.add("active");
  }

  containerNav.appendChild(stepOne);
  containerNav.appendChild(stepTwo);
  containerNav.appendChild(stepThree);
  containerNav.appendChild(stepFour);

  // Add function for every step
  stepOne.addEventListener("click", () => {
    updateStep(1);
    contentStep1.style.display = "block";
    contentStep2.style.display = "none";
    contentStep3.style.display = "none";
    contentStep4.style.display = "none";
  });
  stepTwo.addEventListener("click", () => {
    updateStep(2);
    contentStep1.style.display = "none";
    contentStep2.style.display = "block";
    contentStep3.style.display = "none";
    contentStep4.style.display = "none";
  });
  stepThree.addEventListener("click", () => {
    updateStep(3);
    contentStep1.style.display = "none";
    contentStep2.style.display = "none";
    contentStep3.style.display = "block";
    contentStep4.style.display = "none";
  });
  stepFour.addEventListener("click", () => {
    updateStep(4);
    contentStep1.style.display = "none";
    contentStep2.style.display = "none";
    contentStep3.style.display = "none";
    contentStep4.style.display = "block";
  });

  return containerNav;
};

export default formNavigation;
