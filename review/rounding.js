/**
 * Δοθέντος δύο ακεραίων, να επιστραφεί το πηλίκο της διαίρεσης του πρώτου με τον δεύτερο, στρογγυλοποιημένο σε δύο δεκαδικά ψηφία.
 */

let num1 = 10;
let num2 = 3;
let roundedResult = 0;

roundedResult = Math.round((num1 / num2) * 100) / 100; 
console.log(roundedResult) // 3.33