import globalState from "./components/globalState.js";
import createContainer from "./components/createContainer";
import formNavigation from "./components/formNavigation";
import createButton from "./components/createButton";
import formStep1 from "./components/formStep1";
import formStep2 from "./components/formStep2";
import formStep3 from "./components/formStep3";
import formStep4 from "./components/formStep4";
import { initializeToggleManager } from "./components/toggleManager";

let currentStep = 1;
let navigation;

const app = () => {
  const app = document.getElementById("app");
  const stepsContainer = createContainer(
    "steps-container flex items-center justify-center"
  );

  const steps = [formStep1(), formStep2(), formStep3(), formStep4()];

  const wrapper = createContainer("wrapper flex");
  navigation = formNavigation(currentStep, updateStep);

  app.appendChild(stepsContainer);
  stepsContainer.appendChild(wrapper);
  if (navigation) {
    wrapper.appendChild(navigation);
  }

  const nextButton = createButton("btn__next", "Next");
  const previousButton = createButton("btn__prev", "Go back");
  const confirmButton = createButton("btn__confirm", "Confirm");

  steps.forEach((step, index) => {
    step.style.display = "none";
    wrapper.appendChild(step);

    const stepPreviousButton = previousButton.cloneNode(true);
    stepPreviousButton.addEventListener("click", () => {
      if (currentStep > 1) {
        updateStep(currentStep - 1);
      }
    });

    if (index === steps.length - 1) {
      const stepConfirmButton = confirmButton.cloneNode(true);
      stepConfirmButton.addEventListener("click", handleConfirmClick);
      step.appendChild(stepPreviousButton);
      step.appendChild(stepConfirmButton);
    } else {
      const stepNextButton = nextButton.cloneNode(true);
      stepNextButton.addEventListener("click", () =>
        updateStep(currentStep + 1)
      );
      step.appendChild(stepPreviousButton);
      step.appendChild(stepNextButton);
    }
  });

  updateStep(1);

  initializeToggleManager();

  // Update class "active" in navigation
  function updateStep(step) {
    currentStep = step;
    navigation.innerHTML = ""; // clean navigation;
    navigation.appendChild(formNavigation(currentStep, updateStep));

    refreshStep4Content();

    steps.forEach((stepComponent, index) => {
      const isVisible = index === currentStep - 1;
      stepComponent.style.display = isVisible ? "block" : "none";

      if (isVisible) {
        const buttons = stepComponent.querySelectorAll(
          ".btn__prev, .btn__next, .btn__confirm"
        );
        buttons.forEach((button) => button.remove());

        const goBackButton = previousButton.cloneNode(true);
        goBackButton.addEventListener("click", () => {
          if (currentStep > 1) updateStep(currentStep - 1);
        });
        stepComponent.appendChild(goBackButton);

        // If it is the last step, add "Confirm", otherwise "Next"
        if (currentStep === 4) {
          const confirmButtonNew = confirmButton.cloneNode(true);
          confirmButtonNew.addEventListener("click", handleConfirmClick);
          stepComponent.appendChild(confirmButtonNew);
        } else {
          const nextButtonNew = nextButton.cloneNode(true);
          nextButtonNew.addEventListener("click", () => {
            if (currentStep < steps.length) updateStep(currentStep + 1);
          });
          stepComponent.appendChild(nextButtonNew);
        }
      }
    });
  }

  function refreshStep4Content() {
    const updatedContentStep4 = formStep4();

    if (!updatedContentStep4.parentNode) {
      const stepsContainer = document.querySelector(".steps-container");
      stepsContainer.appendChild(updatedContentStep4);
    }

    updatedContentStep4.style.display = "block";
  }

  function handleConfirmClick() {
    // Show a confirmation modal window
    const dialog = document.createElement("dialog");
    dialog.textContent = "Sent";
    document.body.appendChild(dialog);
    dialog.showModal();

    dialog.addEventListener("click", () => {
      dialog.close();
      updateStep(1);
      resetForm();
    });

    setTimeout(() => {
      dialog.close();
      updateStep(1);
      resetForm();
    }, 2000);
  }

  const resetForm = () => {
    // Reset globalState
    globalState.userData = {};
    globalState.planSelection = "";
    globalState.optionSelections = [];

    // Reset the inputs in the form, if they exist
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));
  };
};

export default app;
