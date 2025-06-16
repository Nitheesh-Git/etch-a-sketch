const grids = document.querySelector(".grids");
const containerSize = 550;

function createGrid(gridsize = 36){
    for(let i=0;i<gridsize*gridsize;i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = containerSize/gridsize + "px"
        cell.style.height = containerSize/gridsize + "px"
        grids.appendChild(cell)
    }
}

createGrid()

const generate = document.getElementById("b1")
const size = document.querySelector(".size")
generate.addEventListener("click",()=>{
    gridsize = size.value;
    console.log(gridsize)
    grids.innerHTML = ''
    createGrid(gridsize)
})


const border = document.querySelector(".borders")
const checkbox = document.getElementById("toggle")
border.addEventListener("click",()=>{
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell=>{
        if (checkbox.checked){
        cell.style.border = "1px solid black"
        }
        else{
        cell.style.border = "none"
        }
    })
})
