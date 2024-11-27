fetch('https://raw.githubusercontent.com/katjakoskela/json/refs/heads/main/palaveri.json')
  // Muunnetaan vastaus JSON muotoon
  .then(function (response) {
    return response.json();
  })
  // Käsitellään muunnettu (eli JSON muotoinen) vastaus
  .then(function (responseJson) {
    // Kutsutaan funktiota ja välitetään sille json-vastaus
    kerro(responseJson);
  })
  // Jos tuli jokin virhe
  .catch(function (error) {
    document.getElementById("vastaus").innerHTML =
      "<p>Tietoa ei pystytä hakemaan</p>";
  });

  // funktio tietojen näyttämiseksi
  function kerro(data) {
    var teksti = "";
  
    // Palaverin aihe
    teksti = "<h1>" + data.aihe + "</h1>";
  
    // Osallistujat
    teksti = "<h3>Osallistujat (" + data.lukumaara + "):</h3><ul>";
    for (var i = 0; i < data.nimet.length; i++) {
      teksti += "<li>" + data.nimet[i] + "</li>";
    }
    teksti += "</ul>";
  
    // Paikka ja aika
    teksti += "<h3>Paikka ja aika</h3>";
    teksti += "<p>Paikka: " + data.paikka + "</p>";
    teksti += "<p>Alkamis aika: " + data.alkaminen + "</p>";
    teksti += "<p>Kesto: " + data.kesto + "</p>";
  
    // Tulostus sivulle
    document.getElementById("vastaus").innerHTML = teksti;
  }
