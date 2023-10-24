import createContainer from "./createContainer"
import createTitleHeading from "./createTitleHeading";

const formStep2 = () => {
    const contentContainerPlan = createContainer("container__content--plan");

    const heading = createTitleHeading("heading-class", "paragraph-class", "Select your plan", "You have the option of monthly or yearly billing.");

    contentContainerPlan.appendChild(heading);

    return contentContainerPlan;
} 

export default formStep2;