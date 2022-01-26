#  credit goes to Krish12003#5393 on discord: https://colab.research.google.com/drive/1syNsfL6h9hOoG_9PteqKuBVacz2Dnihh?usp=sharing#scrollTo=IDzTOiVVZYnh


# DO NOT TOUCH THIS CELL JUST RUN IT
class Expr:
    def __init__(self, *args, sep, func, binOp=True):
        if not binOp:
            self.x = args[0]

        self.elements = args
        self.sep = sep
        self.func = func
        self.binOp = binOp

    def collect(self):
        row = [self]

        for i in reversed(self.elements):
            if isinstance(i, Expr):
                row = [*i.collect(), *row]
            else:
                row = [i, *row]

        return row

    def eval(self):
        if not self.binOp:
            return self.func(self.x)
        else:
            res = (
                self.elements[0]
                if not isinstance(self.elements[0], Expr)
                else self.elements[0].eval()
            )
            for i in self.elements[1:]:
                res = self.func(res, i if not isinstance(i, Expr) else i.eval())

            return res

    def __str__(self):
        if not self.binOp:
            return f"{self.sep} {self.x}"

        return f" {self.sep} ".join([(str(x)) for x in self.elements])


def Neg(x):
    return Expr(x, sep="\\neg", func=lambda x: not x, binOp=False)


def Xor(*args):
    return Expr(*args, sep="\\oplus", func=lambda x, y: x ^ y)


def And(*args):
    return Expr(*args, sep="\\land", func=lambda x, y: x and y)


def Or(*args):
    return Expr(*args, sep="\\lor", func=lambda x, y: x or y)


def Implies(*args):
    return Expr(*args, sep="\\rightarrow", func=lambda x, y: not x or y)


def gen_bool_perms(n):
    for i in range(int(2 ** n)):
        yield [bool([1, 0][int(e)]) for e in bin(i)[2:].zfill(n)]


def is_op(t):
    return t.startswith("\\")


def pres(t):
    return {
        "\\neg": 5,
        "\\land": 4,
        "\\lor": 3,
        "\\oplus": 3,
        "\\rightarrow": 2,
    }.get(t, 0)


def tex_to_postfix(x):
    x = x.replace("\n", "\\n").replace("(", " ( ").replace(")", " ) ")
    # print([e for e in x.split(" ") if e])

    vs = []
    ops = []
    for i in [e for e in x.split(" ") if e]:
        # If variable or boolean
        if i.lower() in "abcdefghijklmnopqrstuvwxyz" or i in ["True", "False"]:
            vs.append(i)

        # Brackets
        elif "(" in i:
            ops.append("(")

        elif ")" in i:
            while True:
                popped = ops.pop()
                if popped == "(":
                    break
                else:
                    vs.append(popped)

        # Operators in presedence order
        else:
            while ops and pres(i) <= pres(ops[-1]):
                vs.append(ops.pop())
            ops.append(i)

    for i in range(len(ops)):
        vs.append(ops.pop())

    return vs


def build_expr(tokens):
    """
    Given postfix list builds an instance of an Expr.
    """
    stack = []

    for t in tokens:
        if not is_op(t):
            stack.append({"True": True, "False": False}.get(t, t))
        else:
            if t == "\\neg":
                stack.append(Neg(stack.pop()))
            else:
                r, l = stack.pop(), stack.pop()
                if t == "\\land":
                    stack.append(And(l, r))
                elif t == "\\lor":
                    stack.append(Or(l, r))
                elif t == "\\oplus":
                    stack.append(Xor(l, r))
                elif t == "\\rightarrow":
                    stack.append(Implies(l, r))

    return stack.pop()


# pf = tex_to_postfix("(p \lor q) \oplus (p \lor \neg q)")
# ex = build_expr(pf)
# print("AST Build:", pf, " | ", ex)


def get_variables(pf):
    return list(
        sorted(
            set(
                [
                    e
                    for e in pf
                    if e
                    not in [
                        "\\oplus",
                        "\\neg",
                        "\\land",
                        "\\lor",
                        "\\rightarrow",
                        "(",
                        ")",
                    ]
                ]
            )
        )
    )


def var_eq_gen(pf):
    for i in gen_bool_perms(len(get_variables(pf))):
        hmap = {}
        for j in zip(get_variables(pf), i):
            hmap[j[0]] = str(j[1])
        t = [hmap.get(e, e) for e in pf]
        ex = build_expr(t)
        yield ex


def tex_to_table(tex):
    pf = tex_to_postfix(tex)
    ex = build_expr(pf)
    rows = [[f"$${str(e)}$$" for e in ex.collect()]]
    rows.append([":-:"] * len(rows[0]))
    for ex in var_eq_gen(pf):

        # print("F", ex)
        rows.append(
            [["F", "T"][e.eval() if isinstance(e, Expr) else e] for e in ex.collect()]
        )
    rows = list(zip(*sorted(set(list(zip(*rows))), key=lambda x: (len(x[0]), x[0]))))

    return " |\n".join([" | ".join([str(e) for e in row]) for row in rows]) + " |"

print(tex_to_table("a \\rightarrow b"))