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
    let teksti = "";

    // Yrityksen nimi
    teksti += `<h1>${data.yritys}</h1>`;

    // Yhteystiedot
    teksti += `
        <h2>Yhteystiedot</h2>
        <p>Osoite: ${data.yhteystiedot.osoite}</p>
        <p>Puhelin: ${data.yhteystiedot.puhelin}</p>
        <p>Sähköposti: <a href="mailto:${data.yhteystiedot.email}">${data.yhteystiedot.email}</a></p>
    `;

    // Tuotteet
    teksti += `<h2>Tuotteet</h2><ul>`;
    data.tuotteet.forEach(tuote => {
        teksti += `<li>${tuote}</li>`;
    });
    teksti += `</ul>`;

    // Henkilökunta
    teksti += `<h2>Henkilökunta</h2><ul>`;
    data.henkilokunta.forEach(henkilo => {
        teksti += `<li>${henkilo.nimi} - ${henkilo.titteli}</li>`;
    });
    teksti += `</ul>`;

    // Tulostus sivulle
    document.getElementById("vastaus").innerHTML = teksti;
}
