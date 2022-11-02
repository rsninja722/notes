#include <stdio.h>
#include <math.h>

void printBinary(char arg) {
    printf("binary representation for %d is: ", arg);
    unsigned int num = (unsigned int) arg;
    for(int i=0;i<8;i++) {
        printf((num & (1 << (7-i))) > 0 ? "1" : "0");
    }
    printf("\n");
}

char toFloat(float arg) {
    unsigned int ret = 0;
    float exponent = floorf(log2f(fabsf(arg))) + 3;

    // case where arg is 0 or less than the range of numbers we can represent
    if (arg == 0.0) { return (char) 0; }

    // exponent
    ret |= ((int)fminf(fmaxf(exponent, (float)0b00000000), (float)0b00000111)) << 4;

    // sign
    ret |= (arg >= 0 ? 0b0000000 : 0b10000000);

    // mantissa
    float num = fabsf(arg) / powf(2,exponent-3);
    for(int i=0;i<4;i++) {
        num -= floorf(num);
        num *= 2;
        if (num >= 1) {ret |= 0b1 << (3 - i);}
    }

    return (char)ret;
}

int main() {
    printBinary(toFloat(0.0f)); // 0-000-0000
    printBinary(toFloat(0.01f)); // 0-000-0100
    printBinary(toFloat(2.375f)); // 0-100-0011
    printBinary(toFloat(0.25f)); // 0-001-0000
    printBinary(toFloat(0.265625f)); // 0-001-0001
    printBinary(toFloat(7.75f)); // 0-101-1111
    printBinary(toFloat(15.5f)); // 0-110-1111
    printBinary(toFloat(21.0f)); // 0-111-0101
    printBinary(toFloat(-0.421875f)); // 1-001-1011
    printBinary(toFloat(-1.1875f)); // 1-011-0011
    printBinary(toFloat(-15.5f)); // 1-110-1111
    printBinary(toFloat(-0.25f)); // 1-001-0000

    return 0;
}
