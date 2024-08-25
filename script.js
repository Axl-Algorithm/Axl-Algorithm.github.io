const wordSearch = [
    ['O', 'H', 'V', 'L', 'I', 'K', 'A', 'D', 'X', 'Y'],
    ['P', 'V', 'I', 'R', 'T', 'U', 'A', 'L', 'X', 'V'],
    ['R', 'E', 'Z', 'Q', 'G', 'L', 'V', 'J', 'Y', 'E'],
    ['C', 'E', 'Z', 'L', 'A', 'J', 'H', 'P', 'P', 'N'],
    ['X', 'N', 'A', 'V', 'G', 'L', 'R', 'L', 'A', 'E'],
    ['L', 'L', 'A', 'L', 'E', 'N', 'A', 'Z', 'U', 'Z'],
    ['W', 'O', 'X', 'Q', 'I', 'Z', 'J', 'L', 'I', 'U'],
    ['P', 'X', 'Y', 'K', 'A', 'D', 'L', 'C', 'N', 'E'],
    ['E', 'U', 'V', 'E', 'N', 'E', 'A', 'U', 'E', 'L'],
    ['L', 'L', 'A', 'V', 'E', 'J', 'N', 'D', 'Q', 'A']
];

const words = ['REALIDAD', 'VIRTUAL', 'LLAVE', 'PLAZA', 'VENEZUELA'];

function createWordSearch() {
    const table = document.getElementById('wordsearch');
    wordSearch.forEach((row, rowIndex) => {
        const tr = document.createElement('tr');
        row.forEach((cell, cellIndex) => {
            const td = document.createElement('td');
            td.textContent = cell;
            td.addEventListener('click', () => selectCell(td, rowIndex, cellIndex));
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
}

function selectCell(cell, rowIndex, cellIndex) {
    cell.classList.toggle('selected');
    checkForWords();
}

function checkForWords() {
    const selectedCells = document.querySelectorAll('#wordsearch td.selected');
    const selectedWord = Array.from(selectedCells).map(cell => cell.textContent).join('');

    words.forEach(word => {
        if (selectedWord.includes(word)) {
            alert(`¡Encontraste la palabra: ${word}!`);
            selectedCells.forEach(cell => cell.classList.remove('selected'));
            document.querySelector(`#word-list li:contains(${word})`).style.textDecoration = 'line-through';
        }
    });
}

createWordSearch();