let users = [];
const url = 'https://asdfdsad.herokuapp.com/usuarios';

function create_alert(element, s){
    if (element) return;
    const al = document.createElement('div'); 
    al.id = "form-alert"
    al.innerHTML = s;
    al.className = "alert alert-danger";
    al.style.textAlign = "center";
    document.getElementById('wrapper').appendChild(al);
    return;
}

$(window).on("load",  async () => {

    // try {
    //     users = (await axios.get(url)).data;          
    // } catch (error) {
    //     console.log(error)
    // }

    $('#login').on("click", () => {

        const element = document.getElementById('form-alert');
        const p = document.getElementById('pwd').value;

        if (p === "" || p === null) {
            const s = "campo(s) incompletos";
            if (element) document.getElementById('wrapper').removeChild(element);
            //create_alert(null, s);
            return;
        }
        // => (usuario.username === u) &&
        // const found = users.find( usuario => (usuario.password === p));

        // if (!found){
        //     const s = "datos incorrectos";
        //     if (element) document.getElementById('wrapper').removeChild(element);
        //    // create_alert(null, s);
        //     return;
        // }
        if (p === "Bignight2023") {
            localStorage.setItem("isLoggedIn", true);
            window.location.href = "index.html";
        }
        return;
    });

})

