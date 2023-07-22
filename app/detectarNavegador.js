var sBrowser, sUsrAg = navigator.userAgent;

const aviso = document.getElementById('dica')

if(sUsrAg.indexOf("Chrome") > -1) {
    sBrowser = "Google Chrome";
} else if (sUsrAg.indexOf("Safari") > -1) {
    sBrowser = "Apple Safari";
} else if (sUsrAg.indexOf("Opera") > -1) {
    sBrowser = "Opera";
} else if (sUsrAg.indexOf("Firefox") > -1) {
    sBrowser = "Mozilla Firefox";
} else if (sUsrAg.indexOf("MSIE") > -1) {
    sBrowser = "Microsoft Internet Explorer";
}

if (sBrowser != "Google Chrome") {
    aviso.innerHTML = `
    <div class="dica">
        <i class="fa-brands fa-chrome"></i> 
        <p class="aviso_texto">Joque no Google Chrome</p>
    </div>
    `
}
