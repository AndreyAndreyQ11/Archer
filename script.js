
//Section_1

const tradition = document.querySelector('.Section_1 span');
// ГО традиция
window.addEventListener("load", function (event) {
    tradition.classList.remove("start");


    // tradition.style.cssText = `
    // top: 50%;
    // opacity: 1;
    // `;
});

/*const Menu = document.querySelector(".Menu")
document.addEventListener("scroll", (ev) => {
    let body = document.querySelector("body")

    // console.dir(document);
})
*/

//Section_2

const bundle = document.querySelector("#bundle");
const options = {
    // rootMargin: "0px 0px -50 % 0px",
    // rootMargin: "-50px 0px -50px 0px",
    rootMargin: "-25%",
    threshold: 0
}



const callback = function (entries, observer) {

    if (entries[0].isIntersecting) {
        // bundle.style.height = '500px';
        bundle.style.height = '550px';
    } else {
        bundle.style.height = '100px';
    }

}

let observer = new IntersectionObserver(callback, options);
observer.observe(bundle);


//Section_3


import data from './data.json' assert { type: "json" };



const Section_3 = document.querySelector(".Section_3");

data.forEach((el, index, arrey) => {
    Section_3.insertAdjacentHTML("beforeend", `
    <div class="merch">
    <h3>${el.title}</h3>
    <img src=${el.url} alt="#" />

    <p>
    ${el.description}
    </p>

    <p>
        Цена: <span> ${el.price}</span> грн.
    </p>

    <form action="#">
        <span>Заказать</span><input type="number" />
        <button>Отправить заявку</button>
    </form>

    </div > 
    `
    )
})




let zeroOrOne = (n, s) => {
    let mas = {
        m: [],
        m_0: [],
        m_1: [],
    }
    let { m, m_0, m_1, } = mas;
    s.forEach((i1) => {
        i1.forEach((i2) => {
            if (i2 == 0) {
                m_0.push(i2);
            } else { m_1.push(i2); }
        })
        if (m_0.length > m_1.length) {
            m.push(0)
        } else { m.push(1) }
        m_0 = [];
        m_1 = [];
    })
    return m;
}
//coding and coding.. shorter and more shorter..  good luck! ;-)

console.log(zeroOrOne(1, [[1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1], [0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0], [0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0], [0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0], [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1], [1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1], [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0], [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1], [0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0], [1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0], [0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0], [0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0], [1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0], [1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1], [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0]]));
