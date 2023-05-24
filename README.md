# MinKommune

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interaktiv hjemmeside</title>
  <style>
    /* Tilpasning af stilarter */
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
      padding: 20px;
      text-align: center;
    }
    
    .button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #428bca;
      color: #fff;
      text-decoration: none;
      border-radius: 4px;
      transition: background-color 0.3s ease;
    }
    
    .button:hover {
      background-color: #3276b1;
    }
  </style>
</head>
<body>
  <h1>Min Interaktive Hjemmeside</h1>
  <p>Velkommen til min hjemmeside!</p>
  <button class="button">Klik her</button>

  <script>
    // Tilføj interaktivitet ved hjælp af JavaScript
    var button = document.querySelector('.button');
    button.addEventListener('click', function() {
      alert('Du har klikket på knappen!');
    });
  </script>
</body>
</html>
