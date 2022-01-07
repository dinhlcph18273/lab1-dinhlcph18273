import Navigo from "navigo";
import { menus } from "./menu";
import { productsList, productsList1 } from "./listpost";

const router = new Navigo("/", { linksSelector: "a" });
router.on({
    // nếu user truy cập vào đường dẫn / thì sẽ làm việc gì đó
    "/": () => console.log("home page"),
    "/about": () => console.log("About page"),
    "/product": () => console.log("Product page"),
});
router.notFound(() => console.log("not found page"));
router.resolve();

const showmenu = () => {
    const menuElement = document.getElementById("menu");
    if (menuElement) {
        const result = menus.map((menu) => `
            <li class="inline-block px-3"><a href="" class="text-white hover:underline">${menu}</a></li>
            `).join(" ");
        menuElement.innerHTML = result;
    }
};
showmenu();

const showpost = () => {
    const postElement = document.getElementById("post");
    if (postElement) {
        const result = productsList.map((item) => {
            return `
            <div class="border border-solid border-black p-7">
            <img src="${item.img}" alt="">
            <h3 class="text-2xl text-orange-700 text-center">${item.name}</h3>
            <p>${item.desc}</p>
        </div>
            `
        }).join("");
        postElement.innerHTML = result;
    }
}
showpost();

const showpost1 = () => {
    const postElement = document.getElementById("post1");
    if (postElement) {
        const result = productsList.map((item) => {
            return `
            <div class="border border-solid border-black p-7">
            <img src="${item.img}" alt="">
            <h3 class="text-2xl text-orange-700 text-center">${item.name}</h3>
            <p>${item.desc}</p>
        </div>
            `
        }).join("");
        postElement.innerHTML = result;
    }
}
showpost1();