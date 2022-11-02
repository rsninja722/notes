import java.util.Random;

public class AIPlayer extends Player {
    public AIPlayer(char symbol, Board board, String name) {
        super(symbol, board, name);
    }

    @Override
    public void makeMove(Board board) {
        int win = board.getWinningColumn(symbol);
        if(win != -1) {
            board.placePiece(symbol, win);
            return;
        }

        int block = board.getBlockingColumn(symbol);
        if(block != -1) {
            board.placePiece(symbol, block);
            return;
        }

        Random r = new Random();
        int move = r.nextInt(7);
        while (board.columnFull(move)) {
            move = (move +1) % 7;
        }
        board.placePiece(symbol, move);
    }
}
