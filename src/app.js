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
    "steps-container flex items-center justify-center w-screen h-screen bg-slate-100"
  );

  const steps = [formStep1(), formStep2(), formStep3(), formStep4()];

  const wrapper = createContainer(
    "wrapper flex gap-16 max-w-[940px] w-full bg-white rounded-lg"
  );
  navigation = formNavigation(currentStep, updateStep);

  app.appendChild(stepsContainer);
  stepsContainer.appendChild(wrapper);
  if (navigation) {
    wrapper.appendChild(navigation);
  }

  const nextButton = createButton(
    "btn__next py-3 px-5 bg-indigo-900 font-semibold text-white rounded-md transition hover:bg-indigo-950",
    "Next step"
  );
  const previousButton = createButton(
    "btn__prev text-gray-600 font-semibold",
    "Go back"
  );
  const confirmButton = createButton(
    "btn__confirm py-3 px-5 bg-fuchsia-900 font-semibold text-white rounded-md transition hover:bg-fuchsia-950",
    "Confirm"
  );

  steps.forEach((step, index) => {
    step.style.display = "none";
    wrapper.appendChild(step);
    const buttonWrapper = createContainer("wrapper__btn flex justify-between");

    const stepPreviousButton = previousButton.cloneNode(true);
    stepPreviousButton.addEventListener("click", () => {
      if (currentStep > 1) {
        updateStep(currentStep - 1);
      }
    });
    buttonWrapper.appendChild(stepPreviousButton);

    if (index === steps.length - 1) {
      // V posledním kroku přidáme tlačítko "Confirm"
      const stepConfirmButton = confirmButton.cloneNode(true);
      stepConfirmButton.addEventListener("click", handleConfirmClick);
      buttonWrapper.appendChild(stepConfirmButton);
    } else {
      // V ostatních krocích přidáme tlačítko "Next step"
      const stepNextButton = nextButton.cloneNode(true);
      stepNextButton.addEventListener("click", () =>
        updateStep(currentStep + 1)
      );
      buttonWrapper.appendChild(stepNextButton);
    }

    step.appendChild(buttonWrapper);
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
        let buttonWrapper = stepComponent.querySelector(".wrapper__btn");
        if (!buttonWrapper) {
          buttonWrapper = createContainer("wrapper__btn flex justify-between");
          stepComponent.appendChild(buttonWrapper);
        }

        const existingButtons = buttonWrapper.querySelectorAll("button");
        existingButtons.forEach((btn) => btn.remove());

        // Add button "Go back" only if currentStep is not 1
        if (currentStep > 1) {
          const goBackButton = previousButton.cloneNode(true);
          goBackButton.addEventListener("click", () => {
            if (currentStep > 1) updateStep(currentStep - 1);
          });
          buttonWrapper.appendChild(goBackButton);
        }

        // According to current step add button "Next step" or "Confirm"
        if (index === steps.length - 1) {
          const confirmButtonNew = confirmButton.cloneNode(true);
          confirmButtonNew.addEventListener("click", handleConfirmClick);
          buttonWrapper.appendChild(confirmButtonNew);
        } else {
          const nextButtonNew = nextButton.cloneNode(true);
          nextButtonNew.addEventListener("click", () =>
            updateStep(currentStep + 1)
          );
          buttonWrapper.appendChild(nextButtonNew);
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
    dialog.innerHTML = `<p class="py-12 px-16 bg-gray-100 font-bold text-4xl">Sent</p>`;
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
