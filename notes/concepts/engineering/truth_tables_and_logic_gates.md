# truth tables and logic gates

## negation / $$\lnot$$

<details>
<summary>truth table</summary>

$$a$$ | $$\neg a$$ 
:-: | :-: 
T | F 
F | T 
</details>


## conjunction / and / $$\land$$

abstract gate

<svg version="1.1" width="180" height="100" xmlns="http://www.w3.org/2000/svg">
	<text x="130" y="50" style="font-family:Arial;font-size:11px;text-anchor:start" dominant-baseline="middle" transform="rotate(0, 130, 50)">out</text>
	<text x="30" y="60" style="font-family:Arial;font-size:11px;text-anchor:start" dominant-baseline="middle" transform="rotate(0, 30, 60)">b</text>
	<text x="30" y="40" style="font-family:Arial;font-size:11px;text-anchor:start" dominant-baseline="middle" transform="rotate(0, 30, 40)">a</text>
	<line x1="50" y1="40" x2="65" y2="40" style="stroke-linecap:square;stroke-width:2" />
	<line x1="50" y1="60" x2="65" y2="60" style="stroke-linecap:square;stroke-width:2" />
	<path d="M 65,40 M 65,30 L 65,70 L 89,70 M 65,30 L 89,30 M 89,70 A 5,5 90 0 0 89,30" style="fill-opacity:0;stroke-linecap:square;stroke-width:2" />
	<line x1="111" y1="50" x2="120" y2="50" style="stroke-linecap:square;stroke-width:2" />
</svg>

gate made of transistors

<svg version="1.1" width="160" height="240" xmlns="http://www.w3.org/2000/svg">
	<line x1="80" y1="180" x2="110" y2="180" style="stroke-linecap:square;stroke-width:2" />
	<text x="80" y="35" style="font-family:Arial;font-size:12px;text-anchor:middle" dominant-baseline="baseline" transform="rotate(0, 80, 35)">+5V</text>
	<line x1="80" y1="40" x2="80" y2="60" style="stroke-linecap:square;stroke-width:2" />
	<line x1="80" y1="190" x2="80" y2="208" style="stroke-linecap:square;stroke-width:2" />
	<line x1="72" y1="208" x2="88" y2="208" style="stroke-linecap:square;stroke-width:2" />
	<line x1="75" y1="214" x2="85" y2="214" style="stroke-linecap:square;stroke-width:2" />
	<line x1="78" y1="220" x2="82" y2="220" style="stroke-linecap:square;stroke-width:2" />
	<line x1="80" y1="110" x2="80" y2="130" style="stroke-linecap:square;stroke-width:2" />
	<line x1="80" y1="130" x2="80" y2="147" style="stroke-linecap:square;stroke-width:2" />
	<line x1="80" y1="173" x2="80" y2="190" style="stroke-linecap:square;stroke-width:2" />
	<line x1="40" y1="160" x2="66" y2="160" style="stroke-linecap:square;stroke-width:2" />
	<line x1="65.5" y1="152" x2="65.5" y2="168" style="stroke-linecap:square;stroke-width:3" />
	<line x1="80" y1="147" x2="65.5" y2="156" style="stroke-linecap:square;stroke-width:2" />
	<line x1="65.5" y1="164" x2="80" y2="173" style="stroke-linecap:square;stroke-width:2" />
	<ellipse cx="70" cy="160" rx="16" ry="16" style="fill-opacity:0;stroke-width:2" />
	<path d="M 73,150 L 75,154 L 68,155 L 72,149 L 73,151" style="fill-opacity:1;stroke-linecap:square;stroke-width:2" />
	<line x1="80" y1="60" x2="80" y2="77" style="stroke-linecap:square;stroke-width:2" />
	<line x1="80" y1="103" x2="80" y2="110" style="stroke-linecap:square;stroke-width:2" />
	<line x1="40" y1="90" x2="66" y2="90" style="stroke-linecap:square;stroke-width:2" />
	<line x1="65.5" y1="82" x2="65.5" y2="98" style="stroke-linecap:square;stroke-width:3" />
	<line x1="80" y1="77" x2="65.5" y2="86" style="stroke-linecap:square;stroke-width:2" />
	<line x1="65.5" y1="94" x2="80" y2="103" style="stroke-linecap:square;stroke-width:2" />
	<ellipse cx="70" cy="90" rx="16" ry="16" style="fill-opacity:0;stroke-width:2" />
	<path d="M 73,80 L 75,84 L 68,85 L 72,79 L 73,81" style="fill-opacity:1;stroke-linecap:square;stroke-width:2" />
	<text x="120" y="180" style="font-family:Arial;font-size:11px;text-anchor:start" dominant-baseline="middle" transform="rotate(0, 120, 180)">out</text>
	<text x="20" y="160" style="font-family:Arial;font-size:11px;text-anchor:start" dominant-baseline="middle" transform="rotate(0, 20, 160)">b</text>
	<text x="20" y="90" style="font-family:Arial;font-size:11px;text-anchor:start" dominant-baseline="middle" transform="rotate(0, 20, 90)">a</text>
	<ellipse cx="80" cy="180" rx="2" ry="2" style="fill-opacity:1;stroke-width:2" />
</svg>

truth table

$$a$$ | $$b$$ | $$a \land b$$ 
:-: | :-: | :-: 
T | T | T 
T | F | F 
F | T | F 
F | F | F

## nand / $$\barwedge$$
<details>
<summary>truth table</summary>

$$a$$ | $$b$$ | $$a \barwedge b$$ 
:-: | :-: | :-: 
T | T | F 
T | F | T 
F | T | T 
F | F | T 
</details>

## disjunction / or / $$\lor$$
<details>
<summary>truth table</summary>

$$a$$ | $$b$$ | $$a \lor b$$ 
:-: | :-: | :-: 
T | T | T 
T | F | T 
F | T | T 
F | F | F 
</details>

## exclusive disjunction / xor / $$\oplus$$
<details>
<summary>truth table</summary>

$$a$$ | $$b$$ | $$a \oplus b$$ 
:-: | :-: | :-: 
T | T | F 
T | F | T 
F | T | T 
F | F | F 
</details>

## implication / $$\rightarrow$$

can be written as 
- if A then B
- if A, B
- B unless ¬A
- B if A
- B whenever A
- B follows from A
- A implies B
- A only if B
- B when A
- A is sufficient for B 
- B is necessary for A 
- a necessary condition for A is B
- B is a necessary condition for A 
- a sufficient condition for B is A
- A is a sufficient condition for B 

<details>
<summary>truth table</summary>

$$a$$ | $$b$$ | $$a \rightarrow b$$ 
:-: | :-: | :-: 
T | T | T 
T | F | F 
F | T | T 
F | F | T 
</details>

## biconditional / $$\leftrightarrow$$ / $$\equiv$$

- if and only if
- a is necessary and sufficient for b
- if a then b, and conversely
- a iff b

<details>
<summary>truth table</summary>

$$a$$ | $$b$$ | $$a \leftrightarrow b$$
:-: | :-: | :-:
T | T | T
T | F | F
F | T | F
F | F | T
</details>