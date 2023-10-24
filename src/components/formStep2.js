import createContainer from "./createContainer"
import createTitleHeading from "./createTitleHeading";

const formStep2 = () => {
    const contentContainer = createContainer("container__content--plan");

    const heading = createTitleHeading("heading-class", "paragraph-class", "Select your plan", "You have the option of monthly or yearly billing.");

    contentContainer.appendChild(heading);

    return contentContainer;
} 

export default formStep2;