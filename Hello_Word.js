function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

function getRandomCell(ligne, colonne) { /* ligne = rows and  cells = colonne */
    var table = document.getElementById("Hello_Word_Table")
    table.rows[ligne].cells[colonne].textContent = ""
    var clickable = document.createElement("a")
    table.rows[ligne].cells[colonne].appendChild(clickable)
    clickable.href = "Hello_Word_Result.html"
    clickable.textContent = "Hello_Word"
    clickable.style.textDecoration = "none"
}



getRandomCell(getRandomInt(45), getRandomInt(9))