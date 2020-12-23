
const buttons = document.querySelectorAll('button')
const header = document.querySelector('header')
const menu = document.querySelector('.menu')
const chance = document.querySelector('.menu label')
const span = document.querySelector('span')
const placar = document.querySelectorAll('.placar p')

menu.style.display = 'none'
placar[0].style.display = 'none'
placar[1].style.display = 'none'
buttons[4].style.display = 'none'

let numero

let minBaixo = 0, minAlto = 0
let maxBaixo = 100, maxAlto = 100
let repetidos = [];
let chances;
let reaisG = 0, reaisC = 0

buttons[0].addEventListener('click', inicia);

function inicia(){
        menu.style.display = 'flex'
        placar[0].style.display = 'block'
        placar[1].style.display = 'block'
        buttons[0].style.display = 'none'
        chance.textContent = ''
        header.style.height = '100px';
    
        minBaixo = 0; minAlto = 0; maxBaixo = 100; maxAlto = 100;
        chances = 0;
        repetidos = [];
        numero = Math.floor(Math.random() * 101)
        repetidos.push(numero)
        span.textContent = numero
}

buttons[1].addEventListener('click', ()=> {
   if(chances <= 7){
       maxBaixo = numero
       minBaixo = minAlto
    
       console.log(`entre: ${minBaixo} e ${maxBaixo}`)
       
       while(repetidos.indexOf(numero) >= 0){
           numero =  Math.floor(Math.random() * (maxBaixo - minBaixo) + minBaixo);

           if(minBaixo == maxBaixo || minBaixo-1 == maxBaixo || minBaixo == maxBaixo-1){
               alert('Você mentiu, ou apertou errado!');
               inicia();
           }
       }
    
       repetidos.push(numero)
       console.log(repetidos)
       span.textContent = numero

       chances++
       let cor = gera_cor();
       chance.style.color = cor;
       chance.textContent += ' |'
   } else {
    chance.textContent = '!!!PERDEU!!!'
    buttons[4].style.display = 'block'
   }
})

buttons[2].addEventListener('click', ()=> {
    if(chances <= 7){
        minAlto = numero
        maxAlto = maxBaixo
    
        console.log(`entre: ${minAlto} e ${maxAlto}`)
    
        while(repetidos.indexOf(numero) >= 0){
            numero =  Math.floor(Math.random() * (maxAlto - minAlto) + minAlto);

            if(minAlto == maxAlto-1){
                alert('Você mentiu, ou apertou errado!');
                inicia();
            }
        }
         
        repetidos.push(numero)
        console.log(repetidos)
        span.textContent = numero
        chances++
        let cor = gera_cor();
        chance.style.color = cor;
        chance.textContent += ' |'
    } else {
        chance.textContent = '!!!PERDEU!!!'
        buttons[4].style.display = 'block'
    }
 })

 buttons[3].addEventListener('click', ()=> {
    menu.style.display = 'none'
    buttons[0].style.display = 'block'

    reaisG++;
    placar[0].textContent = `Computador: ${reaisG} pontos`
    placar[1].textContent = `Humano: ${reaisC} pontos`

 })

 buttons[4].addEventListener('click', () => {
    menu.style.display = 'none'
    buttons[0].style.display = 'block'

    reaisC++;
    placar[0].textContent = `Computador: ${reaisG} pontos`
    placar[1].textContent = `Humano: ${reaisC} pontos`
 })

function gera_cor(){
    let hexadecimais = '0123456789ABCDEF';
    let cor = '#';
  
    // Pega um número aleatório no array acima
    for (let i = 0; i < 6; i++ ) {
    //E concatena à variável cor
        cor += hexadecimais[Math.floor(Math.random() * 16)];
    }
    return cor;
}