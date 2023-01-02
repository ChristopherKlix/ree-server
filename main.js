function checkPassword() {
    var password = document.getElementById("password").value;
    if (password == "tictactoe") {
      // Redirect to another page
        window.location.replace("./res/README.md");
    //   document.getElementById("secret-div").style.display = "block";
    } else {
      alert("Incorrect password!");
    }
}
