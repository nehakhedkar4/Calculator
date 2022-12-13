console.log("Calculator");

var buttons = document.querySelectorAll(".btn")
var display = document.getElementById("Display")
var equal = document.getElementById("equal")


Array.from(buttons).forEach(button => {
    button.addEventListener('click',function(e){
        
        if(e.target.innerHTML  == "C"){
            document.getElementById('Display').value=""
            console.log("You clicked on Clear");
        } 
        
        else if(e.target.innerHTML == "="){
            console.log("you clicked on equal");
            Calc()
            document.getElementById("Display").value = y
            addToHistory("=" +y)
        }   
        
        else if(e.target.innerHTML == "x2"){
            // console.log("clicked:x2");
            Calc()
            document.getElementById("Display").value *=document.getElementById("Display").value
            addToHistory('^' +document.getElementById("Display").value)
        } 
        
        else if(e.target.innerHTML == "√"){
            // console.log("Clicked: √");
            Calc()
            document.getElementById("Display").value = Math.sqrt(document.getElementById("Display").value)
            addToHistory('√' +document.getElementById("Display").value)
        }
        
        else if(e.target.innerHTML == "π"){
            // console.log("pi");
            document.getElementById("Display").value =  3.14
            addToHistory('π' +document.getElementById("Display"))

            
        }else if(e.target.innerHTML == "mod"){
            // console.log("$");
            document.getElementById("Display").value =  "%"
            
        
        }else if(e.target.innerHTML == "←"){
            back()

        }
        else{
            var val = e.target.innerHTML
            document.getElementById('Display').value += val
            addToHistory(val)
        }
    })
});

function Calc(){
    y = eval(document.getElementById("Display").value)
}

document.getElementById("foo").onchange = function() {
    if (this.selectedIndex!==0) {
        window.location.href = this.value;
    }        
};


function back() {
    var value = document.getElementById("Display").value;
    document.getElementById("Display").value = value.substr(0, value.length - 1);
}

let history = ''
function addToHistory(value){
    history += value
    document.getElementById("History").innerHTML = history
}