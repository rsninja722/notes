import java.util.ArrayList;

public class Board {

	private final int NUM_OF_COLUMNS = 7;
	private final int NUM_OF_ROW = 6;

	private int[][] board;

	// used to check the 8 tiles adjacent to a tile
	private int[][] dirs = {{ 1, 0 }, { 0, 1 }, { 0, -1 }, { -1, 0 }, { 1, 1 }, { -1, 1 }, { 1, -1 }, { -1, -1 }};

	private char p1Symbol;
	private char p2Symbol;

	/* 
	 * The board object must contain the board state in some manner.
	 * You must decide how you will do this.
	 * 
	 * You may add addition private/public methods to this class is you wish.
	 * However, you should use best OO practices. That is, you should not expose
	 * how the board is being implemented to other classes. Specifically, the
	 * Player classes.
	 * 
	 * You may add private and public methods if you wish. In fact, to achieve
	 * what the assignment is asking, you'll have to
	 * 
	 */
	
	public Board() {
		board = new int[NUM_OF_ROW][NUM_OF_COLUMNS];
		p1Symbol = '\u0000';
		p2Symbol = '\u0000';
		reset();
	}
	
	public void printBoard() {
		for (int r = 0; r < NUM_OF_ROW; r++) {
			System.out.print("|");
			for (int c = 0; c < NUM_OF_COLUMNS; c++) {
				int cell = board[r][c];
				if(cell == 0) {
					System.out.print(r == NUM_OF_ROW-1 ? "_" : " ");
				} else if(cell == 1) {
					System.out.print(p1Symbol);
				} else if(cell == 2) {
					System.out.print(p2Symbol);
				}
				System.out.print("|");
			}
			System.out.println();
		}
	}
	
	public boolean containsWin() {
		for (int r = 0; r < NUM_OF_ROW; r++) {
			for (int c = 0; c < NUM_OF_COLUMNS; c++) {
				// don't check empty tiles
				if(board[r][c] == 0) {
					continue;
				}
				// go through all adjacent tiles
				for (int i = 0; i < 8; i++) {
					int dr = dirs[i][0] + r;
					int dc = dirs[i][1] + c;
					// make sure new position is within board
					if(dr > -1 && dr < NUM_OF_ROW && dc > -1 && dc < NUM_OF_COLUMNS) {
						// recursively check for 4 in a row in the given direction
						if (containsWinStep(board[r][c], i, 1, dr, dc)) {
							return true;
						}
					}
				}
			}
		}
		return false;
	}

	// recursive step for containsWin
	private boolean containsWinStep(int type, int dir, int count, int r, int c) {
		if(board[r][c] == type) {
			// 4 in a row
			if(count == 3) {
				return true;
			}
		// type doesn't match so stop
		} else {
			return false;
		}

		// continue checking in the same direction
		int dr = dirs[dir][0] + r;
		int dc = dirs[dir][1] + c;
		if(dr > -1 && dr < NUM_OF_ROW && dc > -1 && dc < NUM_OF_COLUMNS) {
			return containsWinStep(type, dir, count+1, dr, dc);
		}

		return false;
	}
	
	public boolean isTie() {
		// not a tie if any tile is empty
		for (int r = 0; r < NUM_OF_ROW; r++) {
			for (int c = 0; c < NUM_OF_COLUMNS; c++) {
				if(board[r][c] == 0) {
					return false;
				}
			}
		}

		// only a tie if the full board is not a winning board
		return !containsWin();
	}
	
	public void reset() {
		for (int r = 0; r < NUM_OF_ROW; r++) {
			for (int c = 0; c < NUM_OF_COLUMNS; c++) {
				board[r][c] = 0;
			}
		}
	}

	public boolean columnFull(int col) {
		for (int r = 0; r < NUM_OF_ROW; r++) {
			if(board[r][col] == 0) {
				return false;
			}
		}
		return true;
	}

	// returns -1 for no winning column, otherwise returns column number
	public int getWinningColumn(char symbol) {
		for (int c = 0; c < NUM_OF_COLUMNS; c++) {
			// ignore full columns
			if(columnFull(c)) {
				continue;
			}
			// see if placing a piece in the column results as a win
			placePiece(symbol, c);
			if(containsWin()) {
				removePiece(c);
				return c;
			}
			removePiece(c);
		}
		return -1;
	}

	// returns -1 for no blocking column, otherwise returns column number
	public int getBlockingColumn(char symbol) {
		// see if the other player could win in the current state, if so, the
		// column they could play in to win is the one that would be a blocking move
		char otherSymbol = p1Symbol == symbol ? p2Symbol : p1Symbol;
		return getWinningColumn(otherSymbol);
	}

	public void placePiece(char symbol, int col) {
		// set the p1Symbol to the first type of symbol placed, and p2Symbol to the second placed
		if(p1Symbol == '\u0000') {
			p1Symbol = symbol;
		} else if(p2Symbol == '\u0000' && p1Symbol != symbol) {
			p2Symbol = symbol;
		}

		for (int r = 0; r < NUM_OF_ROW; r++) {
			if(board[r][col] != 0) {
				board[r-1][col] = p1Symbol == symbol ? 1 : 2;
				return;
			}
		}
		board[NUM_OF_ROW-1][col] = p1Symbol == symbol ? 1 : 2;
	}

	// removes the top piece of a column
	private void removePiece(int col) {
		for (int r = 0; r < NUM_OF_ROW; r++) {
			if(board[r][col] != 0) {
				board[r][col] = 0;
				return;
			}
		}
	}
}
