/**
 * @desc: This algorithm looking if the number inserted is prime.
 */

function isPrime(n) {

  var div =  2;

  while(n > div) {
    if(n % div == 0) {
      return false;
    }
    else {
      div++;
    }
  }
  return true;
}
