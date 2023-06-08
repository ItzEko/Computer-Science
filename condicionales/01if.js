//el usuario ingresa la hora y el sistema le saluda deacuerdo a las siguientes condiciones:
//hora ingresada de enetre 6 y 12 horas : buenos dias 
//entre 13 y 18 horas : Buenas tardes 
//resto de horas: Buenas noches


//variable del div que aparecera diciendo el saludo recordar que para el id es el #
const saludar = document.querySelector('#ShowHour');
//variable que contendra el boton que accionara 
const boton = document.getElementById('boton');
//hacemos una funcion de saludar dependiendo las horas del dia 
function saludosDelDia() {
    // console.log('hasta aqui la funcion funciona correctamente');
    //variable de la hora ingresada
    const hora = parseInt(document.getElementById('hora01').value) ;
    if (hora >= 6 && hora <= 12) {
        saludar.innerHTML = 'BUENOS DIAS :D';
    } else if (hora >= 13 && hora <= 18) {
        saludar.innerHTML = 'BUENAS TARDES';
    } else {
        saludar.innerHTML = 'BUENAS NOCHES';
    }
}
//declaramos la accion del boton
boton.addEventListener("click", saludosDelDia);