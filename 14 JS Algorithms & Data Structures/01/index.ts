{
  //* Slower
  function addUpTo(n: number): number {
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    return total;
  }

  const t1 = performance.now();
  addUpTo(1000000000);
  const t2 = performance.now();
  console.log(1, `Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
}

{
  //* Faster
  function addUpTo(n: number): number {
    return (n * (n + 1)) / 2;
  }

  const time1 = performance.now();
  addUpTo(1000000000);
  const time2 = performance.now();
  console.log(2, `Time Elapsed: ${(time2 - time1) / 1000} seconds.`);
}
