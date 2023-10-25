import formNavigation from "./components/formNavigation";
import createContainer from "./components/createContainer";
import createButton from "./components/createButton";
import { initializeToggleManager } from './components/toggleManager';

let currentStep = 1;
export { currentStep };

const app = async () => {
    const app = document.getElementById("app");
    const stepsContainer = createContainer("steps-container");

    const loadStep = async () => {
        try {
            const moduleName = `./components/formStep${currentStep}`
            const module = await import(moduleName);

            const step = module.default();

            // Hide current element (if exist)
            const currentStepContent = document.querySelector('.container__content');
            if (currentStepContent) {
                currentStepContent.style.display = 'none';
            }
            const wrapper = createContainer("wrapper flex");
            const menu = formNavigation();
        
            app.appendChild(stepsContainer);
            stepsContainer.appendChild(wrapper);
            wrapper.innerHTML = "";
            wrapper.appendChild(menu);
            wrapper.appendChild(step);

            const nextButton = createButton("btn__next", "Next");
            nextButton.addEventListener("click", () => {
                if (currentStep < 4) {
                    stepsContainer.innerHTML = "";
                    currentStep++;
                    loadStep();
                }
            });

            const previousButton = createButton("btn__prev", "Go back");
            previousButton.addEventListener("click", () => {
                if (currentStep > 1) {
                    stepsContainer.innerHTML = "";
                    currentStep--;
                    loadStep();
                }
            });

            step.appendChild(previousButton);
            
            if (currentStep <= 4) {
               step.appendChild(nextButton);
            }

            if (currentStep === 4) {
                nextButton.textContent = "Confirm";
            }

            // Display new element
            currentStepContent.style.display = 'block';

            // Call export funciton for toggle
            initializeToggleManager();

        } catch (error) {
            console.error(`Error loading step ${currentStep}`, error)
        }
    };

    loadStep();
};  

export default app;