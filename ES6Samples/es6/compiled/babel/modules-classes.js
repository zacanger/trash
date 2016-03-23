'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Auto = (function () {
    function Auto(make, model, engine) {
        _classCallCheck(this, Auto);

        this._make = make;
        this._model = model;
        this._engine = engine;
    }

    _createClass(Auto, [{
        key: 'make',
        get: function get() {
            return this._make;
        },
        set: function set(val) {
            this._make = val;
        }
    }, {
        key: 'model',
        get: function get() {
            return this._model;
        },
        set: function set(val) {
            this._model = val;
        }
    }, {
        key: 'engine',
        get: function get() {
            return this._engine;
        },
        set: function set(val) {
            this._engine = val;
        }
    }]);

    return Auto;
})();

var Car = (function (_Auto) {
    _inherits(Car, _Auto);

    function Car(make, model, engine, isElectric) {
        _classCallCheck(this, Car);

        _get(Object.getPrototypeOf(Car.prototype), 'constructor', this).call(this, make, model, engine);
        this._isElectric = isElectric;
    }

    _createClass(Car, [{
        key: 'start',
        value: function start() {
            if (this._isElectric) {
                return this.make + ' ' + this.model + ' with a ' + this.engine + ' (electric) engine is started!';
            }
            return this.make + ' ' + this.model + ' with a ' + this.engine + ' engine is started!';
        }
    }, {
        key: 'isElectric',
        get: function get() {
            return this._isElectric;
        }
    }]);

    return Car;
})(Auto);

exports.Car = Car;