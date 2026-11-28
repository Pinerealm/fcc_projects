const { randomInt } = require("node:crypto");

function generatePassword(length) {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()";
  const allChars = uppercase + lowercase + numbers + symbols;

  const password = [];

  // Guarantee at least one character from each required type
  password.push(uppercase[randomInt(uppercase.length)]);
  password.push(lowercase[randomInt(lowercase.length)]);
  password.push(numbers[randomInt(numbers.length)]);
  password.push(symbols[randomInt(symbols.length)]);

  // Fill remaining positions with random characters from all types
  for (let i = password.length; i < length; i++) {
    password.push(allChars[randomInt(allChars.length)]);
  }

  // Shuffle the password array using Fisher-Yates algorithm
  for (let i = password.length - 1; i > 0; i--) {
    const j = randomInt(i + 1);
    [password[i], password[j]] = [password[j], password[i]];
  }

  return password.join("");
}

const rawLength = process.argv[2];
const length = Number.parseInt(rawLength ?? "14", 10);

if (!Number.isInteger(length) || length < 4) {
  console.error("Usage: node password-generator.js <length>");
  console.error(
    "Length must be at least 4 to include uppercase, lowercase, number, and symbol.",
  );
  process.exit(1);
}

const password = generatePassword(length);
console.log(`Generated password: ${password}`);
