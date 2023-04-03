function printPattern(n) {
  let pattern = "";
  if(n%2!==0){//jika bilangan ganjil

    for (let i = 1; i <= n; i++) {//kebawah
      for (let j = 1; j <= n; j++) {//kesamping
        if (j === i || j === n - i + 1) {//jika j== i dan j= hasil dari n-i+1
          pattern += "*";//save patrn="*"
        } else {
          pattern += " ";// jika bukan maka akan save " "
        }
      }
      pattern += "\n";//baris
    }
  }
  console.log(pattern);
}

const n = 9; // ukuran jumlah input
printPattern(n);
