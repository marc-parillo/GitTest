/* Changed By Mary -- again */
var a = 1;
var b = 2;

function add(x,y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    // should return a number
    return 0;
  }
  return x+y;
}

console.info(add(a, b));
