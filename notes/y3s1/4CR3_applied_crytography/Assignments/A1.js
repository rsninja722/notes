class LFSR {
    state = [];

    constructor(initial,coefficients) {
        this.state = initial.split("").map(x=>parseInt(x));
        this.coefficients = coefficients.split("").map(x=>parseInt(x));
    }

    next() {
        let newBit = 0;
        let sEnd = this.state.length - 1;
        let cEnd = this.coefficients.length - 1;
        for (let i = 0; i < this.coefficients.length; i++) {
            newBit += this.state[sEnd - i] * this.coefficients[cEnd - i];
        }
        this.state.push(newBit % 2);
    }

    encode(plaintext) {
        console.log("Plaintext bits: ",plaintext);
        console.log("Plaintext ASCII: ",this.binaryToAscii(plaintext));

        let ciphertext = "";
        while (this.state.length < plaintext.length) {
            this.next();
        }
        for (let i = 0; i < plaintext.length; i++) {
            let bit = parseInt(plaintext[i]);   
            ciphertext += (bit ^ this.state[i]).toString();
        }

        console.log("Ciphertext bits: ",ciphertext);
        console.log("Ciphertext ASCII: ",this.binaryToAscii(ciphertext));
        return ciphertext;
    }

    binaryToAscii(binary) {
        let ascii = "";
        for (let i = 0; i < binary.length; i += 8) {
            let byte = binary.substr(i,8);
            ascii += String.fromCharCode(parseInt(byte,2));
        }
        return ascii;
    }

    asciiToBinary(ascii) {
        let binary = "";
        for (let i = 0; i < ascii.length; i++) {
            let byte = ascii.charCodeAt(i).toString(2).padStart(8,"0");
            binary += byte;
        }
        return binary;
    }
}

function sanityTest() {
    let lfsr = new LFSR("011001","110101");
    for (let i = 0; i < "00001001100100001001100100".length; i++) {
        lfsr.next();
    }
    console.log(lfsr.state);
}

function oneA() {
    let lfsr = new LFSR("00110110010101101111","11010100010001101010");
    let encoded = lfsr.encode("00111101011100111000000111001100010011010110110100");
    let decoded = lfsr.encode(encoded);
}




// sanityTest();

// oneA();


function truddy() {
    let initial = "00110110010101101111";
    let length = initial.length;
    let testLength = length;
    // generate 2n bits of the keystream
    let lfsr = new LFSR(initial,"11010100010001101010");
    for(var i = 0;i<testLength;i++) {
        lfsr.next();
    }
    let keystream = lfsr.state.join("");

    // brute force coefficients

    let tests = 0;

    for(var i = 0;i<Math.pow(2,length);i++) {
        let coefficients = i.toString(2).padStart(length,"0");
        lfsr = new LFSR(initial,coefficients);

        for(var j = 0;j<testLength;j++) {
            lfsr.next();
        }

        let candidate = lfsr.state.join("");
        if(candidate == keystream) {
            console.log("Found coefficients: ",coefficients);
            // break;
        }

        tests++;
        if(tests % 100000 == 0) {
            console.log("Tests: ",tests);
        }
    }

}

// truddy();

let lfsr = new LFSR("00110110010101101111","11010100010001101010");
let encoded = lfsr.encode("00111101011100111000000111001100010011010110110100");

// xor plaintext with ciphertext to get keystream
let keystream = "";
for (let i = 0; i < encoded.length; i++) {
    let bit = parseInt(encoded[i]);
    keystream += (bit ^ parseInt("00111101011100111000000111001100010011010110110100"[i])).toString();
}

console.log("Keystream: ",keystream);
console.log("keystream og:", lfsr.state.join(""));




// ------------------------------------------------

class Affine {

    constructor(a,b) {
        this.a = a;
        this.b = b;
    }

    encode(plaintext) {
        plaintext = plaintext.toLowerCase();
        let ciphertext = "";
        for (let i = 0; i < plaintext.length; i++) {
            let char = plaintext.charCodeAt(i) - 97;
            let encoded = (this.a * char + this.b) % 26;
            ciphertext += String.fromCharCode(encoded + 97);
        }
        return ciphertext;
    }

    decode(ciphertext) {
        let plaintext = "";
        let aInv = this.modInverse(this.a,26);
        for (let i = 0; i < ciphertext.length; i++) {
            let char = ciphertext.charCodeAt(i) - 97;
            let decoded = (aInv * (char - this.b)) % 26;
            if (decoded < 0) {
                decoded += 26;
            }
            plaintext += String.fromCharCode(decoded + 97);
        }
        return plaintext;
    }


    modInverse(a, m) {
        for (let i = 0; i < m; i++) {
            if ((a * i) % m == 1) {
                return i;
            }
        }
    }
}

function strip(text) {
    return text.replace(/[^a-zA-Z]/g,"").toLowerCase();
}

function charFreq(text) {
    let freq = new Array(26);
    for (let i = 0; i < text.length; i++) {
        let char = text[i].toLowerCase().charCodeAt(0);
        // toss out non-alphabetic characters
        if (char < 97 || char > 122) {
            continue;
        }
        char -= 97;
        if (freq[char] == undefined) {
            freq[char] = 0;
        }
        freq[char]++;
    }
    return freq;
}

function two() {
    let affine = new Affine(5,8);
    let text = "recalltheaffinecipherfromthelectureforanalphabetoflengthmwhereeachletterisidentifiedwithanelementofzmthekeyisapairabzmaplaintextxzmisencryptedusingthetransformaxbmodmandaciphertextyzmisdecryptedusingthetransformaybmodmisthisencryptionschemevulnerabletothefrequencyanalysisattackexplain";
    let plainFreq = charFreq(text);
    let encoded = affine.encode(text);
    console.log(encoded);
    console.log(affine.decode(encoded));
    let encodedFreq = charFreq(encoded);

    for(var i=0;i<26;i++) {
        console.log(String.fromCharCode(i+97),plainFreq[i],encodedFreq[i]);
    }

    
    plainFreq.sort((a,b)=>b-a);
    encodedFreq.sort((a,b)=>b-a);
    
    console.log(plainFreq);
    console.log(encodedFreq);
}

two();