"use strict";
// enums are named constants
Object.defineProperty(exports, "__esModule", { value: true });
var DEVICE_PIXEL;
(function (DEVICE_PIXEL) {
    DEVICE_PIXEL[DEVICE_PIXEL["MD"] = 1260] = "MD";
    DEVICE_PIXEL[DEVICE_PIXEL["LG"] = 1920] = "LG";
    DEVICE_PIXEL[DEVICE_PIXEL["SM"] = 768] = "SM";
    DEVICE_PIXEL[DEVICE_PIXEL["XL"] = 2560] = "XL";
    DEVICE_PIXEL[DEVICE_PIXEL["XS"] = 480] = "XS";
})(DEVICE_PIXEL || (DEVICE_PIXEL = {}));
let myDevice = DEVICE_PIXEL[1920];
//# sourceMappingURL=enums.js.map