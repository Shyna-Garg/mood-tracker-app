let happy =document.querySelector("#happy");
let sad =document.querySelector("#sad");
let angry =document.querySelector("#angry");
let excited =document.querySelector("#excited");
let sleepy =document.querySelector("#sleepy");
let drr =document.querySelector("#drr");
let shock=document.querySelector("#shock");
let dil =document.querySelector("#dil");
let emojiBox = document.querySelector(".emoji-box");
let container = document.querySelector(".container")
let body = document.body;


// happy.addEventListener("click", ()=>{
//     body.style.background = "#FFD700";
//     emojiBox.innerHTML= " ";
//     document.querySelector("p").innerHTML= " ";
//     document.querySelector("h2").innerHTML= " ";
//     container.textContent ="Waah! Tusi bahut Khush lag rahe ho , eda hi reha kro sohne lgde oo! 😊"
//     container.style.color = "black";

// })

// sad.addEventListener("click", ()=>{
//     body.style.background = "blue";
//     emojiBox.innerHTML= " ";
//     document.querySelector("p").innerHTML= " ";
//     document.querySelector("h2").innerHTML= " ";
//     container.textContent ="Oo koini tnsn n le, sb chnga hovega! 😊"
//     container.style.color = "white";

// })

function changeMood(bgColor, textColor, message) {
    body.style.background = bgColor;
    emojiBox.innerHTML = "";
    document.querySelector("p").innerHTML = "";
    document.querySelector("h2").innerHTML = "";
    container.textContent = message;
    container.style.color = textColor;

}

happy.addEventListener("click", function() { 
    changeMood("#FFD700", "black", "Waah! Tusi bahut Khush lag rahe ho, eda hi reha kro sohne lgde oo! 😊");
});

sad.addEventListener("click", function() {
    changeMood("blue", "white", "Oo koi chkkr n, sb chnga hovega, tnsn n lyi di sirf dyi di aa! 😊");
});

angry.addEventListener("click", function() {
    changeMood("red", "white", "Oh kyu avda khoon ghatayi jana?");
});

excited.addEventListener("click", function() {
    changeMood("green", "white", "Oh sanu v dsde klla klla ki hssi jana h....hein?");
});

sleepy.addEventListener("click", function() {
    changeMood("purple", "white", "Zzzz....oh soja hun bd ch mar li pkaiya.");
});

drr.addEventListener("click", function() {
    changeMood("black", "white", "Oh tere ki ho gy....bhut dekh lia ki?");
});

shock.addEventListener("click", function() {
    changeMood("yellow", "black", "Oh hn teri jindgi ch kde kde chnga ho hi janda..wala shock ja na ho?");
});

dil.addEventListener("click", function() {
    changeMood("hotpink", "black", "Dil ka dariya beh hi gy......");
});
document.querySelector("#reset").addEventListener("click", function() {
    location.reload(); // Page refresh hovega te wapas emojis show honge
});

