"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response1 = fetch("url1").then((res) => {
    return {
        status: "success",
        data: { id: 1, name: "John" },
    };
});
if (response1.status === "success") {
    console.log("Data:", response1.data);
}
else {
    console.log("Error:", response1.errorMessage);
}
// Day 1 -> 1 hr 30 mint
// Day2 -> 40 mint
// Day 3-> 1 hr
// Day 4 -> 3 hr
// Total -> 6 hr 10 mint
//# sourceMappingURL=user.types.js.map