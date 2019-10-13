const wordTracker = {};

const WordFrequencies = (str, book) => {
  book.forEach(word => {
    if (wordTracker.hasOwnProperty(word)) {
      wordTracker[word] += 1;
    } else {
      wordTracker[word] = 1;
    }
  });
  if (wordTracker[str] === undefined) return 0;
  return wordTracker[str];
};

let book = ["hi", "this", "is", "a", "test", "book", "hi", "hi"];

console.log("hi: ", WordFrequencies("hi", book));

console.log("this: ", WordFrequencies("this", book));

console.log("nothing: ", WordFrequencies("nothing", book));
