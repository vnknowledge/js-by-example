/**
 * Created by mikegraham on 7/7/16.
 */
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var filtered = numbers.filter(function eventNumbers (number) {
    return number % 2 === 0;
});

console.log(filtered);