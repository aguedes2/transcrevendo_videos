# Transcrever Shorts

## Transcrevendo_videos_shorts
Este código visa baixar o áudio de um vídeo curto do youtube (Shorts), captar a fala, transcrevê-la e resumi-la por meio de IA 🤖.

## Tecnologias

-Node
-HTML
-CSS
-JavaScript

## Metodologias
**Front-end**

1️⃣ **_HTML_**:

Estrutura da página com um formulário com um input para adicionar a URL do vídeo (short) e um botão para chamar o processamento. Um parágrafo para apresentar a transcrição completa do vídeo short. Adicionalmente também há um parágrafo para apresentar o resumo da transcrição.

2️⃣ **_Estura de Arquivos_**:

Criei a estrutura da seguinte forma</br>
➡️ no arquivo *main.js* importei todos os scripts e folhas de estilo que serão usados na aplicação e aplicar no arquivo _index.html_;</br>
➡️ form.js importa o _server.js_ e realiza toda a lógia do front-end da aplicação;</br>
➡️ server.js responsável por importar o axios e receber a baseURL.</br>

**Back-end** 

1️⃣ __express__ ➡️ estrutura de roteamento e criação dos _end_points_;</br>
2️⃣ __axios__ ➡️ Axios é um cliente HTTP baseado em promessas node.js para o navegador (requisições HTTP);</br>
3️⃣ __cors__ ➡️ Um middleware para conexão entre o front-end e back-end;</br>
4️⃣ __ytdl-cor__ ➡️ Mais um módulo de download do YouTube. Escrito apenas com Javascript e uma interface de streaming amigável ao nó;</br>
5️⃣ __@xenova/transformers__ ➡️ Executar modelos de inteligência virtual (transformers.js);</br>
6️⃣ __fluent-ffmpeg__ ➡️ manipular o vídeo - obter dados, neste exemplo será utilizado para obter o texto do audio do vídeo;</br>
7️⃣ __ffmpeg-static__ ➡️ manipulação dos arquivos de áudio extraído do vídeo;</br>
8️⃣ __node-wav__ ➡️ converter o conteúdo do vídeo (wave_array_32) - Obter apenas dados do áudio.</br>

### Files
➡️ __convert.js__: responsável pela lógica de captura e conversão do áudio do vídeo;</br>
➡️ __download.js__: realiza o download do vídeo e utiliza a lib _ytdl_core_;</br>
➡️ __summary.js__: utiliza a lib _@xenova/transformers_ para realizar o resumo do texto obtido a partir do áudio do vídeo.;</br>
➡️ __transcribe.js__: responsável opera obtenção da transcrição do texto obtido a partir do áudio do vídeo.</br>

### Conclusão 🤔

Um projeto simples em javaScript com utilização de uma lib baseada em IA realiza a transcrição do áudio de um vídeo e também o resumo deste áudio. Sem esquecer de algumas aplicações possíveis de fazer a partir deste código, tais como: 
➡️ Criação de legenda para vídeo 😮;</br>
➡️ Se quiser apenas fazer download do vídeo do youtube, é possível alterar o código e obter apenas o vídeo 😊;</br>
➡️ É possível fazer alteração no código para fazer download do vídeo escolhendo a qualidade do vídeo a ser obtida 😜;</br>
