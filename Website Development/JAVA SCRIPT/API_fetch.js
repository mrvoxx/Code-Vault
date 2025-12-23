<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
  <h2>Random User</h2>
  <button id="btn">Get User</button>

  <p id="name"></p>
  <img id="photo" width="150" />

  <script>
    const btn = document.getElementById("btn");
    const nameText = document.getElementById("name");
    const photo = document.getElementById("photo");

    btn.addEventListener("click", () => {

      // Fetch data from random user API
      fetch("https://randomuser.me/api/")
        .then(response => response.json()) // convert response to JSON
        .then(data => {
          // extract user data
          const user = data.results[0];

          nameText.innerText =
            user.name.first + " " + user.name.last;

          photo.src = user.picture.medium;
        })
        .catch(error => {
          console.log("Error:", error);
        });

    });
  </script>
</body>
</html>
