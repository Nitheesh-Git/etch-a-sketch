const grids = document.querySelector(".grids");
const containerSize = 600;

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
    checkbox.checked = false
})


const border = document.querySelector(".borders")
const checkbox = document.getElementById("toggle")
border.addEventListener("click",()=>{
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell=>{
        if (checkbox.checked){
        cell.style.border = "1px solid lightgrey"
        }
        else{
        cell.style.border = "none"
        }
    })
})

const clear = document.getElementById("clear")
clear.addEventListener("click",()=>{
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell=>{
        cell.style.backgroundColor="white"
    })
})

let colorValue ="#000000"
const color = document.getElementById("color")
color.addEventListener("change",()=>{
    colorValue = color.value
    console.log(colorValue)
})

grids.addEventListener("mouseover",(e)=>{
    if(e.target.matches(".cell")){
        e.target.style.backgroundColor=colorValue
    }
})

let r,g,b,rc,max
max=255

function randomColor(){
    r = Math.floor(Math.random()*max)
    g = Math.floor(Math.random()*max)
    b = Math.floor(Math.random()*max)

    return `rgb(${r} , ${g} , ${b})`
}

rc = randomColor()

const random = document.getElementById("random")
random.addEventListener("click",()=>{
    grids.addEventListener("mouseover",(e)=>{
        if(e.target.matches(".cell")){
            e.target.style.backgroundColor=randomColor()
        }   
    })
})