var shown = false;
function showhideEmail(){
	if (shown){
      document.getElementById('email').innerText = "Show my email";
	  shown = false;
    }else{
	  var myemail = document.createElement('a');
	  myemail.href = 'mailto:cedillak@ucmail.uc.edu';
	  myemail.innerText = 'cedillak@ucmail.uc.edu';
      document.getElementById('email').innerHTML = '';
      document.getElementById('email').appendChild(myemail);
      shown = true;
    }
}
