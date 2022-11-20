const isLoggedIn = localStorage.getItem("isLoggedIn");
if (!isLoggedIn) window.location.href = "html/login_boda.html";

let isToggled = false;

const handleNavbarToggle = () => {
    const collapse = document.getElementById("nav-collapse");
    const navbar = document.getElementById("navbar-wrapper");
    const button = document.getElementById("toggle-collapse-btn");

    if (isToggled) {
        isToggled = false;
        button.className = button.className.replace(" toggle-on", "");
        navbar.className = navbar.className.replace(" navbar-solid", "");
        collapse.className = collapse.className.replace(" navbar-solid", "");
        collapse.className += " collapse-action";
        return;
    }

    isToggled = true;
    button.className += " toggle-on";
    navbar.className += " navbar-solid";
    collapse.className = collapse.className.replace(" collapse-action", "");
    collapse.className += " navbar-solid";
};

window.addEventListener("load", () => {
    document.getElementById("toggle-collapse-btn").addEventListener("click", handleNavbarToggle);
});