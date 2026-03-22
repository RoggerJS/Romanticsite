const dataInicio = new Date("2019-08-18")

const hoje = new Date()

const diferenca = hoje - dataInicio

const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24))

document.getElementById("contador").innerText =
"Já se passaram " + dias + " dias desde que nos conhecemos ❤️"

const musica = document.getElementById("musica")
const botao = document.getElementById("botaoMusica")

let tocando = false

botao.addEventListener("click", () => {

if(tocando){

musica.pause()
botao.innerText = "▶️ Tocar música"

}else{

musica.play()
botao.innerText = "⏸️ Pausar música"

}

tocando = !tocando

})