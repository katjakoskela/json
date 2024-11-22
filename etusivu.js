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
    teksti = "<h1>"+data.otsikko+"</h1>";
}

//tulostus sivulle
document.getElementById("vastaus").innerHTML=teksti;