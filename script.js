

const tradition = document.querySelector('.Container_1 span');


console.log(tradition);


// tradition.style.top = "50%"
window.addEventListener("load", function (event) {
    // tradition.classList.add("test")
    tradition.style.cssText = `
    top: 50%;
    opacity: 1;
    `;
});
