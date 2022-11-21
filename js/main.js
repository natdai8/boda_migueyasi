const isLoggedIn = localStorage.getItem("isLoggedIn");
if (!isLoggedIn) window.location.href = "html/login_boda.html";

let isToggled = false;
// let previousPath = null;

const handleRouting = () => {
    const active = " active";
    const fontWhite = " font-white-active";
    const linkList = document.getElementsByClassName("nav-link");

    const { pathname } = window.location;

    switch (pathname) {
        case "/index.html":
            linkList[0].className += active;
            break;
        case "/html/venue_boda.html":
            // linkList[1].className += active;
            linkList[1].className += fontWhite;
            break;
        case "/html/how_boda.html":
            linkList[2].className += active;
            break;
        case "/html/respond_boda.html":
            linkList[3].className += active;
            break;
        case "/html/brussels_boda.html":
            linkList[4].className += active;
            break;
        case "/html/gallery_boda.html":
            linkList[5].className += active;
            break;
        default:
            break;
    }
};

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
    setTimeout(() => {
        document.getElementById("toggle-collapse-btn").addEventListener("click", handleNavbarToggle);
        handleRouting();
    }, 500);

         });