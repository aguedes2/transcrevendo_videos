import cors from "cors"
import express from "express"

import { convert } from "./convert.js"
import { download } from "./download.js"
import { transcribe } from "./transcribe.js"
import { summarize } from "./summary.js"

const app = express()
app.use(express.json())
app.use(cors())

app.get("/summary/:id", async (request, response) => {
  try {
    await download(request.params.id)
    const audioConverted = await convert()
    const result = await transcribe(audioConverted)
    return response.json({ result })
  } catch (error) {
    console.error(error)
    return response.json({ error })
  }
})

app.post("/summary", async (request, response) => {
  try {
    const result = await summarize(request.body.text)
    return response.json({ result })
  } catch (error) {
    return response.json({ error })
  }
})
//iniciar servidor
const porta = 3333
//Ao escutar a porta 3333 o servidor executa a função seguinte
app.listen(porta, () => console.log(`Server está rodando na porta: ${porta}`))

/**
 * IDS para baixar
 * 1º V1ioH3fYMYQ
 * 2º -oxe3PgKjWE
 * 3º ojtUNkjn8yM
 * 4º https://www.youtube.com/shorts/DsBof9NjaHU
 */
