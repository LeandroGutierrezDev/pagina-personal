window.addEventListener("load", () => {
    console.log("hola");

    // Capturo los elementos

    const toTop = document.querySelector(".btn-back_to_top");
    const btnBurger = document.querySelector(".toggle-menu");
    const minibar = document.querySelector(".minibar");
    const menuMain = document.querySelector("ul.main-menu");
    const menuItem = document.querySelectorAll("li.menu-item");

    // Funciones

    // Boton subir

    window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop > 500) {
            toTop.style = "visibility: visible";
        } else {
            toTop.style = "visibility: hidden";
        }
    });

    toTop.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });

    // Menu hamburguesa

    btnBurger.addEventListener("click", () => {
        minibar.classList.toggle("minibar-show");
    });

    menuItem.forEach((item) => {
        item.addEventListener("click", (e) => {
            minibar.classList.toggle("minibar-show");
        });
        menuItem.forEach((item) => {
            item.addEventListener("click", (e) => {
                let ite = e.target.parentNode.parentNode;
                menuItem.forEach((elemento) => elemento.classList.remove("active"));
                ite.classList.add("active");

                // console.log(result);
            });
        });
    });






});