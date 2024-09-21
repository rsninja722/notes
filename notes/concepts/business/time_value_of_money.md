# time value of money

## rate of return

- **single period** - annual return = (dividend + capital gains) / initial cost
- **multi-period** - return for period = (end value - start value) / start value
- **arithmetic mean** - $ \frac{\sum R_t}{T}$ 
- **geometric mean** - $(\Pi (1+ R_t))^{\frac{1}{T}}-1$

### example

initial value = 100

end of year 1 = 50

end of year 2 = 100

year 1 return = (50-100)/100 = -50%

year 2 return = (100-50)/50 = 100%

arithmetic mean = (-50% + 100%) / 2 = +25%

geometric mean = ((1+-0.5) * (1+1)) ^ 1/2 - 1 = (0.5 * 2) ^ 1/2 - 1 = 1-1 = 0%

## simple interest

interest is paid only on the original amount invested

- i = initial investment
- k = annual interest rate
- n = investment horizon (years)

- **total interest** - $i\cdot k \cdot n$
- **total amount** - $1 + 1 \cdot k \cdot n$
- 

## compound interest

interest is payed on initial amount and previous accrued interest

- **interest at period n** - $i \cdot (1+k)^n - i$
- **total at period n** - $i \cdot (1+k)^n$

## future value of an annuity

- **annuity** - a series of equal payments to be made or received for a certain number of years
- **ordinary annuity** - payments occur at the end of each year
- **annuity due** - payments occur at the beginning of each year

## future value

- $FVn = PV (1 +k)^n$

- $PV$ - initial investment
- $(1+k)^n$ - future value interest factor (compounding)
- $k$ - interest
- $n$ - investment horizon

### recurring investments
- CF - payment

- pay at end of year  $FV = CF \sum_{t=1}^{n} (1+k)^{n-t}$
    - simplifies to $FV = CF \frac{(1+k)^n-1}{k}$

(multiply by (1+k) for annuity due)

## present value

to have $n$ money in the future, what deposits do you need to make

- $PV = \frac{FVn}{(1+k)^n}$

- $\frac{1}{(1+k)^n}$ - present value factor (discounting factor)

- example: to have 1000 in 5 years with 5\% interest, deposit $\frac{5000}{(1+0.05)^5}$ = 783.5

### present value of an annuity

- $PV = CF \frac{1-\frac{1}{(1+k)^n}}{k}$
- **PVIFA** = $\frac{1-\frac{1}{(1+k)^n}}{k}$ (multiply by (1+k) for annuity due)

#### loan amortization problem example

firm barrows $1000 to be repaid in 3 equal payments at the end of year for the next 3 years, annual interest rate is 6%. what is annual payment, annual interest cost, and principal repayment?

$1000 = payment x PVIFA(3yrs @ 6%)
$1000 = payment x (2.6730)
payment = 374.11

load amortization schedule

yr | payment | interest | principal repayment | remaining balance
---|---|---|---|---
1 | 374.11 | 60 | 314.11 | 685.89
2 | 374.11 | 41.15 | 332.96 | 352.93
3 | 374.11 | 21.18 | 352.93 | 0

## effective annual interest rate (EAR)

interest is payed out at different rates (daily, monthly, quarterly, annually, ect.)

- $m$ = number of times interest is payed out each year
- $k$ = interest rate

- $EAR = (1+\frac{k}{m})^m-1$

### example

deposit $1000 for one year at 10%

- annually - $FV = 1000 \cdot 1.1 = 1100$
- semi-annually - $FV = 1000 \cdot (1 + \frac{0.1}{2})^2 = 1102.5$
- quarterly - $FV = 1000 \cdot (1 + \frac{0.1}{4})^4 = 1103.81$

## application examples

