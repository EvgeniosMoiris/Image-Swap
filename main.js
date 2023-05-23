// First Version. 

// document.addEventListener("DOMContentLoaded", () => {
//     let image = document.querySelector("img");
//     let thisTitle = document.querySelector(".title");

//     // Mouse enter Event Listener. When we Hover in
//     image.addEventListener("mouseenter", (e) => {
//         image.src = "images/sport2.jpeg";
//         // console.log("mouseENTER");
//         thisTitle.classList.toggle("hover");
//     })

//     // Mouse leave Event Listener. We we Hover out
//     image.addEventListener("mouseleave", (e) => {
//         image.src = "images/sport1.jpeg";
//         // console.log("mouseENTER");
//         thisTitle.classList.toggle("hover");
//     })
// })


// Second Version
// Some Changes. Trying Different approaches with declaring arrow functions first
document.addEventListener("DOMContentLoaded", () => {
    const thisImage = document.querySelector("img");
    const thisTitle = document.querySelector(".title");
  
    const handleMouseEnter = () => {
      thisImage.src = "images/sport2.jpeg";
      thisTitle.classList.add("hover");
      console.log("Mouse Enter");
    };
  
    const handleMouseLeave = () => {
      thisImage.src = "images/sport1.jpeg";
      thisTitle.classList.remove("hover");
      console.log("Mouse Leave");
    };
  
    thisImage.addEventListener("mouseenter", handleMouseEnter);
    thisImage.addEventListener("mouseleave", handleMouseLeave);
  });
  