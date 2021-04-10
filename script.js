var css  = document.querySelector("h3");
var c1=document.getElementById("c1");
var c2=document.getElementById("c2");
var body=document.querySelector("body");
function colpik()
{
    body.style.background="linear-gradient(to right,"+ c1.value + "," + c2.value+")"; 
    css.textContent=body.style.background+";";
}

c1.addEventListener("input", function () {
    colpik();
});

c2.addEventListener("input",function(){
   colpik();
})


