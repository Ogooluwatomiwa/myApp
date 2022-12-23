let select = document.getElementById("select");
let list = document.getElementById("list");
let selecttext = document.getElementById("selecttext");
let options = document.getElementsByClassName("options");
let form = document.getElementById("form");
let button = document.getElementById('button');
let submit = document.getElementById('submit');
let popup = document.getElementById('popup');
let ok = document.getElementById('ok');

select.onclick= function() {
    list.classList.toggle("open");
}

for(option of options){
    option.onclick = function() {
        selecttext.innerHTML = this.innerHTML;
        form.style.display = 'block';
    }
} 
function openpopup() {
    popup.classList.add('popup-open');
}
function closepopup() {
    popup.classList.remove('popup-open');
}