function get_positive() {
    do {
        let str_n = prompt("Enter a positive integer: ");
        let n = Number(str_n);
        if (isNaN(n) || n < 0 || !Number.isInteger(n)) {
            continue;
        }
        return n;
    } while (true);
}

function showPrimes(n) {
    let array_prime = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            array_prime.push(i);
        }
    }
    return array_prime;
}

function isPrime(n) 
{
    if (n===1) return false;
    else if(n === 2)return true;
    else
    {
      for(let x = 2; x < n; x++){
        if(n % x === 0) return false;
      }
      return true;  
    }
  }

let pos_int = get_positive()
alert(`${showPrimes(pos_int)}`);