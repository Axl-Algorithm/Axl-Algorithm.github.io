const wordSearch = [
    ['O', 'H', 'V', 'L', 'I', 'K', 'A', 'D', 'X', 'Y'],
    ['P', 'V', 'I', 'Q', 'K', 'U', 'Z', 'L', 'X', 'S'],
    ['G', 'E', 'Z', 'E', 'G', 'L', 'V', 'J', 'Y', 'H'],
    ['C', 'H', 'Z', 'X', 'A', 'J', 'H', 'P', 'P', 'A'],
    ['X', 'N', 'A', 'P', 'G', 'L', 'R', 'L', 'A', 'W'],
    ['L', 'L', 'A', 'R', 'E', 'N', 'A', 'Z', 'U', 'A'],
    ['W', 'O', 'X', 'E', 'A', 'Z', 'J', 'L', 'I', 'R'],
    ['P', 'X', 'Y', 'S', 'A', 'R', 'L', 'C', 'N', 'M'],
    ['E', 'U', 'V', 'S', 'N', 'E', 'M', 'U', 'E', 'A'],
    ['L', 'L', 'A', 'V', 'E', 'J', 'N', 'A', 'Q', 'J']
];

const words = ['SHAWARMA', 'EXPRESS', 'LLAVE'];

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
