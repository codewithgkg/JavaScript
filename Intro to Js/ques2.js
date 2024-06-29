
        // https://stanford.edu/~cpiech/karel/ide.html
        function main(){

            putBeeper();
            diagonalMoveAndBeeper();
            diagonalMoveAndBeeper();
            diagonalMoveAndBeeper();
            diagonalMoveAndBeeper();
        }

        function diagonalMoveAndBeeper() {
            move();
            turnLeft();
            move();
            putBeeper();
            turnRight();
        }
    