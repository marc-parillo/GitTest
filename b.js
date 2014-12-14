var APP = APP || {};

APP.module = (function () {

  var config = {

    a: 1,
    b: 2

  };

  var subtract = function (x, y) {

    return x - y;

  };

  return {

    subtract: subtract

  };

}());