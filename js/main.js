function check() {

var question1 = document.ccna.question1.value;
var question2 = document.ccna.question2.value;
var question3 = document.ccna.question3.value;
var question4 = document.ccna.question4.value;
var question5 = document.ccna.question5.value;
var correct = 0;

    if(question1 == "Entries are processed top-down") {
      correct+=20;
}
    if(question2 == "login") {
      correct+=20;
}
    if(question3 == "0x2102") {
      correct+=20;
}
    if(question4 == "Request") {
      correct+=20;
}
    if(question5 == "Inside local") {
      correct+=20;
}
}
alert (correct);
check();
//
// var messages = ["Perfect score", "Good work", "Fair work", "Below Average", "Fail"]
//
// var range;
//
//     if (correct > 80 ) {
//       range = 0;
//     }
//     if (correct > 60 && correct <= 80 ) {
//       range = 1;
//     }
//     if (correct > 40 && correct <= 60) {
//       range = 2;
//     }
//     if (correct > 20 && correct <= 40) {
//       range = 3;
//     }
//     if (correct > 0 && correct <= 20) {
//       range = 4;
//     }
//
//  document.getElementById ("after_submit").style.visibility = "visible";
//  document.getElementById ("percentage_scored").innerHTML = "You scored "+ correct
//   + "%";
//   document.getElementById ("message").innerHTML = message[range];
// }
