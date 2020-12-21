
const buttons = document.querySelectorAll('button')
const menu = document.querySelector('.menu')
const chance = document.querySelector('.menu p')
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

buttons[0].addEventListener('click', ()=> {
    menu.style.display = 'block'
    placar[0].style.display = 'block'
    placar[1].style.display = 'block'
    buttons[0].style.display = 'none'
    chance.textContent = ''

    minBaixo = 0; minAlto = 0; maxBaixo = 100; maxAlto = 100;
    chances = 0;
    repetidos = [];
    numero = Math.floor(Math.random() * 101)
    repetidos.push(numero)
    span.textContent = numero
})

buttons[1].addEventListener('click', ()=> {
   if(chances <= 7){
       maxBaixo = numero
       minBaixo = minAlto
    
       console.log(`entre: ${minBaixo} e ${maxBaixo}`)
       
       while(repetidos.indexOf(numero) >= 0){
           numero =  Math.floor(Math.random() * (maxBaixo - minBaixo) + minBaixo);
       }
    
       repetidos.push(numero)
       console.log(repetidos)
       span.textContent = numero

       chances++
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
        }
         
        repetidos.push(numero)
        console.log(repetidos)
        span.textContent = numero

        chances++
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
