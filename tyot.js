// Haetaan data REST API:sta
fetch('http://gis.vantaa.fi/rest/tyopaikat/v1/Opetusala')
    .then(function (response) {
        return response.json(); // Muutetaan vastaus JSON-muotoon
    })
    .then(function (responseJson) {
        // Kutsutaan funktiota joka näyttää tiedot
        kerro(responseJson);
    })
    .catch(function (error) {
        // Näytetään virheviesti, jos tietojen haku epäonnistuu
        document.getElementById("vastaus").innerHTML =
            "<p>Tietoa ei pystytä hakemaan</p>";
    });

// Funktio tietojen näyttämiseksi
function kerro(data) {
    var teksti = "";
    teksti = "<ul>";
    
    // Luodaan lista
    for (var i=0; i<data.lenght; i++){
        teksti = teksti + "<li>" + data.tyotehtava[i]+ "</li>";
    }
    
    teksti = teksti + "</ul>";
    // Näytetään data sivulla
    document.getElementById("vastaus").innerHTML = teksti;
}
