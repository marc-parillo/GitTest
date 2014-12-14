var APP = APP || {};

APP.module = (function () {

  var config = {

    a: 1,
    b: 2

  };

  var init = function (params) {

    config.a = params.a || 0;
    config.b = params.b || 0;

  };

  var getConfig = function () {

    return {a: config.a, b: config.b};

  };

  var subtract = function (x, y) {

    if (isNaN(x) || isNaN(y)) {
      return 0;
    }

    return x - y;

  };

  return {

    init: init,
    subtract: subtract

  };

}());