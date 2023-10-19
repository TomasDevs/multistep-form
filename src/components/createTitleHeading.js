import createContainer from "./createContainer"

const createTitleHeading = (headingClassName, paragraphClassName, headingText, paragraphText) => {
    const titleHeading = createContainer("heading__name");

    const heading = document.createElement("h1");
    const desc = document.createElement("p");
    
    heading.className = headingClassName;
    heading.textContent = headingText;
  
    desc.className = paragraphClassName;
    desc.textContent = paragraphText;
  
    titleHeading.appendChild(heading);
    titleHeading.appendChild(desc);
  
    return titleHeading;
}

export default createTitleHeading;