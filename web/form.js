import { server } from "./server.js"

/* Pegar dados do formulário */
const form = document.querySelector("#form")
const input = document.querySelector("#url")
const resumo = document.querySelector("#resumo-content")
const transcricao = document.querySelector("#transcription-content")
const status = document.querySelector("#status")

form.addEventListener("submit", async (e) => {
  e.preventDefault()

  resumo.classList.add("placeholder")

  let videoURL = input.value

  if (!videoURL.includes("shorts"))
    return mostrarResultado(status, "Ops! Esse vídeo não é um short.")

  const [_, params] = videoURL.split("/shorts/")
  const [videoId] = params.split("?si=")
  //Caso seja fornecido o link de compartilhamento
  //como params[1].split("?si=") returna uma lista com 2 elementos, queremos pegar o primeiro, então colocando a constante entre colchetes já pegamos o primeiro elemento.
  mostrarResultado(status, `Obtendo o texto do audio...`)
  const transcription = await server.get(`/summary/${videoId}`)

  mostrarResultado(status, "Realizando o resumo...")
  const summary = await server.post("/summary", {
    text: transcription.data.result
  })
  mostrarResultado(transcricao, transcription.data.result)
  mostrarResultado(resumo, summary.data.result)
  transcricao.classList.remove("placeholder")
  resumo.classList.remove("placeholder")

  mostrarResultado(status, "Concluído! :)")
})

function mostrarResultado(elemento, text) {
  elemento.textContent = text
}
