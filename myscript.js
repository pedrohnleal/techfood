var currentImgIndex = 1;
var ImgSrcArray = [
    './assets/img/lettuce.svg',
    './assets/img/orange.svg',
    './assets/img/apple.svg',
    './assets/img/tomato.svg'
];

function trocarPrimeiro() {

    if (currentImgIndex == ImgSrcArray.length) {
        currentImgIndex = 0;
    }
    document.getElementById("alface-imagem").src = ImgSrcArray[currentImgIndex];
    currentImgIndex++;

}

function trocarSegundo() {

    if (currentImgIndex == ImgSrcArray.length) {
        currentImgIndex = 0;
    }
    document.getElementById("laranja-imagem").src = ImgSrcArray[currentImgIndex];
    currentImgIndex++;

}

function trocarTerceiro() {

    if (currentImgIndex == ImgSrcArray.length) {
        currentImgIndex = 0;
    }
    document.getElementById("maca-imagem").src = ImgSrcArray[currentImgIndex];
    currentImgIndex++;

}

function trocarQuarto() {

    if (currentImgIndex == ImgSrcArray.length) {
        currentImgIndex = 0;
    }
    document.getElementById("tomate-imagem").src = ImgSrcArray[currentImgIndex];
    currentImgIndex++;

}

/****** REDIRECIONAMENTO ******/
function redi() {
    var radio = document.getElementsByName('opcao-registro');
    for (i = 0; i < radio.length; i++) {
        if (radio[0].checked) {
            window.location.assign("cadastroEmpresa.html");
        } else if (radio[1].checked) {
            window.location.assign("cadastroONG.html");
        } else if (radio[2].checked) {
            window.location.assign("cadastroUsuario.html");
        }
    }
}

/****** VALIDAÇÃO ******/
function validarRegistro() {
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");

    if (email.value == "") {
        alert("E-mail não informado.");
        email.focus();
    } else if (senha.value == "") {
        alert("Senha não informada.");
        senha.focus();
    }
    else {
        redi();
    }
}

var num = 1;
var num2 = 1;
var num3 = 1;
var num4 = 1;
function aumentarPrimeiro() {
    document.getElementById("caixote1").innerHTML = (num = num + 1) + " caixotes";
}
function diminuirPrimeiro() {
    document.getElementById("caixote1").innerHTML = (num = num - 1) + " caixotes";
}

function aumentarSegundo() {
    document.getElementById("caixote2").innerHTML = (num2 = num2 + 1) + " caixotes";
}
function diminuirSegundo() {
    document.getElementById("caixote2").innerHTML = (num2 = num2 - 1) + " caixotes";
}

function aumentarTerceiro() {
    document.getElementById("caixote3").innerHTML = (num3 = num3 + 1) + " caixotes";
}
function diminuirTerceiro() {
    document.getElementById("caixote3").innerHTML = (num3 = num3 - 1) + " caixotes";
}

function aumentarQuarto() {
    document.getElementById("caixote4").innerHTML = (num4 = num4 + 1) + " caixotes";
}
function diminuirQuarto() {
    document.getElementById("caixote4").innerHTML = (num4 = num4 - 1) + " caixotes";
}

function mascara(i, t) {

    var v = i.value;

    if (isNaN(v[v.length - 1])) {
        i.value = v.substring(0, v.length - 1);
        return;
    }

    if (t == "uf") {
        i.setAttribute("maxlength", "2");
        if (v.length == 2);
    }

    if (t == "data") {
        i.setAttribute("maxlength", "10");
        if (v.length == 2 || v.length == 5) i.value += "/";
    }

    if (t == "cpf") {
        i.setAttribute("maxlength", "14");
        if (v.length == 3 || v.length == 7) i.value += ".";
        if (v.length == 11) i.value += "-";
    }

    if (t == "cnpj") {
        i.setAttribute("maxlength", "18");
        if (v.length == 2 || v.length == 6) i.value += ".";
        if (v.length == 10) i.value += "/";
        if (v.length == 15) i.value += "-";
    }

    if (t == "cep") {
        i.setAttribute("maxlength", "9");
        if (v.length == 5) i.value += "-";
    }

    if (t === "telefone") {
        if (v.length === 1) i.value = "(" + i.value;
        if (v.length === 3) i.value += ") ";
        if (v[5] == 9) {
            i.setAttribute("maxlength", "15");
            if (v.length === 10) i.value += "-";
        } else {
            i.setAttribute("maxlength", "14");
            if (v.length === 9) i.value += "-";
        }
    }
}

function somenteNumeros(e) {
    var charCode = e.charCode ? e.charCode : e.keyCode;
    if (charCode != 8 && charCode != 9) {
        if (charCode < 48 || charCode > 57) {
            return false;
        }
    }
}

