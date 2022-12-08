

const tradition = document.querySelector('.Container_1 span');


console.log(tradition);


// ГО традиция
window.addEventListener("load", function (event) {
    // tradition.classList.add("test")

    tradition.style.cssText = `
    top: 50%;
    opacity: 1;
    `;
});


//

const Menu = document.querySelector(".Menu")


document.addEventListener("scroll", (ev) => {
    let body = document.querySelector("body")

    // console.dir(document);
    console.log(body.scroolHeight);
})