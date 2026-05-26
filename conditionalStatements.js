//Exercise 1:temperature check

let temperature = 23;
if (temperature <0) {
    console.log("It's freezing!");
} else if (temperature >=0 && temperature <=15) {
    console.log("It's cold");
}   else if (temperature  >=16 && temperature <=25) {
    console.log("It's mild");
} else {
    console.log("It's warm");
}
//switch statements
switch(true) {
    case (temperature <0):
        console.log("It's freezing!");
        break;
    case (temperature >=0 && temperature <=15):
        console.log("It's cold");
        break;
    case (temperature >=16 && temperature <=25):
        console.log("It's mild");
        break;
    default:
        console.log("It's warm");
}

//Exercise 2: Divisibility check
let number=600;
if(number % 2  && number % 3 ) {
    console.log("The number is divisible by both 2 and 3");
}else if (number % 2) {
    console.log("The number is divisible by 2");
} else if (number % 3 ) {
    console.log("The number is divisible by 3");
} else {
    console.log("The number is not divisible by 2 or 3");
}
//switch statements
switch(true) {
    case (number % 2 && number % 3):
        console.log("The number is divisible by both 2 and 3");
        break;
    case (number % 2):
        console.log("The number is divisible by 2");
        break;
    case (number % 3):
        console.log("The number is divisible by 3");
        break;
    default:
        console.log("The number is not divisible by 2 or 3");
}
//Exercise 3: Loops
for (let count = 1; count <= 10; count++) {
    console.log(count);
}

for (let count = 1; count <= 20; count++) {
    if (count % 2 === 0) {
        console.log(count);
    }   }


    let sum = 0;
    for (let count = 1; count <= 100; count++) {
        sum += count;
    }
    console.log("Sum:",sum);
    const numbers = [1, 2, 3, 4, 5];
    for (let count = 0; count < numbers.length; count++) {
        console.log(numbers[count]);
    }const numbers2 = [3, 7, 2, 5, 6];
    let largest = numbers2[0];
    for (let count = 1; count < numbers2.length; count++) {
        if (numbers2[count] > largest) {
            largest = numbers2[count];
        }
    }
    console.log("Largest:", largest);

    //Exercise 4:while loop
    let k = 1;
    while (k <= 10) {
        console.log(k);
        k++;
    }
    let even=1;
    while (even <= 20) {
        if (even % 2===0) { 
            console.log(even);
        }while (even <= 20) {
            even++;
        }
        let num=1;
        let sum = 0;
        while(num <= 100) {
            sum += num;
            num++;
        }
        console.log("Sum:", sum);
        let multiple=1;
        while (multiple < 50) {
            if (multiple % 5 === 0) {
                console.log(multiple);
            } multiple++;
        }}
        //Exercise 4:do while loop

        let m = 1;
        do {
            console.log(m);
            m++;
        } while (m <= 10);

        let sort = 1;let sum2 = 0;
        do{ sum2 += sort;
            sort++;
        } while (sort <= 100);
        console.log("Sum:", sum2);
        let Usernumber;
        do {
            Usernumber = parseInt(prompt("Enter a number between 1 and 10:"));
        }while ( Usernumber<=10);
        console.log("You entered: ", Usernumber);

        let secretno=5;
        let guess;
        do {
            guess = parseInt(prompt("Guess the secret number between 1 and 10:"));
        } while (guess != secretno);
        console.log("Congratulations! You guessed the secret number.");
