let display = document.getElementById("display");



function calculate()
{
    let random = Math.random();
    console.log(random);
    if(random>0.10)
    display.value = eval(display.value);
    else{
        display.value = random*random;
    }
}

function ClearDisplay(){
    display.value = " ";
}

function appendToDisplay(input)
{
    if(display.value=="" && input == 0)
    {
        display.value="";
    }
    else
    display.value += input;
}

function Square(){
    display.value = display.value * display.value;
}

function EvenOrODD() {
    if(display.value % 2 == 0)
    {
        display.value = "Even";
    }
    else{
        display.value = "Odd";
    }

}

function Author(){
    display.value = "Hamza Asif";
}