var email = prompt("Enter your Email : ");
var card_num = prompt("Enter your 16-digit credit/debit card number :  ");

var email1 = email.slice(-10);
var email2 = email.slice(0,2);
var m_email = email1.padStart(16,"*");
//var m_email1 = email2.padStart(3,"*");
console.log(m_email);


var num1 = card_num.slice(-4);
var m_num = num1.padStart(16,"*");
console.log(m_num);
