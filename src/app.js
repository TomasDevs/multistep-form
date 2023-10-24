import formNavigation from "./components/formNavigation";
import createContainer from "./components/createContainer";
import createButton from "./components/createButton";


const app = async () => {
    const app = document.getElementById("app");
    const stepsContainer = createContainer("steps-container");

    const loadStep = async (stepNumber) => {
        try {
            const moduleName = `./components/formStep${stepNumber}`
            const module = await import(moduleName);

            const step = module.default();
     

            const wrapper = createContainer("wrapper flex");
            const menu = formNavigation();
        
            app.appendChild(stepsContainer);
            stepsContainer.appendChild(wrapper);
            wrapper.innerHTML = "";
            wrapper.appendChild(menu);
            wrapper.appendChild(step);
            const nextButton = createButton("btn__next", "Next");
            nextButton.addEventListener("click", () => {
                loadStep(stepNumber + 1);
            });

            const previousButton = createButton("btn__next", "Go back");
            previousButton.addEventListener("click", () => {
                loadStep(stepNumber - 1);
            });

            stepsContainer.appendChild(nextButton);
            stepsContainer.appendChild(previousButton);


        } catch (error) {
            console.error(`Error loading step ${stepNumber}`, error)
        }
    };

    loadStep(1);
};  

export default app;