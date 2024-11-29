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
    let teksti = "<h1>Vantaan kaupungin opetusalan avoimet työpaikat</h1>";
    
    // Käydään läpi JSON-data ja luodaan lista
    teksti += "<ul>";
    for (let i = 0; i < data.length; i++) {
        teksti += "<h3>" + data[i].tyotehtava + "</h3>";
        teksti += "<p>" + data[i].osoite + "</p>";
        teksti += "<p>Hakuaika päättyy: " + data[i].haku_paattyy_pvm + "</p>";
        teksti += "<a href='" + data[i].linkki + "' target='_blank'>Lue lisää</a>";
    }
    teksti += "</ul>";
    
    // Näytetään data sivulla
    document.getElementById("vastaus").innerHTML = teksti;
}
