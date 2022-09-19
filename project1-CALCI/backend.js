let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue='';

for (items of buttons) {
    items.addEventListener('click', (e)=> {
        buttonText = e.target.innerText;
        console.log('button is ',buttonText);

        if(buttonText=='C'){
            screenValue="";
            screen.value=screenValue;
        }

        else if(buttonText=='='){
            screenValue=eval(screenValue);
            screen.value=screenValue;
        }

        else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }
    })
}