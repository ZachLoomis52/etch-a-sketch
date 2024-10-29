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
    const column = document.createElement("div");
    column.className = "column";

for(var j = 0; j < start; j++){
    const box = document.createElement("div");
    box.className = "box";
    box.style.border = "1px solid black";
    box.style.flex = `1 1 ${50 / start + `%`}`;
    column.appendChild(box);
  }; 
  container2.appendChild(column);
};

//Function that prompts user to choose a number to create their grid size
function createGrid(){
    const num = prompt("Choose 1-100");
    if(num <= 100 && num >0){
        container2.innerHTML = ""; 
        for(var i = 0; i < num; i++){
            const column = document.createElement("div");
            column.className = "column";

        for(var j = 0; j < num; j++){
            const box = document.createElement("div");
            box.className = "box";
            box.style.border = "1px solid black";
            box.style.flex = `1 1 ${50 / num + `%`}`;
            column.appendChild(box);
        }; 
        container2.appendChild(column);
      };
    }
    else{
        alert("Type a number between 1-100!!!")
        return;
  };
};

function chooseColor(){
    let Color = prompt("Choose: Red, Black, Orange, Purple, Green, Blue, White, Yellow.");
    let color = Color.toLowerCase();
    
    switch (color) {
            case "red":
            color = "red";
        break;
            case "black":
            color = "black";
        break;
            case "orange":
            color = "orange";
        break;
            case "purple":
            color = "purple";
        break;
            case "green":
            color = "green";
        break;
            case "blue":
            color = "blue";
            break;
        case "white":
            color = "white";
            break;
        case "yellow":
            color = "yellow";
            break;
        default:
            alert("Choose 1 of the given options!!!")
            return;
    } 
    container2.addEventListener("click", () => {
        document.querySelectorAll(".box").forEach(element => {
            element.addEventListener("mousemove", () => {
                element.style.backgroundColor = color;
            });
            container2.addEventListener("dblclick", () =>{
                element.addEventListener("mousemove", () => {
                    element.style.backgroundColor = "";
                })
            });
        });
    });
     
};



sizeBtn.addEventListener("click", () => {
    createGrid();
});

resetBtn.addEventListener("click", () => {
    document.querySelectorAll(".box").forEach(element =>{
        element.style.backgroundColor = "";
    });  
});

colorBtn.addEventListener("click", () => {
    chooseColor();
});
