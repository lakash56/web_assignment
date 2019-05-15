function registerform(){
	var name,password,email,opt;
	name=document.getElementById("name").value
	password=document.getElementById("password").value
	email=document.getElementById("email").value
	opt=prompt("Welcome " +name+" press 1 to continue" );
	if(name=="" && password=="" && email=="")
 	{
 		alert("Error please fill all the fields");
 		return false;
 	}
 	else if (password=="") {
 		alert("Error please fill the password");
 		return false;
 	}
 	else if (name=="") {
 		alert("Error please fill the username");
 		return false;
 	}
 	else if (email=="") {
 		alert("Error please fill the email");
 		return false;
 	}
 	else
 	{
 		if (opt==1) {
 		
 		 window.location="index.html"
 		 }
 		 else
 		 {
 		 	alert('Go to home')
 		 }
 		return false;
 	}
return
}

function getstarted()
{
	window.location="index.html"
}

function goback(){
	alert("you are signed in");
	window.location(../inedx.html)
}


