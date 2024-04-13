function solution(a, b, n) {
  let totalBottles = 0;

  while (n >= a) {
    let newColas = Math.floor(n / a) * b;

    totalBottles += newColas;

    n = (n % a) + newColas;
  }

  return totalBottles;
}
