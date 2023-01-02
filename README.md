# B-REE

Damit die Dateien nicht komplett frei erreichbar sind,
müsst ihr vorher ein Access Code eingeben.

Welches Spiel haben wir in PRP1 in C geschrieben?

Format: keine Leerzeichen und alles lowercase

<form>
  <label for="password">Password:</label><br>
  <input type="password" id="password" name="password"><br>
  <input type="submit" value="Submit" onclick="checkPassword()">
</form>

<div id="secret-div" style="display: none;">
    ## Module

    - [B-REE-ET1](./res/B-REE-ET1/B-REE-ET1.md)
    - [B-REE-PR1](./res/B-REE-PR1/B-REE-PR1.md)
    - [B-REE-PH1](./res/B-REE-PH1/B-REE-PH1.md)
    - [B-REE-MA1](./res/B-REE-MA1/B-REE-MA1.md)
    - [B-REE-EE1](./res/B-REE-EE1/B-REE-EE1.md) (soon)
</div>

<script>
  function checkPassword() {
    var password = document.getElementById("password").value;
    if (password == "tictactoe") {
      // Redirect to another page
      //   window.location.replace("https://www.example.com/success.html");
      document.getElementById("secret-div").style.display = "block";
    } else {
      alert("Incorrect password!");
    }
  }
</script>
