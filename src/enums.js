// enums are named constants
var DEVICE_PIXEL;
(function (DEVICE_PIXEL) {
    DEVICE_PIXEL[DEVICE_PIXEL["MD"] = 0] = "MD";
    DEVICE_PIXEL[DEVICE_PIXEL["LG"] = 1] = "LG";
    DEVICE_PIXEL[DEVICE_PIXEL["SM"] = 2] = "SM";
    DEVICE_PIXEL[DEVICE_PIXEL["XL"] = 3] = "XL";
    DEVICE_PIXEL[DEVICE_PIXEL["XS"] = 4] = "XS";
})(DEVICE_PIXEL || (DEVICE_PIXEL = {}));
console.log(DEVICE_PIXEL.MD); // 0
