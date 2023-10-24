import createContainer from "./createContainer"
import createTitleHeading from "./createTitleHeading";
import createToggleOptions from "./createToggleOptions";

const formStep2 = () => {
    const contentContainer = createContainer("container__content--plan");

    const heading = createTitleHeading("heading-class", "paragraph-class", "Select your plan", "You have the option of monthly or yearly billing.");

    const formContainer = createContainer("container__toggle");

    const toggleElements = [
        { className: "option1", title: "Basic" },
        { className: "option3", title: "Advanced" },
        { className: "option3", title: "Pro" }
    ];

    const rowToggle = createContainer("row__toggle"); 
    toggleElements.forEach(element => {
        const card = createToggleOptions(element.className, element.title);
        rowToggle.appendChild(card);
    });

    contentContainer.appendChild(heading);
    contentContainer.appendChild(rowToggle);

    return contentContainer;
} 

export default formStep2;