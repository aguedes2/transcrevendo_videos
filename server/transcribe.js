import { pipeline } from "@xenova/transformers"
// import { transcriptionExample } from "./utils/transcription.js"

//função para transcrição do áudio
export async function transcribe(audio) {
  try {
    console.log("Realizando trascrição...")

    let transcriber = await pipeline(
      "automatic-speech-recognition",
      "Xenova/whisper-small"
    )

    let transcription = await transcriber(audio, {
      chunk_length_s: 30,
      stride_length_s: 5,
      language: "portuguese",
      task: "transcribe"
    })

    console.log("Transcrição finalizada com sucesso...")
    console.log("Transcrição:" + transcription?.text)
    let text = transcription?.text.replace("[Música]", "")
    text += transcription?.text.replace("[Risos]", "")
    return text
  } catch (error) {
    throw new Error(error)
  }
}
