$("form").on("submit",  (event) => {
    event.preventDefault();
    var ser1 = $("form").serialize();
    var ser2 = $("form").serializeArray();
    console.log(ser1);
    console.log(ser2);
});

// $(document).click(() => {
//      if($("#Terms").is(":checked")){
//          console.log("Aceptado");
//     } else {
//         console.log("No aceptado");
//     }
// });

//checkname
$("#uName").blur(() =>{
    checkname();
});

function checkname(){
    var pattern = /^[a-zA-Z ]*$/;
    var uName = $("#uName").val();
    
    if(pattern.test(uName) && uName !== ""){
        $("#uName").removeClass("");
        $("#uName").addClass("verde");
        console.log("Nombre válido");
    } else {
        $("#uName").removeClass("verde");
        $("#uName").addClass("rojo");
        alert("Ingresa un nombre correcto");
        console.log("Nombre Inválido");
    }
}

//checkLastName
$("#uLastname").blur(() => {
    checkLastName();
});

function checkLastName(){
    var pattern = /^[a-zA-Z ]*$/;
    var uLastname = $("#uLastname").val();
    
    if(pattern.test(uLastname) && uLastname !== ""){
        $("#uLastname").removeClass("");
        $("#uLastname").addClass("verde");
        console.log("Apellido válido");
    } else {
        $("#uLastname").removeClass("verde");
        $("#uLastname").addClass("rojo");
        alert("Ingresa un apellido correcto");
        console.log("Apellido Inválido");
    }
}

//checkemail
$("#correo").blur(() => {
    checkemail();
});

function checkemail(){
    var pattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    var Email = $("#correo").val();

    if(pattern.test(Email) && Email !== ""){
        $("#correo").removeClass("");
        $("#correo").addClass("verde");
        console.log("Correo Válido");
    } else {
        $("#correo").removeClass("verde");
        $("#correo").addClass("rojo");
        alert("Ingresa un correo");
        console.log("Correo Inválido");
    }
}

//telefono
$("#num").blur(() => {
    checkphone();
});

function checkphone(){
    var pattern = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/
    var Phone = $("#num").val();

    if(pattern.test(Phone) && Phone !== ""){
        $("#num").removeClass("");
        $("#num").addClass("verde");
        console.log("Número Válido");
    } else {
        $("#num").removeClass("verde");
        $("#num").addClass("rojo");
        alert("Ingresa un número de teléfono correcto");
        console.log("Número Inválido");
    }
}

//Validar el select

// function validar () {
//     var SelDep = $("#departamentoSelect");

//     if (SelDep.value == 0 || SelDep.value == ""){
//         alert("Selecciona una opción para continuar");
//         SelDep.focus();
//     } else {
//         alert("Opción correcta");
//         SelDep.focus();
//     }
// }

function validar(){

    var selectdep = $("#departamentoSelect");

    if(selectdep.val() === ""){
        return true;
    } else {
        return false;
    }
}