@ ---------------------------------------
@   Data Section
@ ---------------------------------------
.data
value: .word 0xBD5B7DDE
@ ---------------------------------------
@   Code Section
@ ---------------------------------------
.text
.global main
.extern int_out

main:
    @ push the return address (lr) and a
    @ dummy register (ip) to the stack
    push {ip, lr}

    @ load the address of variable value into r0
    ldr r0, =value  @load address of value

    @ shift all bits of r0 to the right by 1 place
    mov r0, r0, ASR #1

    @ branch to int_out, passing r0 as argument
    bl int_out

    @ pop the return address into the program counter
    pop {ip, pc}