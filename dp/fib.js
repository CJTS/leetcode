function fib(n) { // Abordagem top down com memorização
    if(dp[n]) {
        return dp[n]
    }

    if(n === 0 || n === 1) {
        return 1;
    }

    dp[n] = fib(n - 1) + fib(n - 2)

    return dp[n];
}

function fibBU(n) { // n > 2
    let n1 = 1;
    let n2 = 1;
    for (let i = 2; i < n; i++) {
        n1 = n2;
        n2 = n1 + n2;
    }

    return n2;
}

// 1 1 2 3 5 8 

fib(6) = fib(5) + fib(4);

// Fib 5 no fib 6
fib(5) = fib(4) + fib(3);
fib(4) = fib(3) + fib(2);
fib(3) = fib(2) + fib(1);
fib(2) = fib(1) + fib(0);

// fib 2 no fib 4
fib(2) = fib(1) + fib(0);

// fib 3 no fib 5
fib(3) = fib(2) + fib(1);
fib(2) = fib(1) + fib(0);

// fib 4 no fib 6
fib(4) = fib(3) + fib(2);
fib(3) = fib(2) + fib(1);
fib(2) = fib(1) + fib(0);