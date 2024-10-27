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
const start = 16;
//Start with a 16x16 grid
for(var i = 0; i < start; i++){
    const row = document.createElement("div");
    row.className = "row";

for(var j = 0; j < start; j++){
    const box = document.createElement("div");
    box.className = "box";
    box.style.border = "1px solid black";
    box.style.flex = `1 1 ${50 / start + `%`}`;
    row.appendChild(box);
  }; 
  container2.appendChild(row);
};

//Function that prompts user to choose a number to create their grid size
function createGrid(){
    const num = prompt("Choose 1-100");
    if(num <= 100 && num >0){
        container2.innerHTML = ""; 
        for(var i = 0; i < num; i++){
            const row = document.createElement("div");
            row.className = "row";

        for(var j = 0; j < num; j++){
            const box = document.createElement("div");
            box.className = "box";
            box.style.border = "1px solid black";
            box.style.flex = `1 1 ${50 / num + `%`}`;
            row.appendChild(box);
        }; 
        container2.appendChild(row);
      };
    }
    else{
        alert("Type a number between 1-100!!!")
        return;
  };
};

sizeBtn.addEventListener("click", () =>{
    createGrid();
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

