var APP = APP || {};

APP.module = (function () {

  var config = {

    a: 1,
    b: 2

  };

  var getConfig = function () {

    // returning copy of config
    return {a: config.a || 0, b: config.b || 0};

  };

  var subtract = function (x, y) {

    if (isNaN(x) || isNaN(y)) {
      return 0;
    }

    return x - y;

  };

  return {

    subtract: subtract,
    getConfig: getConfig

  };

}());