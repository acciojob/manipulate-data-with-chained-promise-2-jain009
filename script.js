//your JS code here. If required.
//your JS code here. If required.
function manipulateArray() {
    const outputDiv = document.getElementById("output");

    // Initial Promise resolves with array [1, 2, 3, 4] after 3 seconds
    new Promise((resolve) => {
        setTimeout(() => resolve([1, 2, 3, 4]), 3000);
    })
    .then(numbers => {
        // First transformation: Filter out odd numbers
        return new Promise((resolve) => {
            setTimeout(() => {
                const evens = numbers.filter(num => num % 2 === 0);
                outputDiv.textContent = evens.join(",");
                resolve(evens);
            }, 1000);
        });
    })
    .then(evens => {
        // Second transformation: Multiply even numbers by 2
        return new Promise((resolve) => {
            setTimeout(() => {
                const doubled = evens.map(num => num * 2);
                outputDiv.textContent = doubled.join(",");
                resolve(doubled);
            }, 2000);
        });
    });
}
window.onload = function() {
    manipulateArray();
}