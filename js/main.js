const isLoggedIn = localStorage.getItem("isLoggedIn");
if (!isLoggedIn) window.location.href = "html/login_boda.html";

let isToggled = false;

const handleNavbarToggle = () => {
    const collapse = document.getElementById("nav-collapse");
    const button = document.getElementById("toggle-collapse-btn");

    if (isToggled) {
        isToggled = false;
        button.className = button.className.replace(" toggle-on", "");
        collapse.className += " collapse-action";
        return;
    }

    isToggled = true;
    button.className += " toggle-on";
    collapse.className = collapse.className.replace(" collapse-action", "");
};

window.addEventListener("load", () => {
    document.getElementById("toggle-collapse-btn").addEventListener("click", handleNavbarToggle);
});