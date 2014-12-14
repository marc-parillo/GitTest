/* Changed By John */
var a = 1;
var b = 2;

function add(x,y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return null;
  }
  return x+y;
}

console.info(add(a,b));