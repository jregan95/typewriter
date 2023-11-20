const sentence = "hello there from lighthouse labs";
let n = 0;

const delayIncrementing = function() {
  while (n < (100 * sentence.length)) {
    n += 100;
    return n;
  }
};

for (let i = 0; i < sentence.length; i++) {

  setTimeout(() => {
    process.stdout.write(sentence[i]);
    if (i === sentence.length - 1) {
      process.stdout.write('\n');
    }
  }, delayIncrementing());

}