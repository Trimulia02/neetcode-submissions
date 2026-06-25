class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i = 0; i < 9; i++) {
            let visitedRow = new Set();
            let visitedCol = new Set();
            for (let j = 0; j < 9; j++) {
                let row = board[i][j];
                let col = board[j][i];
                if (row !== ".") {
                    if (visitedRow.has(row)) return false;
                    else {
                        visitedRow.add(row);
                    }
                }
                if (col !== ".") {
                    if (visitedCol.has(col)) return false;
                    else {
                        visitedCol.add(col);
                    }
                }
            }
        }
        for (let boxCol = 0; boxCol < 3; boxCol++) {
            for (let boxRow = 0; boxRow < 3; boxRow++) {
                let visitedBox = new Set();
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        let curr = board[boxRow * 3 + i][boxCol * 3 + j];
                        if (curr !== ".") {
                            if (visitedBox.has(curr)) return false;
                            else {
                                visitedBox.add(curr);
                            }
                        }
                    }
                }
            }
        }
        return true
    }
}
