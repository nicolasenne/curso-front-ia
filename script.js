const frases = [
  "Uma jovem descobre segredos de sua família ao herdar uma livraria misteriosa.",
  "Em um mundo onde sonhos podem ser gravados, um escritor luta para manter sua imaginação própria.",
  "Um romance épico entre um poeta do século XIX e uma cientista do futuro." 
];

const button = document.querySelector("#generateBtn");
const input = document.querySelector("#userInput");
const output = document.querySelector("#outputArea");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * frases.length);
  output.innerText = frases[randomIndex];
});


// const input = document.querySelector("#userInput");
// const output = document.querySelector("#outputArea");
// const button = document.querySelector("#generateBtn");

// button.addEventListener("click", async () => {
//   const prompt = input.value;
//   output.innerText = "Gerando sinopse...";

//   const response = await fetch("https://api.openai.com/v1/chat/completions", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": "Bearer TOKEN"
//     },
//     body: JSON.stringify({
//       model: "gpt-4",
//       messages: [
//         { role: "system", content: "Você é um assistente que escreve sinopses curtas e criativas para ideias de livros." },
//         { role: "user", content: `Crie uma sinopse para a seguinte ideia: ${prompt}` }
//       ]
//     })
//   });

//   const data = await response.json();
//   output.innerText = data.choices[0].message.content;
// });