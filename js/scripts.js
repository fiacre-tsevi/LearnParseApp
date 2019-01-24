
setTimeout(function() {
	hidePreloader();
	showConnexion();
}, 2000);

function hideConnexion() {
	$('.connexion').hide();
}

function hidePreloader() {
	$('.preloader').hide();
}

function showConnexion() {
	$('.connexion').show();
}

function showPreloader() {
	$('.preloader').show();
}

hideConnexion();

//Create New Account
function register() {
	//Get inputs values
	swal({
	  title: "Success!",
	  text: "Your account has been created successfully!",
	  icon: "success",
	}).then(() => {
		console.log("Done!");
	});
}
