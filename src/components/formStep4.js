import globalState from "./globalState.js";
import createContainer from "./createContainer";
import createTitleHeading from "./createTitleHeading";

const formStep4 = () => {
  let contentContainer = document.querySelector(".container__content--summary");
  if (!contentContainer) {
    contentContainer = createContainer("container__content--summary p-10");
  } else {
    contentContainer.innerHTML = "";
  }

  const heading = createTitleHeading(
    "heading-class text-3xl font-bold text-indigo-900 mb-2",
    "paragraph-class text-gray-600 mb-4",
    "Finish up",
    "Double-check everything looks OK before confirming."
  );

  const userData = globalState.userData;
  const planSelection = globalState.planSelection;
  const optionSelections = globalState.optionSelections;

  const userInfo = document.createElement("div");
  userInfo.innerHTML = `
    <p>Name: ${userData.name}</p>
    <p>Email: ${userData.email || ""}</p>
    <p>Phone: ${userData.phone || ""}</p>
  `;
  const planInfo = document.createElement("p");
  planInfo.textContent = `Selected Plan: ${planSelection || "Not selected"}`;

  const optionsInfo = document.createElement("p");
  optionsInfo.textContent = `Selected Options: ${
    optionSelections.length > 0 ? optionSelections.join(", ") : "None"
  }`;

  contentContainer.appendChild(heading);
  contentContainer.appendChild(userInfo);
  contentContainer.appendChild(planInfo);
  contentContainer.appendChild(optionsInfo);

  return contentContainer;
};

export default formStep4;
