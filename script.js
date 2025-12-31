//text area 1
let element1 = document.getElementById("container-1");
let textarea1 = document.getElementById("text1");
let currentCount1 = document.getElementById("current-count1");
const maxLimit1 = document.getElementById("max-limit1").textContent;
const maxLength1 = textarea1.getAttribute('maxlength');
maxLimit1.textContent = maxLength1;
const subelement1 = document.getElementById("char-count1");

element1.addEventListener("input", function(){
    let length1 = textarea1.value.length;
    let character1 = textarea1.value.split('');
    currentCount1.innerText = character1.length;
    if(character1.length > 250){
        textarea1.value = textarea1.value.substring(0,250);
        currentCount1.innerText = 250;
    }
    
    
    if( length1 >= maxLength1){
        textarea1.classList.add("warning-text");
        subelement1.classList.add("error")
    }else{
        textarea1.classList.remove("warning-text");
        subelement1.classList.remove("error");
    }
    
});
//text area 2

let element2 = document.getElementById("container-2");
let textarea2 = document.getElementById("text2");
let currentCount2 = document.getElementById("current-count2");
const maxLimit2 = document.getElementById("max-limit2").textContent;
const maxLength2 = textarea2.getAttribute('maxlength');
maxLimit2.textContent = maxLength2;
const subelement2 = document.getElementById("char-count2");

element2.addEventListener("input", function(){
    let length2 = textarea2.value.length;
    let character2 = textarea2.value.split('');
    currentCount2.innerText = character2.length;
    if(character2.length > 250){
        textarea2.value = textarea2.value.substring(0,250);
        currentCount2.innerText = 250;
    }
    
    
    if( length2 >= maxLength2){
        textarea2.classList.add("warning-text");
        subelement2.classList.add("error")
    }else{
        textarea2.classList.remove("warning-text");
        subelement2.classList.remove("error");
    }
    
});
//textarea 3

let element3 = document.getElementById("container-3");
let textarea3 = document.getElementById("text3");
let currentCount3 = document.getElementById("current-count3");
const maxLimit3 = document.getElementById("max-limit3").textContent;
const maxLength3 = textarea3.getAttribute('maxlength');
maxLimit3.textContent = maxLength3;
const subelement3 = document.getElementById("char-count3");

element3.addEventListener("input", function(){
    let length3 = textarea3.value.length;
    let character3 = textarea3.value.split('');
    currentCount3.innerText = character3.length;
    if(character3.length > 250){
        textarea3.value = textarea3.value.substring(0,250);
        currentCount3.innerText = 250;
    }
    
    
    if( length3 >= maxLength3){
        textarea3.classList.add("warning-text");
        subelement3.classList.add("error")
    }else{
        textarea3.classList.remove("warning-text");
        subelement3.classList.remove("error");
    }
    
});
