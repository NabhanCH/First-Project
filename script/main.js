// Toggle & Responsive Navigation

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navlist = document.querySelector("nav");

    burger.addEventListener("click", () => {
        // Toggle nav list and burger class
    navlist.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
});
};

navSlide();



// delete font after go back


window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
    
}