import createContainer from "./components/createContainer";
import formNavigation from "./components/formNavigation";
import createButton from "./components/createButton";
import formStep1 from "./components/formStep1";
import formStep2 from "./components/formStep2";
import formStep3 from "./components/formStep3";
import formStep4 from "./components/formStep4";
import { initializeToggleManager } from './components/toggleManager';

let currentStep = 1;
let navigation;

const app = () => {
    const app = document.getElementById("app");
    const stepsContainer = createContainer("steps-container");
    
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

    for (let i = 0; i < steps.length; i++) {
        const step = steps[i];
        step.style.display = "none";
        wrapper.appendChild(step);

        if (i === 0) {
            step.style.display = "block";
        }

        const stepPreviousButton = previousButton.cloneNode(true);
        stepPreviousButton.addEventListener("click", () => {
            if (currentStep > 1) {
                steps[currentStep - 1].style.display = "none"; // Hide current step
                currentStep--;
                steps[currentStep - 1].style.display = "block"; // Show previous step
                updateStep(currentStep);
            }
        });
        step.appendChild(stepPreviousButton);

        const stepNextButton = nextButton.cloneNode(true);
        stepNextButton.addEventListener("click", () => {
            if (currentStep < 4) {
                steps[currentStep - 1].style.display = "none"; // Hide current step
                currentStep++;
                steps[currentStep - 1].style.display = "block"; // Show next step
                updateStep(currentStep);
            }
        });

        step.appendChild(stepNextButton);
    }

    initializeToggleManager();

    // Update class "active" in navigation
    function updateStep(step) {
        currentStep = step;
        navigation.innerHTML = ''; // clean navigation;
        navigation.appendChild(formNavigation(currentStep, updateStep));

        steps.forEach((stepComponent, index) => {
            if (index === currentStep - 1) {
                stepComponent.style.display = "block";
            } else {
                stepComponent.style.display = "none";
            }
        });
    }
};

export default app;