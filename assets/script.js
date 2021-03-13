var para = document.querySelector('.para');
var parent = document.querySelector('.row');
parent.addEventListener('change',(e)=>{
    /*
    var inputColor = document.querySelector('[type=color]');
    var inputSize = document.querySelector('[type=number]');
    var inputFont = document.querySelector('select');
    */
    switch(e.target.getAttribute("name")){
        case "color" : para.style.color = e.target.value;
            break;
        case "fontSize" : para.style.fontSize = e.target.value + "px"; 
            break;
        default : para.style.fontFamily = e.target.value;       
    }
});

