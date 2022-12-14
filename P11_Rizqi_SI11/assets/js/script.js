// menangkap semua elemen a
document.querySelectorAll("#opts a").forEach((a) =>
    // Jika di klik akan menjalankan fungsi computerChoice
    a.addEventListener("click", (element) => {
        computerChoice(element);

    })
);
function computerChoice(element) {
    // tangkap pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap elemen result dengan queryselector untuk menamung
    // nilai hasil dari game
    let pilihanComputer = document.querySelector("#result");

    // membuat array untuk komputer
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan random untuk computer
    pilihanComputer.innerHTML = 
    choices[Math.round(Math.random() * choices.length)];
    pilihanComputer = pilihanComputer.innerHTML;

    // jika pilihan komputer sama dengan pilihan user(draw)
    if(pilihanUser == pilihanComputer){
        alert("DRAW");
    }
        
    // jika pilihan user yang menang
    if(pilihanUser == "Rock" && pilihanComputer == "Scissors") {
        alert("YOU WIN");
    }else if(pilihanUser == "Paper" && pilihanComputer == "Rock") {
        alert("YOU WIN");
    }else if(pilihanUser == "Scissors" && pilihanComputer == "Paper") {
        alert("YOU WIN");
    }
    // jika computer yang menang
    if(pilihanUser == "Rock" && pilihanComputer == "Paper") {
        alert("COMPUTER WIN");
    }else if(pilihanUser == "Paper" && pilihanComputer == "Scissors") {
        alert("COMPUTER WIN");
    }else if(pilihanUser == "Scissors" && pilihanComputer == "Rock") {
        alert("COMPUTER WIN");
    }
}