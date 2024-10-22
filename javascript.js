const container = document.querySelector(".container")

const btn1 = document.createElement("button");
btn1.className = "btn";
btn1.textContent = "8x8";
btn1.style.fontSize = "25px";
btn1.style.fontWeight = "bold";
btn1.style.border = '2px solid black';
btn1.style.padding = '15px';
btn1.style.marginRight = "10px";

const btn2 = document.createElement("button");
btn2.className = "btn";
btn2.textContent = "16x16";
btn2.style.fontSize = "25px";
btn2.style.fontWeight = "bold";
btn2.style.border = '2px solid black';
btn2.style.padding = '15px';
btn2.style.marginRight = "10px";

const btn3 = document.createElement("button");
btn3.className = "btn";
btn3.textContent = "32x32";
btn3.style.fontSize = "25px";
btn3.style.fontWeight = "bold";
btn3.style.border = '2px solid black';
btn3.style.padding = '15px';
btn3.style.marginRight = "10px";

const btn4 = document.createElement("button");
btn4.className = "btn";
btn4.textContent = "64x64";
btn4.style.fontSize = "25px";
btn4.style.fontWeight = "bold";
btn4.style.border = "2px solid black";
btn4.style.padding = "15px";
btn4.style.marginRight = "10px";

const btn5 = document.createElement("button");
btn5.className = "btn";
btn5.textContent = "100x100";
btn5.style.fontSize = "25px";
btn5.style.fontWeight = "bold";
btn5.style.border = '2px solid black';
btn5.style.padding = '15px';

container.appendChild(btn1);
container.appendChild(btn2);
container.appendChild(btn3);
container.appendChild(btn4);
container.appendChild(btn5);

const container2 = document.querySelector(".container2");
const boxes = document.createElement("div");

for(var i = 0; i < 256; i++){
    const boxes = document.createElement("div");
    boxes.classList.add("box");
    boxes.setAttribute("style", "border: 2px solid black; padding: 20px; margin: 1px");
    container2.appendChild(boxes);
};

btn1.addEventListener("click", () => {
    container2.removeChild(boxes);
    for(var i = 0; i < 64; i++){
        const boxes = document.createElement("div");
        boxes.classList.add("box");
        boxes.style.border = "2px solid black";
        container2.appendChild(boxes);
    };
})
    

container2.addEventListener("click", () => {
    document.querySelectorAll(".box").forEach(element => {
        element.addEventListener("mousemove", () => {
            element.style.backgroundColor = "red";
        });
        container2.addEventListener("dblclick", () =>{
            element.addEventListener("mousemove", () => {
                element.style.backgroundColor = "";
            })
        });
    });
});