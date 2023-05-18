document.addEventListener("DOMContentLoaded", () => {
    let image = document.querySelector("img");
    let thisTitle = document.querySelector(".title");

    // Mouse enter Event Listener. When we Hover in
    image.addEventListener("mouseenter", (e) => {
        image.src = "images/sport2.jpeg";
        // console.log("mouseENTER");
        thisTitle.classList.toggle("hover");
    })

    // Mouse leave Event Listener. We we Hover out
    image.addEventListener("mouseleave", (e) => {
        image.src = "images/sport1.jpeg";
        // console.log("mouseENTER");
        thisTitle.classList.toggle("hover");
    })
})