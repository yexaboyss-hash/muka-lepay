const teks = [
    "Roasting level: 100%",
    "Santai, ini cuma meme 😄",
    "Ngoding dulu, debat belakangan.",
    "404: Drama not found."
];

function ganti(){
    const random = Math.floor(Math.random()*teks.length);
    document.getElementById("text").innerText = teks[random];
}
