
const { loginComplete } = require('./util');


document.getElementById("Loggin").onclick = function() {
  loggin();
}

async function loggin(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  const text =  await loginComplete(email,password);

  alert(text);

  }




