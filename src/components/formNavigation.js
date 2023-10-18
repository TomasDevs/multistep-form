import createFormStep from "./createFormStep";

// Main navigation for all steps
const formNavigation = () => {
    const containerNav = document.createElement("div");
    containerNav.className = "container";

    const stepOne = createFormStep("1", "Step 1", "Your Info");
    const stepTwo = createFormStep("2", "Step 2", "Select Plan");
    const stepThree = createFormStep("3", "Step 3", "Add-ons");
    const stepFour = createFormStep("4", "Step 4", "Summary");


    containerNav.appendChild(stepOne)
    containerNav.appendChild(stepTwo)
    containerNav.appendChild(stepThree)
    containerNav.appendChild(stepFour)

    return containerNav;
}

export default formNavigation;