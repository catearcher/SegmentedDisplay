// digit to value map: first character is value of "0", etc.
m = "6255456376";

// "highscore"
h = 0;

// instead of looping from 0 to 9999 and having to left-pad everything under 999
// we can just loop from 10000 to 19999 (actually 10001 to 20000 due to the i++
// optimization) and then ignore the first digit
for (i = 10000; i++ < 20000;) {
  // regex to check validity of timestamp;
  // the first digit is garbage that is stripped away later, so we only check the
  // end of the string
  // also, we convert i into a string so we can do digit lookup with j[1];
  // strings can be accessed like arrays, but numbers cannot.
  // we create j in the same place we use it the first time so we can save 2 more bytes.
  if (/[012]\d[0-5]\d$/.test(j = i + "")) {
    // calculate score by summing up each digit's value (excluding the first)
    // from the `m` map; we need to "sum up" in the wrong direction (i.e. subtracting)
    // because m[j[*]] contain strings, so `+` would do string concatenation instead of
    // addition; subscration works, though
    s = -m[j[1]] - m[j[2]] - m[j[3]] - m[j[4]];

    // if the score of the current timestamp is higher (i.e. lower, because we're subtracting)
    // than the current highscore => remember timestamp + new highscore
    if (s < h) {
      h = s;
      o = j;
    }
  }
}

// remove first digit before REPL output
o.slice(1);
