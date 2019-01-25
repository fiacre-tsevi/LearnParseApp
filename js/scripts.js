
setTimeout(function() {
	hidePreloader();
	showConnexion();
}, 2000);

$("#toggleSideBar").on("click", function(){
   	$("#menu").css("opacity", "0");
    $("#lgMenu").addClass("enter");
    if($(".sidebar").hasClass("off")) {
    	$(".sidebar").removeClass("off");
    	$("#content-box").removeClass("ml-2");
    }else {
    	$(".sidebar").addClass("off");
    	$("#content-box").addClass("ml-2");
    }
});

function hideConnexion() {
	$('.connexion').hide();
}

function hidePreloader() {
	$('.preloader').hide();
}

function hideMainWrapper() {
	$('.mainWrapper').hide();
}

function showConnexion() {
	$('.connexion').show();
}

function showPreloader() {
	$('.preloader').show();
}

function showMainWrapper() {
	$('.mainWrapper').show();
}

hideConnexion();
hideMainWrapper();

//Create New Account
function register() {
	//Get inputs values
	let username = $('#username').val();
	let email = $('#email').val();
	let pass = $('#password').val();
	if(username == "" || email == "" || pass == "") {
		swal({
		  title: "Error!",
		  text: "Please, set all the fields!",
		  icon: "warning",
		});
	}else {
		console.log(username + " " + email + " " + pass);
		swal({
		  title: "Success!",
		  text: "Your account has been created successfully!",
		  icon: "success",
		  button: "Go to home",
		}).then(() => {
			hideConnexion();
			showMainWrapper();
		});
	}
	
}

//Parse server functions

var currentUser = Parse.User.current();

var signUp = (username, email, pass) => {
	let user = new Parse.User();
	user.set("username", username);
	user.set("email", email);
	user.set("password", pass);
	try {
	  user.signUp();
	  currentUser = Parse.User.current();
	} catch (error) {
	  console.log("Error signing-up: " + error.code + " " + error.message);
	}
}

var signIn = (email, pass) => {
	currentUser = Parse.User.logIn("myname", "mypass");
}

var logOut = () => {
	Parse.User.logOut().then(() => {
	  	currentUser = Parse.User.current();  // this will now be null
	});
}