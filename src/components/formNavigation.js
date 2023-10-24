import createContainer from "./createContainer";
import createFormStep from "./createFormStep";
import {currentStep} from '../app';

// Main navigation for all steps
const formNavigation = () => {
    const containerNav = createContainer("container__step");

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

    containerNav.appendChild(stepOne)
    containerNav.appendChild(stepTwo)
    containerNav.appendChild(stepThree)
    containerNav.appendChild(stepFour)

    return containerNav;
}

export default formNavigation;