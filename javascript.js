const container = document.querySelector(".container")

const sizeBtn = document.createElement("button");
sizeBtn.className = "btn";
sizeBtn.textContent = "Choose Size"
const colorBtn = document.createElement("button");
colorBtn.className = "btn";
colorBtn.textContent = "Choose Color"
const resetBtn = document.createElement("button");
resetBtn.className = "btn";
resetBtn.textContent = "Reset"

container.appendChild(sizeBtn);
container.appendChild(colorBtn);
container.appendChild(resetBtn);

const container2 = document.querySelector(".container2")

function createBox(){
    const num = prompt("Choose number 1-100");
    let boxCount = num * num;
    if(num <= 100 && num >0){
        for(var i = 0; i < boxCount; i++){
            const box = document.createElement("div");
            box.className = "box";
            box.style.border = "1px solid black"
            container2.appendChild(box);
        };  
    }
    else{
        alert("Type a number between 1-100!!!")
  };
};

for(var i = 0; i < 256; i++){
    const box = document.createElement("div");
    box.className = "box";
    box.style.border = "1px solid black"
    container2.appendChild(box);
}

sizeBtn.addEventListener("click", () =>{
    container2.innerHTML = "";
    createBox();
})

resetBtn.addEventListener("click", () =>{
    document.querySelectorAll(".box").forEach(element =>{
        element.style.backgroundColor = "";
    });  
});







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





/*
// Button to set grid to 8x8
const btn1 = document.createElement("button");
btn1.className = "btn";
btn1.textContent = "8x8";
btn1.style.fontSize = "25px";
btn1.style.fontWeight = "bold";
btn1.style.border = '2px solid black';
btn1.style.padding = '15px';
btn1.style.marginRight = "10px";

// Button to set grid to 16x16
const btn2 = document.createElement("button");
btn2.className = "btn";
btn2.textContent = "16x16";
btn2.style.fontSize = "25px";
btn2.style.fontWeight = "bold";
btn2.style.border = '2px solid black';
btn2.style.padding = '15px';
btn2.style.marginRight = "10px";

// Button to set grid to 32x32
const btn3 = document.createElement("button");
btn3.className = "btn";
btn3.textContent = "32x32";
btn3.style.fontSize = "25px";
btn3.style.fontWeight = "bold";
btn3.style.border = '2px solid black';
btn3.style.padding = '15px';
btn3.style.marginRight = "10px";

// Button to set grid to 64x64
const btn4 = document.createElement("button");
btn4.className = "btn";
btn4.textContent = "64x64";
btn4.style.fontSize = "25px";
btn4.style.fontWeight = "bold";
btn4.style.border = "2px solid black";
btn4.style.padding = "15px";
btn4.style.marginRight = "10px";

// Button to set grid to 100x100
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

// Function to generate the grid without manual size calculation
function generateGrid(boxCount, columns) {
    container2.innerHTML = "";  // Clear the container

    container2.style.setProperty('--columns', columns);  // Set custom property for columns

    for (let i = 1; i <= boxCount; i++) {
        const boxes = document.createElement("div");
        boxes.classList.add("box");
        boxes.style.border = "1px solid black";
        container2.appendChild(boxes);
    }
}


/*
// Button click event listeners (with Flexbox adjustment for columns)
btn1.addEventListener("click", () => generateGrid(64, 8));   // 8x8 grid (64 boxes)
btn2.addEventListener("click", () => generateGrid(256, 16));  // 16x16 grid (256 boxes)
btn3.addEventListener("click", () => generateGrid(1024, 32)); // 32x32 grid (1024 boxes)
btn4.addEventListener("click", () => generateGrid(4096, 64)); // 64x64 grid (4096 boxes)
btn5.addEventListener("click", () => generateGrid(10000, 100)); // 100x100 grid (10000 boxes)
*/


/*
const container2 = document.querySelector(".container2");

btn1.addEventListener("click", () => {
    container2.innerHTML = "";
    container2.style.flexBasis = "12.5%";
    for(var i = 1; i < 64; i++){
        const boxes = document.createElement("div");
        boxes.classList.add("box");
        boxes.style.border = "1px solid black";
        container2.appendChild(boxes);
    };
});

btn2.addEventListener("click", () => {
    container2.innerHTML = "";
    container2.style.flexBasis = "6.25%"; 
    for(var i = 1; i < 256; i++){
        const boxes = document.createElement("div");
        boxes.classList.add("box");
        boxes.style.border = "1px solid black";
        container2.appendChild(boxes);
    };
});

btn3.addEventListener("click", () => {
    container2.innerHTML = "";
    container2.style.flexBasis = "3.125%";
    for(var i = 1; i < 1024; i++){
        const boxes = document.createElement("div");
        boxes.classList.add("box");
        boxes.style.border = "1px solid black";
        container2.appendChild(boxes);
    };
});

btn4.addEventListener("click", () => {
    container2.innerHTML = "";
    container2.style.flexBasis = "1.5625%"; 
    for(var i = 1; i < 4096; i++){
        const boxes = document.createElement("div");
        boxes.classList.add("box");
        boxes.style.border = "1px solid black";
        container2.appendChild(boxes);
    };
});

btn5.addEventListener("click", () => {
    container2.innerHTML = "";
    container2.style.flexBasis = "1%";
    for(var i = 1; i < 10000; i++){
        const boxes = document.createElement("div");
        boxes.classList.add("box");
        boxes.style.border = "1px solid black";
        container2.appendChild(boxes);
    };
});

// Function to start drawing and erasing grid
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
*/