const teks = [
    "Roasting KONTOL",
    "Santai, ini cuma meme 😄",
    "KONTOL LU GEDE.",
    "TAPI BOONK."
];

function ganti(){
    const random = Math.floor(Math.random()*teks.length);
    document.getElementById("text").innerText = teks[random];
}
