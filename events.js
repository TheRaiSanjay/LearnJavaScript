//Adding Events Dynamically
function paraclicked() {
    document.getElementById("myPara").setAttribute("style", "color:green");
}

function paraMouseOver() {
    document.getElementById("myPara").setAttribute("style", "color:blue");

}
//addEventListener(eventName,function)--this is prototype
document.getElementById("myPara").addEventListener("click", paraclicked);
document.getElementById("myPara").addEventListener("mouseover", paraMouseOver);

//Adding Events Statically
function buttonClicked() {
    document.getElementById("button").setAttribute("style", "color:green");
}

function buttonMouseOver() {
    document.getElementById("button").setAttribute("style", "color:blue");

}
