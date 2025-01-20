// Fiz buzz - 100 números

// 3 6 9 12...... Fizz
// 5 10 15 20...... Buzz
// 15 30 45 .....FIZZBUZZ

for (let i = 0; i < 100; i++) {
    if (i % 15 === 0) {
        console.log(`${i} FIZZBUZZ`);
    } else if (i % 3 === 0) {
        console.log(`${i} FIZZ`);
    } else if (i % 5 === 0) {
        console.log(`${i} BUZZ`);
    }
}