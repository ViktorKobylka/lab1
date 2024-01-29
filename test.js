var str = "test 1";
console.log(str);
var num = 29;
console.log("Today is " + num + "th");
var flag = true;
console.log("Do I want to sleep? " + flag);
var myArray = [1, 2, 3];
myArray.forEach(function (item) {
    console.log(item);
});
var myUnknown = "anything we want";
console.log("My value is: " + myUnknown);
function countChar(value) {
    return value.length;
}
function countCharNoSpace(value) {
    var count = value.replace(" ", "").length;
    return count;
}
function countCharNoYesSpace(value, check) {
    if (check == true) {
        console.log("Including spaces");
        return value.length;
    }
    else {
        console.log("Excluding spaces");
        var count = value.replace(" ", "").length;
        return count;
    }
}
console.log("1. The number of characters is " + countChar(str));
console.log("2. The number of characters is " + countCharNoSpace(str));
console.log("3. The number of characters is " + countCharNoYesSpace(str));
