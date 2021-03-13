module.exports = function reverse (n) {
    let res = n;

    if(n < 0){
        res *= -1;
    }

    return Number(String(res).split('').reverse().join(''));
}
