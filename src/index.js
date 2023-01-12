module.exports = function reverse(n) {
    let answer = ("" + n).split("").reverse().join("");
    let num = parseInt(answer);
    return num;
};
