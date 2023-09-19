// Get Dom Elements
let section = document.querySelector(".our-skills");
let progress = document.querySelectorAll(".animated");

window.onscroll = function () {
    if(window.scrollY > section.offsetTop - 200){
        progress.forEach((spans) => {
            spans.style.width = spans.dataset.width;
        })
    }
}
