let topButton = document.querySelector("#backToTop");

window.addEventListener("scroll", scrollFunc);

function scrollFunc() {
    if (window.pageYOffset > 300) {
        if (!topButton.classList.contains("entry")) {
            topButton.classList.remove("exit")
            topButton.classList.add("entry")
            topButton.style.display = "block";
        }
    }
    else {
        if (topButton.classList.contains("entry")) {
            topButton.classList.remove("entry")
            topButton.classList.add("exit")
            setTimeout(() => {
                topButton.style.display = "none";
            }, 500);
        }
    }
}

topButton.addEventListener("click", goToTop);

function goToTop() {
    window.scrollTo(0, 0);
}

let naama = document.querySelector(".name");

window.addEventListener("scroll", disappear);

