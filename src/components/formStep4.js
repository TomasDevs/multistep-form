import createContainer from "./createContainer"
import createTitleHeading from "./createTitleHeading";

const formStep4 = () => {
    const contentContainer = createContainer("container__content--finish");

    const heading = createTitleHeading("heading-class", "paragraph-class", "Finish up", "Double-check everything looks OK before confirming.");

    contentContainer.appendChild(heading);

    return contentContainer;
} 

export default formStep4;