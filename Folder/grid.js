let canv = document.getElementById("canvas"),
    msg = document.getElementById("msg"),
    c = canv.getContext("2d"),
    coll =10,
    rows=5,
    cellPix=canv.width/coll;

DrawGrid()

document.querySelector("#coll").addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){
        getInput()
    }
})
document.querySelector("#row").addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){
        getInput()
    }
})

function getInput(){
    coll=document.getElementById("coll").value;
    rows=document.getElementById("row").value;
    cellPix = canv.width/coll;   
    canv.height = rows*cellPix;

    DrawGrid()
}

function DrawGrid(){
    c.lineWidth = 1.8
    for(var i=cellPix; i<canv.width; i+=cellPix){
        c.moveTo(i,0);
        c.lineTo(i, canv.height)
        c.stroke()
    }
    for(var i=cellPix; i<rows*cellPix; i+=cellPix){
        c.moveTo(0,i)
        c.lineTo(canv.width,i)
        c.stroke()
    }
}

function randomNr(min,max){
    return Math.round(Math.random() * (max - min)) + min
}