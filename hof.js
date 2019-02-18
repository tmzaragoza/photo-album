function counter() {
  let count = 0;
  return  function() {
    count++;
    return count;
  }
}
function add(a,b){
  return a + b;
}

function partial(a) {
  return function(b) {
    return add(a,b);
  }
}

module.exports = { counter, partial  }