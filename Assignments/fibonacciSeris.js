function fibonacciSeries(count) {
    let firstNumber = 0;
    let secondNumber = 1;

    console.log(firstNumber);
    console.log(secondNumber);

    for (let i = 3; i <= count; i++) {
        let nextNumber = firstNumber + secondNumber;
        console.log(nextNumber);
        firstNumber = secondNumber;
        secondNumber = nextNumber;
    }
}
fibonacciSeries(10);