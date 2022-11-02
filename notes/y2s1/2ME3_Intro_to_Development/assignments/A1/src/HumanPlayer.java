import java.util.Scanner;

public class HumanPlayer extends Player {

    public HumanPlayer(char symbol, Board board, String name) {
        super(symbol, board, name);
    }

    @Override
    public void makeMove(Board board) {
        System.out.println(name + ", please input your move");

        Scanner s = new Scanner(System.in);
        int input = s.nextInt();

        while (input < 1 || input > 7 || board.columnFull((input-1)%7)) {
            System.out.println("column full or invalid!");
            System.out.println(name + ", please input your move");
            input = s.nextInt();
        }

        board.placePiece(symbol, input-1);
    }
}
