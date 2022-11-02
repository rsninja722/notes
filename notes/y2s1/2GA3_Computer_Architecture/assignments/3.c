#include <stdio.h>

void signMagnitudeOrTwosComplement() {
    unsigned int num = -1;

    unsigned char* arr = (unsigned char*) &num;

    if(arr[0] == 255 && arr[1] == 255 && arr[2] == 255 && arr[3] == 255) {
        printf("two's complement");
    } else {
        printf("sign magnitude");
    }
}
int main() {
    unsigned int num = 0x04030201;

    unsigned char* arr = (unsigned char*) &num;

    for(int i=0;i<4;i++) {
        printf("%d ", (int)arr[i]);
    }

    if (arr[0] == 1) {
        printf("\nlittle endian\n");
    } else {
        printf("\nbig endian\n");
    }

    signMagnitudeOrTwosComplement();

    return 0;
}