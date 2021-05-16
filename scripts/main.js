const smoothLinks = document.querySelectorAll('.navigation__link[href^="."]');

for(let link of smoothLinks) {
    link.addEventListener("click", e => {
        e.preventDefault();
        const className = link.getAttribute("href");

        document.querySelector(className).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    })
}

