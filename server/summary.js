import { pipeline } from "@xenova/transformers"
import { summaryExample } from "./utils/summary.js"

import fs from "fs"

export async function summarize(text) {
  try {
    console.log("Realizando o resumo...")
    const generator = await pipeline(
      "summarization",
      "Xenova/distilbart-cnn-6-6"
    )
    const output = await generator(text)
    console.log("Resumo concluído com sucesso...")
    fs.unlink("../temp/audio.wav")
    return output[0].summary_text
  } catch (error) {
    console.log("Não foi possível resumir...: ", error)
    throw new Error(error)
  }
}
