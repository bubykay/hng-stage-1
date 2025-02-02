export class NumberProperties {
  constructor(value) {
    this.value = value;
  }
  isPrime() {
    if (this.value < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(this.value); i++) {
      if (this.value % i === 0) {
        return false;
      }
    }
    return true;
  }
  isOdd() {
    return this.value % 2 !== 0;
  }
  isEven() {
    return this.value % 2 === 0;
  }
  isPerfectSquare() {
    return Math.sqrt(this.value) % 1 === 0;
  }
  digitsSum() {
    return this.value
      .toString()
      .split("")
      .reduce((acc, curr) => acc + parseInt(curr), 0);
  }
  isArmstrong() {
    const str = this.value.toString();
    const n = str.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += Math.pow(parseInt(str[i]), n);
    }
    return sum === this.value;
  }
}
