function collegeAnswer() {
  var password = document.getElementById("quizquestion");
  var passwordText = password.value.toUpperCase();
  if(passwordText == "THE UNIVERSITY OF TAMPA") {
  return true;
}
  alert("That is incorrect, try again!");
  return false;
}



