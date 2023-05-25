<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gå på opdagelse i Danmarks kommuner</title>
  <style>
    /* Tilpasning af stilarter */
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
      padding: 20px;
      text-align: center;
    }
    
    .menu {
      display: inline-block;
      position: relative;
    }

    .menu-toggle {
      background-color: #428bca;
      color: #fff;
      padding: 10px 20px;
      cursor: pointer;
    }

    .menu-items {
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #fff;
      width: 100%;
      padding: 10px;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      display: none;
      text-align: left;
    }

    .menu-items.show {
      display: block;
    }

    .menu-items a {
      display: block;
      padding: 5px 0;
      text-decoration: none;
      color: #000;
    }
    
    .fact {
      margin: 0 auto;
      max-width: 600px;
      background-color: #428bca;
      color: #fff;
      padding: 20px;
      border-radius: 4px;
      font-size: 18px;
      line-height: 1.5;
      text-align: left;
    }
  </style>
</head>
<body>
  <h1>Gå på opdagelse i Danmarks kommuner</h1>
  
  <div class="menu">
    <div class="menu-toggle" onclick="toggleMenu()">Vælg kommune</div>
    <div id="menuItems" class="menu-items">
      <a href="#" onclick="selectKommune('varde')">Varde Kommune</a>
      <a href="#" onclick="selectKommune('esbjerg')">Esbjerg Kommune</a>
      <a href="#" onclick="selectKommune('odsherred')">Odsherred Kommune</a>
      <a href="#" onclick="selectKommune('vejen')">Vejen Kommune</a>
      <a href="#" onclick="selectKommune('kbh')">Københavns Kommune</a>
    </div>
  </div>
  
  <div id="factContainer" class="fact"></div>

  <script>
    // Hent referencer til DOM-elementer
    var menuToggle = document.querySelector('.menu-toggle');
    var menuItems = document.getElementById('menuItems');
    var factContainer = document.getElementById('factContainer');

    // Vis/skjul menuen
    function toggleMenu() {
      menuItems.classList.toggle('show');
    }

    // Vælg kommune og vis det historiske faktum
    function selectKommune(kommune) {
      var kommuneData = kommunerData[kommune];
      if (kommuneData) {
        var faktumHTML = '<h2>Historisk faktum:</h2><p>' + kommuneData.fact + '</p>';
        var indbyggereHTML = '<p>' + kommuneData.indbyggere + '</p>';
        var arealHTML = '<p>' + kommuneData.areal + '</p>';

        factContainer.innerHTML = faktumHTML + indbyggereHTML + arealHTML;
      } else {
        factContainer.innerHTML = '';
      }

      toggleMenu();
    }

    // Historiske fakta og oplysninger om kommuner
    var kommunerData = {
      varde: {
        fact: 'Varde Kommune blev grundlagt i år 2007 og er beliggende i det vestlige Jylland.',
        indbyggere: 'Antal indbyggere: 50.000',
        areal: 'Geografisk areal: 1.234 km²'
      },
      esbjerg: {
        fact: 'Esbjerg Kommune har en rig historie inden for fiskeri og er kendt som "Danmarks Energimetropol".',
        indbyggere: 'Antal indbyggere: 100.000',
        areal: 'Geografisk areal: 2.345 km²'
      },
      odsherred: {
        fact: 'Odsherred Kommune er beliggende på Sjællands Odde og har en smuk kystlinje og et aktivt kunstmiljø.',
        indbyggere: 'Antal indbyggere: 30.000',
        areal: 'Geografisk areal: 1.567 km²'
      },
      vejen: {
        fact: 'Vejen Kommune er kendt for sine smukke landskaber, herunder Hærvejen, og er hjemsted for en række historiske seværdigheder.',
        indbyggere: 'Antal indbyggere: 40.000',
        areal: 'Geografisk areal: 1.890 km²'
      },
      kbh: {
        fact: 'Københavns Kommune er hovedstaden i Danmark og har en rig historie, arkitektur og kulturel mangfoldighed.',
        indbyggere: 'Antal indbyggere: 600.000',
        areal: 'Geografisk areal: 86 km²'
      },
    };
  </script>
</body>
</html>


<!DOCTYPE html>
<html>
<head>
  <title>Placering</title>
</head>
<body>
  <h1>Vis min placering</h1>
  
  <button onclick="getLocation()">Få min placering</button>
  
  <p id="demo"></p>
  
  <script>
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        alert("Geolocation er ikke understøttet i denne browser.");
      }
    }
    
    function showPosition(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      
      document.getElementById("demo").innerHTML = "Din placering: " + latitude + ", " + longitude;
    }
  </script>
</body>
</html>
