fetch('https://raw.githubusercontent.com/katjakoskela/json/refs/heads/main/data.json')

// Muunnetaan vastaus JSON muotoon
.then(function (response) {
return response.json();
})

// Käsitellään muunnettu (eli JSON muotoinen) vastaus
.then(function (responseJson){
// Kutsutaan funktiota ja välitetään sille json-vastaus
kerro(responseJson);
})

// Jos tuli jokin virhe
.catch(function (error) {
document.getElementById("vastaus").innerHTML =
"<p>Tietoa ei pystytä hakemaan</p>";
})

// Funktio tietojen näyttämiseksi
function kerro(data) {
    var teksti = "";

    // Yhteystiedot
    teksti = "<h1>" + data.yritys + "</h1>";
    teksti = teksti + "<p>Osoite: " + data.yhteystiedot.osoite + "</p>";
    teksti = teksti + "<p>Puhelin: " + data.yhteystiedot.puhelin + "</p>";
    teksti = teksti + '<p>Email: <a href="mailto:' + data.yhteystiedot.email + '">' + data.yhteystiedot.email + "</a></p>";

    // Tuotteet-taulukko
    teksti = teksti + "<h3>Tuotteet</h3><ul>";
    for (var i = 0; i < data.tuotteet.length; i++) {
        teksti = teksti + "<li>" + data.tuotteet[i] + "</li>";
    }
    teksti =  teksti + "</ul>";

    // Henkilökunta-taulukko
    teksti = teksti + "<h3>Henkilökunta</h3><ul>";
    for (var i = 0; i < data.henkilokunta.length; i++) {
        teksti = teksti + "<li>" + data.henkilokunta[i].nimi + " - " + data.henkilokunta[i].titteli + "</li>";
    }
    teksti = teksti + "</ul>";

    // Tulostus sivulle
    document.getElementById("vastaus").innerHTML = teksti;
}
