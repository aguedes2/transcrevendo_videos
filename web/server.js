import axios from "axios"
//conectar o front-end com o back-end

export const server = axios.create({
  baseURL: "http://localhost:3333"
})
