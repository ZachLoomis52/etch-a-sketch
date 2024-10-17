const container = document.querySelector(".container");

for(var i = 0; i< 257; i++){
    const box = document.createElement("div");
    box.setAttribute("style", "border: 2px solid black; padding: 20px; max-width: 15px");
    container.appendChild(box);
};

