import Navigo from "navigo";

const router = new Navigo("/", { linksSelector: "a" });
router.on({
    // nếu user truy cập vào đường dẫn / thì sẽ làm việc gì đó
    "/": () => console.log("home page"),
    "/about": () => console.log("About page"),
    "/product": () => console.log("Product page"),
});
router.notFound(() => console.log("not found page"));
router.resolve();