var APP = APP || {};

APP.module = (function () {

  var config = {

    a: 1,
    b: 2

  };

  var subtract = function (x, y) {
    
    if (isNaN(x) || isNaN(y)) {
      return 0;
    }

    return x - y;

  };

  return {

    subtract: subtract

  };

}());