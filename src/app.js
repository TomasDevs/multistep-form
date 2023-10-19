import formNavigation from "./components/formNavigation";
import createContainer from "./components/createContainer";
import formStep1 from "./components/formStep1";

const app = async () => {
    const app = document.getElementById("app");
    
    const wrapper = createContainer("wrapper flex");
    const menu = formNavigation();

    const content = formStep1();

    app.appendChild(wrapper);
    wrapper.appendChild(menu);
    wrapper.appendChild(content);
;}  

export default app;