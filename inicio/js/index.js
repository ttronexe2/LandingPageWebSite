// Obtenir l'idioma de la URL si existeix i executar la funció "changeLanguage"
const querystring = window.location.search; // Si la url és: https://miweb.es?lang=es , retorna ?lang=es
const urlParams = new URLSearchParams(querystring);
if (urlParams.get('lang')) {
    const lang = urlParams.get('lang');
    changeLanguage(lang);
}

async function changeLanguage(lang) {
    // Guardar l'idioma a la URL
    const newURL = window.location.protocol + '//' + window.location.host + window.location.pathname + '?lang=' + lang;
    window.history.replaceState({}, '', newURL);

    // Obtenir el fitxer json corresponent
    const response = await fetch(`./i18n/${lang}.json`);
    const data = await response.json();

    // Canviar els texts (Aquesta és la part que heu de modificar)

    //const label = document.getElementById('first-name-text');
    //console.log(label)


    /* Nav */

    document.getElementById('nav-home').innerHTML = data.nav.nav1;
    document.getElementById('nav-menu').innerHTML = data.nav.nav2;
    document.getElementById('nav-about').innerHTML = data.nav.nav3;
    document.getElementById('nav-contact').innerHTML = data.nav.nav4;

    /* Title */
    document.getElementById('title').innerHTML = data.h1.h1;

    /* BTN Order */

    document.getElementById('btn-title').innerHTML = data.btn.btn;

    /* Ubi */

    document.getElementById('h2-ubi').innerHTML = data.h2.h2;
    document.getElementById('text-ubi').innerHTML = data.text.text4;

    /* Menus */

    document.getElementById('text-1').innerHTML = data.text.text1;
    document.getElementById('text-2').innerHTML = data.text.text2;
    document.getElementById('text-3').innerHTML = data.text.text3;

    document.getElementById('ver1').innerHTML = data.btn.ver;
    document.getElementById('ver2').innerHTML = data.btn.ver;
    document.getElementById('ver3').innerHTML = data.btn.ver;


    /* Tienes hambre */

    document.getElementById('title-hambre').innerHTML = data.hambre.h2;
    document.getElementById('btn-hambre').innerHTML = data.btn.btn;

    /* Form */

    document.getElementById('label-contact').innerHTML = data.form.f1;
    document.getElementById('label-name').innerHTML = data.form.f2;
    document.getElementById('label-lastname').innerHTML = data.form.f3;
    document.getElementById('label-mail').innerHTML = data.form.f4;
    document.getElementById('label-message').innerHTML = data.form.f5;









}