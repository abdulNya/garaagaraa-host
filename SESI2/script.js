alert("PLAY")

const lyricsText = [
    "-TANTE-",
    "Temanku semua pada jahat tante..",
    "Aku lagi susah mereka gak ada..",
    "Coba kalo lagi jaya..",
    "Aku dipuja pujanya tante..",
    "",
    "Sudah terbiasa terjadi tante..",
    "Teman datang ketika lagi butuh saja..",
    "Coba kalo lagi susah..",
    "Mereka semua menghilanggg..."
];

let lineIndex = 0;
let charIndex = 0;

const speed = 100;
const lineDelay = 800;
const loopDelay = 3000;

const lyrics = document.getElementById("lyrics");

function typeLyrics() {
    if (charIndex < lyricsText[lineIndex].length) {
        lyrics.innerHTML += lyricsText[lineIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeLyrics, speed);
    } else {
        lyrics.innerHTML += "<br>";
        charIndex = 0;
        lineIndex++;

        if (lineIndex < lyricsText.length) {
            setTimeout(typeLyrics, lineDelay);
        } else {
            setTimeout(resetLyrics, loopDelay);
        }
    }
}

function resetLyrics() {
    lyrics.innerHTML = "";
    lineIndex = 0;
    charIndex = 0;
    typeLyrics();
}

typeLyrics();
