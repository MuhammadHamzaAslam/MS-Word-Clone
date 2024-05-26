let bold = document.getElementById("bold")
let italic = document.getElementById("italic")
let underline = document.getElementById("underline")
let selectFont = document.getElementById("select-font") 
let fontSize = document.getElementById("size")
let a = document.getElementById("a")
let a1 = document.getElementById("a1")
let case_1 = document.getElementById("case")
let shadow = document.getElementById("shadow")
let textColor = document.getElementById("textColorName")
let textarea = document.getElementById("textarea")
let left = document.getElementById("left")
let right = document.getElementById("right")
let Center = document.getElementById("Center")
let strike = document.getElementById("strike")
let find = document.getElementById("find")
let bg = document.getElementById("bg")
let bor = document.getElementById("bor")
let replace = document.getElementById("replace")

function boldText() {
    textarea.style.fontWeight = "bolder"
}
function italicText() {
    textarea.style.fontStyle = 'italic'
}
function underlineText() {
    textarea.style.textDecoration = 'underline'
}
function fontChange() {
    let selected = selectFont.value
    textarea.style.fontFamily = selected
}
function fontSizeChange() {
    let selected_1 = fontSize.value + "px"
    textarea.style.fontSize = selected_1
}
function a_1() {
   let currentSize = parseInt(fontSize.value)
   let size = currentSize+2
   fontSize.value = size
   textarea.style.fontSize = size + "px"
}
function a_2() {
   let currentSize = parseInt(fontSize.value)
   let size = currentSize-2
   fontSize.value = size
   textarea.style.fontSize = size + "px"
}
function changingCase() {
    let user = prompt("Enter a Case Name")
    if (user.toLowerCase() == "uppercase") {
        textarea.style.textTransform = "uppercase"
    }
    else if (user.toLowerCase() == "lowercase") {
        textarea.style.textTransform = "uppercase"
    }
    else if (user.toLowerCase() == "capitalize") {
        textarea.style.textTransform = "capitalize"
    }
    else{
        alert("Invalid Case")
    }
}
function addTextShadow() {
    let top = prompt("Enter a value in px for top right") 
    let bottom = prompt("Enter a value in px for bottom left") 
    let color = prompt("Enter color ")
    textarea.style.textShadow = `${top} ${bottom} ${color}`
}
function color() {
    let changing = prompt("Enter a Color Name")
    textarea.style.color = changing
}
function alignLeft() {
    textarea.style.textAlign = "left"
}
function alignRight() {
    textarea.style.textAlign = "right"
}
function alignCenter() {
    textarea.style.textAlign = "center"
}
function strikeThrough() {
    textarea.style.textDecoration = "line-through"
}
function findText() {
    let num = 0;
    let user = prompt("Enter a Word which You Want To Find").toLowerCase();
    let text = textarea.value.toLowerCase(); 
    for (let i = 0; i <= text.length - length; i++) {
        if (text.substring(i, i + user.length) === user) {
            num++;
        }
    }
    if (num > 0) {
        alert("The word '" + user + "' appears " + num + " times.");
        
    }
    else{
        alert("No Words Found")
    }
}
function bgColor() {
    let user = prompt("Enter A color Name")
    textarea.style.backgroundColor = user
}
function border() {
    let user = prompt("Enter a Color Name")
    let type = prompt("Enter Type \n Example: solid dotted dashed")
    textarea.style.border = `3px ${type} ${user}`
}
function replaceText() {
    let user = prompt("Enter a word which you want to find").toLowerCase();
    let re = prompt("Enter a word to replace with " + user);
    let text = textarea.value.toLowerCase();
    let newText = text.split(user).join(re);
    textarea.value = newText;
}
bold.addEventListener('click',boldText)
italic.addEventListener('click',italicText)
underline.addEventListener('click',underlineText)
selectFont.addEventListener("click",fontChange)
fontSize.addEventListener("change",fontSizeChange)
a.addEventListener("click",a_1)
a1.addEventListener("click",a_2)
case_1.addEventListener("click",changingCase)
shadow.addEventListener("click",addTextShadow)
textColor.addEventListener("click",color)
left.addEventListener("click",alignLeft)
right.addEventListener("click",alignRight)
Center.addEventListener("click",alignCenter)
strike.addEventListener("click",strikeThrough)
find.addEventListener("click",findText)
bg.addEventListener("click",bgColor)
bor.addEventListener("click",border)
replace.addEventListener("click",replaceText)