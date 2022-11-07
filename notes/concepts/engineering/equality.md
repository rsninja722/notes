# equality

used to show that two expressions are equal without calculating their values

laws:

- **substitution** - [$\frac{E}{E[v \coloneqq  F]}$](?note=notes\concepts\engineering\substitution.md)
- **reflexivity** - $x = x$
- **symmetry** - $(x = y) = (y = x)$
- **transitivity** - $\frac{X = Y, Y = Z}{X = Z}$
- **Leibnitz rule of interference** - $\frac{X \equiv Y}{E[z \coloneqq X] \equiv E[z \coloneqq Y]} \forall E$
    

<details>
<summary>Leibnitz example</summary>

Assume that $b + 3 = c + 5$ is a theorem. Then $d + b + 3  = d + c + 5$ is a theorem by Leibnitz with $X: b+3, Y: c+5, E : d +z$ and $z : z$

</details>

# equality vs equivalence

$=$ has a higher priority than $\equiv$

$=$ is conjunctional meaning $a = b = c$ is an abbreviation for $a = b \land b = c$

$\equiv$ is associative meaning $a \equiv b \equiv c$ is an abbreviation for $(a \equiv b) \equiv c$ or $a \equiv (b \equiv c)$

cannot be both associative and conjunctional