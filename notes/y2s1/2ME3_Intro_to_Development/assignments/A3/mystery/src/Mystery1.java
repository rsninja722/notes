import java.util.ArrayList;

public class Mystery1 {

    private ArrayList<String[]> S;

    public Mystery1() {
        S = new ArrayList<>();
    }

    public void f1(String s1, String s2) {
        if (!s1.equals(s2)) {
            S.add(new String[]{s1, s2});
        }
    }

    // +(x : X|x ∈ S ∧ x.s2 = s : 1)
    // count all occurrences where and element of S has its s2 equal to s
    public int f2(String s) {
        int count = 0;
        for (var i = 0; i < S.size(); i++) {
            if (S.get(i)[1].equals(s)) {
                count += 1;
            }
        }
        return count;
    }

    // ∃(L :String[ ]| L[0] = s1 ∧ L[|L| − 1] = s2 : P (L) ∧ X(L[|L| − 1], L[0]) ∈ S)
    // out of the strings L where L[0] = s1 and L[|L| − 1] = s2, there exists: an L where P (L) is true and  X(L[|L| − 1], L[0]) is in S
    // return whether or not there is a sequence of tuples in S that you can follow from the second s to the first s in
    // another tuple to get from s1 to s2, and there is a tuple in S where the first string is s2 and the second s1
    public boolean f3(String s1, String s2) {
        boolean loopBack = false;
        for (var i = 0; i < S.size(); i++) {
            if(S.get(i)[0].equals(s2) && S.get(i)[1].equals(s1)) {
                loopBack = true;
            }
        }
        if(!loopBack) {
            return false;
        }

        return followLink(s2, s1, new ArrayList<>());
    }

    private boolean followLink(String end, String next, ArrayList<Integer> memo) {
        ArrayList<Integer> s2 = finds1(next);

        for(int i=0;i<s2.size();i++) {
            if (memo.contains(s2.get(i))) {
                continue;
            }
            String nextS = S.get(s2.get(i))[1];
            if (nextS.equals(end)) {
                return true;
            }
            memo.add(s2.get(i));
            if(followLink(end, nextS, memo)) {
                return true;
            }
        }
        return false;
    }

    private ArrayList<Integer> finds1(String s) {
        ArrayList<Integer> ret = new ArrayList<>();
        for (var i = 0; i < S.size(); i++) {
            if (S.get(i)[0].equals(s)) {
                ret.add(i);
            }
        }
        return ret;
    }

    // ∀(i : N|0 < i < |L| : X(L[i − 1], L[i]) ∈ S)
    private boolean P(String L) {
        for (int i = 1; i < L.length(); i++) {
            String[] l = {String.valueOf(L.charAt(i - 1)), String.valueOf(L.charAt(i))};
            if (!S.contains(l)) {
                return false;
            }
        }
        return true;
    }
}
