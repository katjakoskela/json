fetch('http://gis.vantaa.fi/rest/tyopaikat/v1/Tekninen%20ala')


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
function kerro(data) {
    var teksti = "";

    // Otsikko
    teksti = "<h1>Vantaan kaupungin opetusalan avoimet työpaikat</h1>";
    
    // Käydään läpi JSON-data ja luodaan lista
            teksti = teksti + "<ul>";
            for (var i = 0; i < data.length; i++) {
                teksti += "<li>";
                teksti += "<h3>" + data[i].tyotehtava + "</h3><br>";
                teksti += "<p>" + data[i].ammattiala + "</p><br>";
                teksti += "<p>" + data[i].organisaatio + "</p><br>";
                teksti += "<p>" + data[i].tyoavain + "</p><br>";
                teksti += "<p>" + data[i].osoite + "</p><br>";
                teksti += "<p>" + data[i].haku_paattyy_pvm + "</p><br>";
                teksti += "<a href='" + data[i].linkki + "' target='_blank'>Lue lisää</a>";
                teksti += "</li>";
            }
            teksti += "</ul>";

    // Tulostus sivulle
    document.getElementById("vastaus").innerHTML = teksti;

}