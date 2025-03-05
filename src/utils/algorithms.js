// Task 1: Find Missing Number algorithm
export function findMissingNumber(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

// Task 2: Password Validator algorithm
export function isValidPassword(password) {
  // At least 8 characters
  const hasLength = password.length >= 8;

  // At least 1 uppercase letter
  const hasUppercase = /[A-Z]/.test(password);

  // At least 1 digit
  const hasDigit = /[0-9]/.test(password);

  // At least 1 special character
  const hasSpecial = /[!@#$%^&*]/.test(password);

  return {
    isValid: hasLength && hasUppercase && hasDigit && hasSpecial,
    requirements: {
      hasLength,
      hasUppercase,
      hasDigit,
      hasSpecial,
    },
  };
}
