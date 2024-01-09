let generate = document.querySelector(".btn");
let container=document.querySelector(".container");
let msg=document.querySelector(".msg");

const randomColor=()=>{
    let randomNumber=Math.floor(Math.random()*16777215);
    let color='#' + randomNumber.toString(16);
    msg.innerText= color;
    document.body.style.backgroundColor = color;
}
//event call
generate.addEventListener("click",randomColor);

//init call
randomColor();