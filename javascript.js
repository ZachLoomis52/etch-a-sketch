const container = document.querySelector(".container");

for(var i = 0; i < 256; i++){
    const boxes = document.createElement("div");
    boxes.classList.add("box");
    boxes.setAttribute("style", "border: 2px solid black; padding: 20px; max-width: 15px");
    container.appendChild(boxes);
};

document.querySelectorAll(".box").forEach(element => {
    element.addEventListener("mouseenter", () => {
        element.style.backgroundColor = "red";
    })

    element.addEventListener("mouseleave", () => {
    element.style.backgroundColor = "blue";
})
});
 




/*divs.forEach(element => {"mouseenter", () => {
    element.style.backgroundColor = "red";
}});

divs.addEventListener("mouseleave", () => {
    divs.style.backgroundColor = "blue"
});
*/

