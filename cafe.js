fetch('https://raw.githubusercontent.com/katjakoskela/json/refs/heads/main/data.json')

// Muunnetaan vastaus JSON muotoon
.then(function (response) {
return response.json();
})

// Käsitellään muunnettu (eli JSON muotoinen) vastaus
.then(function (responseJson){
// Kutsutaan funktiota ja välitetään sille json-vastaus
/ Testataan onnistuuko json-luku
// jos onnistuu päivitetään tähän json-datan käsittelevän funktion kutsu
document.getElementById("vastaus").innerHTML =
"<p>Jatketaan harjoitusta</p>";
})

// Jos tuli jokin virhe
.catch(function (error) {
document.getElementById("vastaus").innerHTML =
"<p>Tietoa ei pystytä hakemaan</p>";
})

