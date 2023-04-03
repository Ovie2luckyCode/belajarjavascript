
function bilanganprima(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {// jika i =2 dan i kurang atau samadenbgan akar dari n;
      if (n % i === 0) return false;
    }
    return true;
  }
  
  function ankakecil(n) {
    let sum = 0;
    let num = 2;
    let count = 0;
    let primeNumbers = [];
    while (count < n) {
      if (bilanganprima(num)) {
        sum += num;
        count++;
        primeNumbers.push(num);
      }
      num++;
    }
    return [primeNumbers, sum];
  }
  
  const n = 4; // jumlah bilangan prima yang ingin dicari
  const result = ankakecil(n);
  console.log(`${result[0].join("+")}=${result[1]}`);
  