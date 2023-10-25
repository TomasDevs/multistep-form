import createContainer from "./createContainer"
import createTitleHeading from "./createTitleHeading";
import createToggleOptions from "./createToggleOptions";
import { initializeToggleManager } from './toggleManager';

const formStep2 = () => {
    const contentContainer = createContainer("container__content--plan");

    const heading = createTitleHeading("heading-class", "paragraph-class", "Select your plan", "You have the option of monthly or yearly billing.");

    const toggleElements = [
        { className: "toggle-option cursor-pointer z-10", title: "Basic", description: "$10/mo" },
        { className: "toggle-option cursor-pointer z-10", title: "Advanced", description: "$12/mo" },
        { className: "toggle-option cursor-pointer z-10", title: "Pro", description: "$16/mo" }
    ];
    
    const formContainer = createContainer("container__toggle");
    toggleElements.forEach(element => {
        const card = createToggleOptions(element.className, element.title, element.description);
        formContainer.appendChild(card);
    });
    
    // Select one option and add/remove class active
    // document.addEventListener("DOMContentLoaded", () => {
    //     const toggleOptions = document.querySelectorAll(".toggle-option");
        
    //     // Wait for elements to load
    //     for (const option of toggleOptions) {
    //         option.addEventListener("click", () => {
    //             console.log("click");
    
    //             toggleOptions.forEach(opt => {
    //                 if (opt !== option) {
    //                     opt.classList.remove("toggle-active");
    //                     console.log("remove");
    //                 }
    //             });
    //             option.classList.add("toggle-active");
    //             console.log("add");
    //         });
    //     }
    // });
    
    contentContainer.appendChild(heading);
    contentContainer.appendChild(formContainer);
    
    return contentContainer;
} 


export default formStep2;