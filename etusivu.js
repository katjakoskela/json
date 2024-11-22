fetch('https://jaakkola.github.io/json/digitekniikat.json')

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

function kerro (data){
    //muuttuja tejsti, johon tulostettava tieto kerätään
    var teksti="";
    teksti = "<h1>" + data.otsikko + "</h1>";
    teksti = teksti + "<p>" + data.kuvaus + "</p>";
    teksti = teksti + "<p><img src='" + data.kuva + "' alt='kuva' ></p>";

//tulostus sivulle
document.getElementById("vastaus").innerHTML = teksti;
}