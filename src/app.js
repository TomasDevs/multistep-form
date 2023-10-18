import formNavigation from "./components/formNavigation";

const app = async () => {
    const app = document.getElementById("app");

    const menu = formNavigation();
    app.appendChild(menu);
;}  

export default app;