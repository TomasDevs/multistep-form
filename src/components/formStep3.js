import createContainer from "./createContainer"
import createTitleHeading from "./createTitleHeading";

const formStep3 = () => {
    const contentContainer = createContainer("container__content--add");
    contentContainer.style.display = "none";

    const heading = createTitleHeading("heading-class", "paragraph-class", "Pick add-ons", "Add-ons help enhance your gaming experience.");

    contentContainer.appendChild(heading);

    return contentContainer;
} 

export default formStep3;