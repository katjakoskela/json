fetch('https://raw.githubusercontent.com/katjakoskela/json/refs/heads/main/palaveri.json')
  // Muunnetaan vastaus JSON muotoon
  .then(function (response) {
    if (!response.ok) {
      throw new Error('Verkkovirhe: ' + response.status);
    }
    return response.json();
  })
  .then(function (responseJson) {
    kerro(responseJson);
  })
  .catch(function (error) {
    document.getElementById("vastaus").innerHTML =
      "<p>Tietoa ei pystytä hakemaan: " + error.message + "</p>";
  });
  
  function kerro(data) {
    var teksti = "";

    // Pääsy JSON-olion "palaveri"-avaimeen
    var palaveri = data.palaveri;

    // Palaverin aihe
    teksti = teksti + "<h1>" + palaveri.aihe + "</h1>";

    // Osallistujat
    teksti = teksti + "<h3>Osallistujat (" + palaveri.osallistujat.lukumaara + "):</h3><ul>";
    for (var i = 0; i < palaveri.osallistujat.nimet.length; i++) {
        teksti = teksti + "<li>" + palaveri.osallistujat.nimet[i] + "</li>";
    }
    teksti = teksti + "</ul>";

    // Paikka ja aika
    teksti = teksti + "<h3>Paikka ja aika</h3>";
    teksti = teksti + "<p>Paikka: " + palaveri.paikka + "</p>";
    teksti = teksti + "<p>Alkamis aika: " + palaveri.alkaminen + "</p>";
    teksti = teksti + "<p>Kesto: " + palaveri.kesto + "</p>";

    // Tulostus sivulle
    document.getElementById("vastaus").innerHTML = teksti;
}
