let LEGIT = 18;
let YEAR = new Date().getFullYear();
function voter(age, ok, notok){
  (age()>LEGIT) ? ok() : notok();
}

function calcAge(){
  let dob = prompt('What is the year of your birth?');
  return YEAR - dob;
}

function yes(){
  alert('Yes U can Vote!!');
}

function no(){
  alert('U can not Vote!!');
}

voter(calcAge, yes, no);
