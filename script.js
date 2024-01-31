let button = document.querySelectorAll('button');
// let buttonText = document.querySelectorAll('button').innerHTML;
let text =document.querySelector('.text');

let string ="";



function buttonCall() {
    button.forEach((button) => {
        button.addEventListener('click', (e) => {
            // text.value +=button.innerText;
            if (button.innerText == '=') {
                let result = eval(text.value)
                console.log(result);
                text.value = result;
                string =result;

            }else if(button.innerText == 'C'){
                text.value = " ";
                location.reload();
                
            }else if(button.innerText == '<'){
                string = string.substring(0, string.length -1);
                text.value = string;
                
            }else if(button.innerText == 'X^2'){
                string = (string*string);
                text.value = string;
            }
            else {
                string += button.innerText;
                text.value = string;
            }

        })
    })
}buttonCall()