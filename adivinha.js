
const buttons = document.querySelectorAll('button')
const header = document.querySelector('header')
const menu = document.querySelector('.menu')
const canvas = document.querySelector('canvas')
const span = document.querySelector('span')
const placar = document.querySelectorAll('.placar p')

menu.style.display = 'none'
placar[0].style.display = 'none'
placar[1].style.display = 'none'
buttons[4].style.display = 'none'

let numero

let minBaixo = 0, minAlto = 0
let maxBaixo = 101, maxAlto = 101
let repetidos = [];
let chances;
let reaisG = 0, reaisC = 0
let cor

let ctx = canvas.getContext('2d')

buttons[0].addEventListener('click', inicia);

function inicia(){
        menu.style.display = 'flex'
        placar[0].style.display = 'block'
        placar[1].style.display = 'block'
        placar[0].textContent = `Computador: ${reaisG} pontos`
        placar[1].textContent = `Humano: ${reaisC} pontos`
        buttons[0].style.display = 'none'
        buttons[3].style.display = 'block'
        buttons[4].style.display = 'none'
        header.style.height = '145px';
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        minBaixo = 0; minAlto = 0; maxBaixo = 101; maxAlto = 101;
        chances = 0;
        repetidos = [];
        numero = Math.floor(Math.random() * 101)
        repetidos.push(numero)
        span.textContent = numero
}

buttons[1].addEventListener('click', ()=> {
   if(chances < 7){
       maxBaixo = numero
       minBaixo = minAlto
    
       console.log(`entre: ${minBaixo} e ${maxBaixo}`)
       
       while(repetidos.indexOf(numero) >= 0){
           numero =  Math.floor(Math.random() * (maxBaixo - minBaixo) + minBaixo);
            
           if(minBaixo == maxBaixo || minBaixo == maxBaixo-1){
                inicia()
                alert('Você mentiu ou apertou errado!');
           }
       }
    
       repetidos.push(numero)
       console.log(repetidos)
       span.textContent = numero

       chances++
       desenha_risco(chances)
   } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '1.3rem Love Ya Like A Sister'
    ctx.fillStyle = "#6495ED";
    ctx.fillText('HUMANO VENCEU!!', 5, 49)
    buttons[3].style.display = 'none'
    buttons[4].style.display = 'block'
   }
})

buttons[2].addEventListener('click', ()=> {
    if(chances < 7){
        minAlto = numero
        maxAlto = maxBaixo
    
        console.log(`entre: ${minAlto} e ${maxAlto}`)
    
        while(repetidos.indexOf(numero) >= 0){
            numero =  Math.floor(Math.random() * (maxAlto - minAlto) + minAlto);

            if(minAlto == maxAlto-1){
                alert('Você mentiu ou apertou errado!');
                inicia();
            }
        }
         
        repetidos.push(numero)
        console.log(repetidos)
        span.textContent = numero

        chances++
        desenha_risco(chances)
     
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = '1.3rem Love Ya Like A Sister'
        ctx.fillStyle = "#6495ED";
        ctx.fillText('HUMANO VENCEU!!', 5, 49)
        buttons[3].style.display = 'none'
        buttons[4].style.display = 'block'
    }
 })

 buttons[3].addEventListener('click', ()=> {
    menu.style.display = 'none'
    placar[0].style.display = 'none'
    placar[1].style.display = 'none'
    buttons[0].style.display = 'block'
   
    reaisG++;
 })

 buttons[4].addEventListener('click', () => {
    menu.style.display = 'none'
    placar[0].style.display = 'none'
    placar[1].style.display = 'none'
    buttons[0].style.display = 'block'

    reaisC++;
 })

function desenha_risco(chances){
    switch(chances){
        case 1:
            riscar(10, 20, 10, 50)
            break;
        case 2:
            riscar(10, 20, 40, 20)
            break;
        case 3:
            riscar(40, 20, 40, 50) 
            break;
        case 4:
            riscar(10, 49, 40, 49)  
            break;         
        case 5:
            riscar(10, 49, 40, 20)
            break;           
        case 6:
            riscar(60, 20, 60, 49)   
            break        
        case 7:
            riscar(60, 20, 90, 20)   
            break        
    }   
}

function riscar(Xorigem, Yorigem, XDestino, Ydestino){
    ctx.beginPath();
    ctx.moveTo(Xorigem, Yorigem);
    ctx.lineTo(XDestino, Ydestino);
    ctx.strokeStyle = gerar_cor()
    ctx.lineWidth = 2;
    ctx.closePath();
    ctx.stroke();
}

function gerar_cor(){
    let hexadecimais = '0123456789ABCDEF';
    let cor = '#';
  
    // Pega um número aleatório no array acima
    for (let i = 0; i < 6; i++ ) {
    //E concatena à variável cor
        cor += hexadecimais[Math.floor(Math.random() * 16)];
    }
    return cor;
}
