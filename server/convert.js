import fs from "fs"
import wav from "node-wav" //encode e decode
import ffmpeg from "fluent-ffmpeg"
import ffmpegStatic from "ffmpeg-static" //um executável para chamar a lib ffmpeg de forma estática

const filePath = "./temp/audio.mp4"
const outputPath = filePath.replace(".mp4", ".wav")

export const convert = () =>
  new Promise((resolve, reject) => {
    console.log("Convertendo arquivo...")
    console.log(filePath)

    ffmpeg.setFfmpegPath(ffmpegStatic)
    ffmpeg()
      .input(filePath)
      .audioFrequency(16000)
      .audioChannels(1)
      .format("wav")
      .on("end", () => {
        const file = fs.readFileSync(outputPath)
        const fileDecoded = wav.decode(file)
        const audioData = fileDecoded.channelData[0]
        const floatArray = new Float32Array(audioData)
        console.log(floatArray)
        resolve(floatArray)
        fs.unlinkSync(filePath)
        console.log("Áudio do vídeo convertido com sucesso")
      })
      .on("error", (error) => {
        console.log("Erro ao converter o audio do vídeo", error)
        reject(error)
      })
      .save(outputPath)
  })
