let buttons = document.querySelectorAll("button");
let outputScreen = document.querySelector(".displayScreen");

let str = ""


buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if (button.hasAttribute("operator") && button.getAttribute("operator") != "=") {
            str += button.getAttribute("operator");
        }
        
        else if (button.getAttribute("operator") == "=") {
            str = eval(str);
        } 
        else if(button.innerText == "clear"){
            str = "";
        }

        else {
            str += button.innerText;
        }

        outputScreen.textContent = str;
    });
});