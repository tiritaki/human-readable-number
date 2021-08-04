module.exports = function toReadable (num) {
  let result;
    const num1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        num10 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        num20 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        num100 = ['hundred', 'thousand', 'million', 'billion'],
        n = String(num).split('');

    if (num < 10) {
        result = num1[n[0]];
    } else if (num >= 10 && num < 20) {
        result = num10[n[1]];
    } else if (num >= 20 && num < 100) {
        result = `${num20[+n[0] - 2]} ${n[1] == 0 ? '' : num1[n[1]]}`;
    } else if (num >= 100 && num < 1000) {
        result = `${num1[n[0]]} ${num100[0]}`;
        if (num % 100 > 9 && num % 100 < 20) {
            result += ` ${num10[+n[2]]}`;
        } else {
            result += ` ${n[1] == 0 ? '' : num20[+n[1] - 2]} ${n[2] == 0 ? '' :num1[n[2]]}`;
        }

    }
    return result.trim().replace(/ {1,}/g, ' ');
}
