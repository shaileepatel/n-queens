/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n, row = 0, board = new Board({n: n})) {
  // loop throught the board
  for (var i = 0; i < board.rows().length; i++) {
    board.togglePiece(row, i);
    //check if there are no conflict
    if (!board.hasAnyRowConflicts() && !board.hasAnyColConflicts()) {
      //check if row is equal to board.rows().length - 1
      if (row === board.rows().length - 1) {
        return board.rows();
      }
      //call findNRooksSolution(n, row++, board)
      return findNRooksSolution(n, ++row, board);
    } else {
      //  else change the value of that index at the board to 0
      board.togglePiece(row, i);
    }
  }
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var count = 0;

  var countCombos = function(row = 0, board = new Board({n: n})) {
    // loop through the board
    for (var i = 0; i < board.rows().length; i++) {
      board.togglePiece(row, i);
      //check if there are no conflict
      if (!board.hasAnyRowConflicts() && !board.hasAnyColConflicts()) {
        //check if row is equal to board.rows().length - 1
        if (row === board.rows().length - 1) {
          //reset current piece to 0
          board.togglePiece(row, i);
          return count += 1;
        }
        //call findNRooksSolution(n, row++, board)
        countCombos(row + 1, board);
      }
      // else change the value of that index at the board to 0
      board.togglePiece(row, i);
    }
  };

  countCombos();
  console.log('Number of solutions for ' + n + ' rooks:', count);
  return count;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
