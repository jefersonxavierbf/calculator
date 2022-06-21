let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case 'C':
                display.innerHTML= '0';
                break;
            case '←':
                if(display.innerHTML) {
                    display.innerText = display.innerHTML.slice(0, -1);   
                }
                break;
                case '=':
                    try{
                        display.innerHTML = eval(display.innerHTML);
                    } catch {
                        display.innerHTML = 'Error!';
                    }
                    display.innerHTML = eval(display.innerHTML)
                    break
            default:
                display.innerHTML += e.target.innerText;
        }
    });
});