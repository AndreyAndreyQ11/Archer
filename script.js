

const tradition = document.querySelector('.Section_1 span');
// ГО традиция
window.addEventListener("load", function (event) {
    tradition.classList.remove("start");

    console.log(tradition);
    // tradition.style.cssText = `
    // top: 50%;
    // opacity: 1;
    // `;
});

const Menu = document.querySelector(".Menu")

// document.addEventListener("scroll", (ev) => {
//     let body = document.querySelector("body")

//     // console.dir(document);
// })
///////////////////////////////////////


const bundle = document.querySelector("#bundle");
const options = {
    rootMargin: '0px',
    threshold: 0
};



const callback = function (entries, observer) {
    console.log(entries);
    console.log(observer);



    // entries.forEach(element => {
    //     // console.log("сработало_2", element, observer);
    //     console.log("сработало_2", element.isIntersecting);
    // });

}

let observer = new IntersectionObserver(callback, options);
observer.observe(bundle);