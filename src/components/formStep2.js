import createContainer from "./createContainer"
import createTitleHeading from "./createTitleHeading";
import createButton from "./createButton";

const formStep2 = (display) => {
    const contentContainerPlan = createContainer("container__content--plan");

    const heading = createTitleHeading("heading-class", "paragraph-class", "Select your plan", "You have the option of monthly or yearly billing.");

    contentContainerPlan.appendChild(heading);

    return contentContainerPlan;
} 

export default formStep2;