/**
 * Created by caiying on 13/10/15.
 */
'use strict';

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _gm = require('gm');

var _gm2 = _interopRequireDefault(_gm);

exports['default'] = new ((function () {
    function _class() {
        var _this = this;

        _classCallCheck(this, _class);

        this.finalSize = 640;
        this.globalOffset = 8;
        this.paddingSize = 12;
        this.backgroud = 'bg.jpg';

        this.draw = function callee$2$0(imgs, final) {
            var outlineSize, imgSize, i, gens, j, colSize, rowSize, yOffset, xOffset;
            return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        context$3$0.prev = 0;
                        outlineSize = this.finalSize - this.globalOffset * 2;
                        imgSize = imgs.length > 4 ? (outlineSize - 4 * this.paddingSize) / 3 : (outlineSize - 3 * this.paddingSize) / 2;
                        i = 0;

                    case 4:
                        if (!(i < imgs.length)) {
                            context$3$0.next = 10;
                            break;
                        }

                        context$3$0.next = 7;
                        return _regeneratorRuntime.awrap(this.resize(imgs[i], this.outputs[i], imgSize));

                    case 7:
                        i++;
                        context$3$0.next = 4;
                        break;

                    case 10:
                        gens = [];

                        for (j = imgs.length - 1; j >= 0; j--) {
                            colSize = imgs.length > 4 ? 3 : 2;
                            rowSize = Math.ceil(imgs.length / colSize);
                            yOffset = (rowSize - Math.ceil((imgs.length - j) / colSize)) * (imgSize + this.paddingSize);

                            if (rowSize < colSize) {
                                yOffset += (colSize - rowSize) * imgSize / 2;
                            }
                            xOffset = (colSize - (imgs.length - j - 1) % colSize - 1) * (imgSize + this.paddingSize);

                            if (imgs.length % colSize !== 0 && imgs.length - j > (rowSize - 1) * colSize) {
                                xOffset -= (colSize - imgs.length % colSize) * imgSize / 2 + this.paddingSize;
                            }
                            gens.push(['+' + (this.globalOffset + this.paddingSize + xOffset) + '+' + (this.globalOffset + this.paddingSize + yOffset), this.outputs[j]]);
                        }
                        context$3$0.next = 14;
                        return _regeneratorRuntime.awrap(this.generate(gens, final));

                    case 14:
                        context$3$0.next = 19;
                        break;

                    case 16:
                        context$3$0.prev = 16;
                        context$3$0.t0 = context$3$0['catch'](0);

                        console.log(context$3$0.t0);

                    case 19:
                    case 'end':
                        return context$3$0.stop();
                }
            }, null, _this, [[0, 16]]);
        };

        this.resize = function callee$2$0(input, output, size) {
            return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        return context$3$0.abrupt('return', new _Promise(function (resolve, reject) {
                            (0, _gm2['default'])(input).resize(size, size, '!').write(output, function (err) {
                                if (err) {
                                    return reject(err);
                                }
                                resolve();
                            });
                        }));

                    case 1:
                    case 'end':
                        return context$3$0.stop();
                }
            }, null, _this);
        };

        this.generate = function callee$2$0(magics, final) {
            return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
                var _this2 = this;

                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        return context$3$0.abrupt('return', new _Promise(function (resolve, reject) {
                            var cmd = (0, _gm2['default'])()['in']('-page', '+0+0')['in'](_this2.backgroud);
                            for (var i = 0; i < magics.length; i++) {
                                cmd['in']('-page', String(magics[i][0]))['in'](String(magics[i][1]));
                            }
                            cmd.mosaic().write(final, function (err) {
                                if (err) {
                                    return reject(err);
                                }
                                resolve();
                            });
                        }));

                    case 1:
                    case 'end':
                        return context$3$0.stop();
                }
            }, null, _this);
        };
    }

    return _class;
})())();
module.exports = exports['default'];
