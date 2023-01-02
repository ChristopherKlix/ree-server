function checkPassword() {
    var password = document.getElementById("password").value;
    if (password == "tictactoe") {
        // Redirect to another page
        window.location.replace("./res/");
        console.log("Correct password!");
        //   document.getElementById("secret-div").style.display = "block";
    } else {
        console.log("Incorrect password!");
        alert("Incorrect password!");
    }
}
