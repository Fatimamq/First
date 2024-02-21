let btn1= document.querySelector("#btn");
let currMode= "light";

btn1.addEventListener("click", () => {
    if(currMode==="light") {
        currMode="dark";
        document.querySelector("#btn").style.backgroundColor= "black";
        document.querySelector("#btn").style.color= "white";
    } else {
        currMode="light";
        document.querySelector("#btn").style.backgroundColor= "white";
        document.querySelector("#btn").style.color= "black";
    }
    console.log(currMode);
});