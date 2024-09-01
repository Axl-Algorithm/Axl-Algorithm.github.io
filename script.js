const wordSearch = [
    ['O', 'H', 'V', 'L', 'I', 'K', 'A', 'D', 'X', 'Y'],
    ['P', 'E', 'X', 'P', 'R', 'E', 'S', 'S', 'X', 'Ñ'],
    ['G', 'E', 'Z', 'A', 'M', 'L', 'V', 'J', 'Y', 'S'],
    ['C', 'H', 'Z', 'X', 'P', 'J', 'H', 'P', 'P', 'H'],
    ['X', 'N', 'A', 'L', 'A', 'L', 'R', 'L', 'A', 'A'],
    ['L', 'H', 'I', 'R', 'J', 'Q', 'A', 'Z', 'U', 'W'],
    ['W', 'L', 'X', 'I', 'K', 'Z', 'J', 'L', 'I', 'A'],
    ['P', 'X', 'A', 'S', 'S', 'R', 'L', 'C', 'N', 'R'],
    ['E', 'U', 'V', 'V', 'N', 'E', 'M', 'U', 'E', 'M'],
    ['I', 'Q', 'A', 'L', 'E', 'J', 'N', 'A', 'Q', 'A']
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
