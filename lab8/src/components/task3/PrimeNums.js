import { useState, useEffect } from "react";

const isPrime = num => {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const PrimeNums = () => {
  const [primeNumbers, setPrimeNumbers] = useState([2]);
  
  useEffect(() => {
    const timer = setInterval(() => {
      let nextPrime = primeNumbers[primeNumbers.length - 1] + 1;
      while (!isPrime(nextPrime)) {
        nextPrime++;
      }
      setPrimeNumbers([...primeNumbers, nextPrime]);
    }, 1000);

    return () => clearInterval(timer);
  }, [primeNumbers]);

  return (
    <div>
      Простые числа: {primeNumbers.join(", ")}
    </div>
  );
};

export default PrimeNums;
