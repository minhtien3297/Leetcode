function fizzBuzz(n: number): string[] {
    let array: string[] = []

    for (let i = 0; i < n; i++) {
        let number: number = i + 1;

        if (number % 5 === 0 && number % 3 === 0) {
            array.push('FizzBuzz');
        }
        else if (number % 5 === 0) {
            array.push('Buzz');
        }
        else if (number % 3 === 0) {
            array.push('Fizz');
        } else {
            array.push(String(number))
        }
    }

    return array;
};