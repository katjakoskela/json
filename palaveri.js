fetch('https://raw.githubusercontent.com/katjakoskela/json/refs/heads/main/palaveri.json')

// Muunnetaan vastaus JSON muotoon
.then(function (response) {
return response.json();
})

// Käsitellään muunnettu (eli JSON muotoinen) vastaus
.then(function (responseJson){
// Testataan onnistuuko json-luku
// jos onnistuu päivitetään tähän json-datan käsittelevän funktion kutsu
document.getElementById("vastaus").innerHTML =
"<p>Jatketaan harjoitusta</p>";
})

// Jos tuli jokin virhe
.catch(function (error) {
document.getElementById("vastaus").innerHTML =
"<p>Tietoa ei pystytä hakemaan</p>";
})

// Funktio tietojen näyttämiseksi
//function kerro(data) {
  //  var teksti = "";

    // Palaverin aihe
 //   teksti = "<h1>" + data.aihe + "</h1>";

    // Osallistujat
   // teksti = teksti + "<h3>Osallistujat (" + data.lukumaara + "):</h3><ul>";
    //for (var i = 0; i < data.nimet.length; i++) {
      //  teksti = teksti + "<li>" + data.nimet[i] + "</li>";
    //}
 //   teksti = teksti + "</ul>";

    // Paikka ja aika
   // teksti = teksti + "<h3>Paikka ja aika</h3>";
 //   teksti = teksti + "<p>Paikka: " + data.paikka + "</p>";
 //   teksti = teksti + "<p>Alkamis aika: " + data.alkaminen + "</p>";
 //   teksti = teksti + "<p>Kesto: " + data.kesto + "</p>";

    // Tulostus sivulle
   // document.getElementById("vastaus").innerHTML = teksti;

//}