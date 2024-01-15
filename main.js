function task1() {
    let start = parseInt(prompt("Write start range"))
    let end = parseInt(prompt("Write end range"))
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    alert(`Sum of numbers in the range is: ${sum}`);
}

function task2() {

    let num1 = parseInt(prompt("Enter the first number"));
    let num2 = parseInt(prompt("Enter the second number"));

    if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        alert("Please enter valid positive integers.");
        return;
    }

    while (num2 !== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }

    alert(`Greatest divisor is: ${num1}`);

}
function task3() {
    let number1 = parseInt(prompt("Write number:"));

    if (!isNaN(number1) && number1 != 0) {

        let commonDivisors = [];

        let divisor = 1;
        while (divisor <= number1) {
            if (number1 % divisor == 0) {
                commonDivisors.push(divisor);
            }
            divisor++;
        }

        console.log(`Common divisors for ${number1} : ${commonDivisors.join(', ')}`);
    } else {
        alert("Please enter the correct numbers that are not equal 0.");
    }

}

function task4() {
    let number = parseInt(prompt("Enter a non-negative integer"));

    if (isNaN(number) || !Number.isInteger(number) || number < 0) {
        alert("Please enter a valid non-negative integer.");
        return;
    }

    let digitCount = 0;

    while (number > 0) {
        number = Math.floor(number / 10);
        digitCount++;
    }

    alert(`The number of digits is: ${digitCount}`);
}
function task5() {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < 10; i++) {
        let numbers = parseFloat(prompt("Enter a number"));

        if (isNaN(numbers)) {
            alert("Please enter a valid number.");
            return;
        }

        if (numbers > 0) {
            positiveCount++;
        } else if (numbers < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }

        if (numbers % 2 == 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    alert(`Positive Numbers: ${positiveCount}\nNegative Numbers: ${negativeCount}\nZeros: ${zeroCount}\nEven Numbers: ${evenCount}\nOdd Numbers: ${oddCount}`)
}
function task6() {
    let choice
    do {
        let first_num = parseInt(prompt('Write first number:'))
        let second_num = parseInt(prompt('Write second number:'))
        let operation = prompt("Write operation(+-*/)")
        switch (operation) {
            case "+":
                alert(first_num + second_num)
                break
            case "-":
                alert(first_num - second_num)
                break
            case "*":
                alert(first_num * second_num)
                break
            case "/":
                if (first_num != 0 && second_num != 0) {
                    alert(first_num / second_num)
                }
                else {
                    alert("You can't divide by 0")
                }
                break
        }
        choice = prompt(`Do you want to continue:(Yes/No)`)
    }
    while (choice.toLowerCase() != 'no')

}
function task7() {
    let number = prompt("Enter a number");
    let landslide = parseInt(prompt("Enter the number of positions to shift"));

    if (isNaN(landslide)) {
        alert("Please enter a valid number for shift amount.");
        return;
    }

    let numberLength = number.length;

    if (numberLength == 0) {
        alert("Please enter a valid number.");
        return;
    }

    let shiftedNumber = [];

    for (let i = 0; i < numberLength; i++) {
        const newIndex = (i + landslide) % numberLength;
        shiftedNumber[newIndex] = number[i];
    }

    let result = shiftedNumber.join('');

    alert(`Original Number: ${number}\nShifted Number: ${result}`);
}
function task8() {
    let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    let showNextDay = true;

    while (showNextDay) {
        let currentDay = daysOfWeek.shift();
        alert(`${currentDay}. Want to see the name of the next day of the week?`);

        if (daysOfWeek.length == 0) {
            daysOfWeek.push('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
        }

        showNextDay = confirm('Want to see the name of the next day of the week?');
    }

}
function task9()
{
    for (let i = 2; i <= 9; i++) {
        let multiplicationTable = `Multiplication table for ${i}:\n\n`;
        
        for (let j = 1; j <= 10; j++) {
            const result = i * j;
            multiplicationTable += `${i} * ${j} = ${result}\n`;
        }
    
        alert(multiplicationTable);
    }
    
    
}
function task10() {
    alert("Guess the number from 0 to 100");

    let min = 0;
    let max = 100;
    let isGuessed = false;

    while (!isGuessed) {
        let number = Math.floor((min + max) / 2);
        let answer = prompt(`Your number > ${number}, < ${number} or == ${number}? Enter one of these values.`);

        if (!answer) {
            alert("Game canceled.");
            return;
        }

        if (!answer || answer.toLowerCase() == "==") {
            alert(`Your number ${number}! Game over.`);
            isGuessed = true;
        } else if (answer.toLowerCase() == ">") {
            min = number + 1;
        } else if (answer.toLowerCase() == "<") {
            max = number - 1;
        } else {
            alert("Please enter the correct answer: '>', '<' or '=='");
        }
    }
}