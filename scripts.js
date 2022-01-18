var number = 0;

function isso(){
    number = number -1;
    MostrarNatela()
}
function demais(){
    number = number +1;
    MostrarNatela()

}
function MostrarNatela(){
    const p = document.querySelector("p")
    p.innerText = number 
    console.log(number)
}

