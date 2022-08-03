const textarea = document.querySelector('textarea');
const counter = document.querySelector('.counter');
const filterOptions = document.querySelector('.filter-fonts')

//event listeners
filterOptions.addEventListener('click', changeFont)
function countLetters() {
    const length = textarea.value.length;
    counter.innerText = `${length}`;

    switch(length){
        case 49: 
        counter.style.color = "black";
        break;
        case 50: 
        counter.style.color = "green";
        break;
        case 99: 
        counter.style.color = "green";
        break;
        case 100: 
        counter.style.color = "orange";
        break;
        case 199: 
        counter.style.color = "orange";
        break;
        case 200: 
        counter.style.color = "red";
        break;
    }
}
function changeFont(e) {
    switch(e.target.value){
        case "6":
        textarea.style.fontSize = 6 + "px";
        break;
        case "12":
        textarea.style.fontSize = 12 + "px";
        break;
        case "18":
        textarea.style.fontSize = 18 + "px";
        break;
        case "24":
        textarea.style.fontSize = 24 + "px";
        break;
        case "32":
        textarea.style.fontSize = 32 + "px";
        break;
        case "48":
        textarea.style.fontSize = 48 + "px";
        break;
        case "54":
        textarea.style.fontSize = 54 + "px";
        break;
        case "62":
        textarea.style.fontSize = 62 + "px";
        break;
        case "72":
        textarea.style.fontSize = 72 + "px";
        break;
    }
}