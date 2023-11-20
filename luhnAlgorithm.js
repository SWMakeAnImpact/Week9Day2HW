// Function to check if a card number is valid using the Luhn Algorithm
function validCard(cardNumber) {
    // Convert the card number to a string to work with each digit
    let numberAsString = cardNumber.toString();
    let sum = 0;
    let isSecond = false;
  
    // Loop through the card number from right to left
    for (let i = numberAsString.length - 1; i >= 0; i--) {
      // Convert the current character back to a number
      let digit = parseInt(numberAsString[i]);
  
      // Double every second digit
      if (isSecond) {
        digit = digit * 2;
  
        // If the result is two digits, subtract 9
        if (digit > 9) {
          digit = digit - 9;
        }
      }
  
      // Add the digit to the sum
      sum += digit;
  
      // Flip the isSecond boolean to true/false for the next loop iteration
      isSecond = !isSecond;
    }
  
    // If the sum is divisible by 10, the card is valid
    return (sum % 10) == 0;
  }
  
  // Testing the function with different card numbers
  console.log(validCard(1234567890123456)); // Should be false
  console.log(validCard(4408041234567893)); // Should be true
  console.log(validCard(38520000023237));   // Should be true
  console.log(validCard(4222222222222));    // Should be true