const board = document.getElementById('board');

const initialBoard = [
  ['br', 'bn', 'bb', 'bq', 'bk', 'bb', 'bn', 'br'],
  ['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp'],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp'],
  ['wr', 'wn', 'wb', 'wq', 'wk', 'wb', 'wn', 'wr'],
];

const pieceSymbols = {
  wp: '♙',
  wr: '♖',
  wn: '♘',
  wb: '♗',
  wq: '♕',
  wk: '♔',
  bp: '♟',
  br: '♜',
  bn: '♞',
  bb: '♝',
  bq: '♛',
  bk: '♚',
};

for (let row = 0; row < 8; row += 1) {
  for (let col = 0; col < 8; col += 1) {
    const square = document.createElement('div');
    square.classList.add('square');

    if ((row + col) % 2 === 0) {
      square.classList.add('light');
    } else {
      square.classList.add('dark');
    }

    const pieceCode = initialBoard[row][col];

    if (pieceCode) {
      const pieceElement = document.createElement('span');
      pieceElement.classList.add('piece');
      pieceElement.classList.add(pieceCode[0] === 'w' ? 'white-piece' : 'black-piece');
      pieceElement.textContent = pieceSymbols[pieceCode];
      square.appendChild(pieceElement);
    }

    board.appendChild(square);
  }
}
