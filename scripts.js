const form = document.querySelector(".formulario-fale-conosco")
const mascara= document.querySelector(".ascara-formulario")

function mostrarform(){
    form.style.left = "50%"
    form.style.transform = "translatex(-50%)"
    mascara.style.Visibility = "visible"
}

   function esconderform(){
    form.style.left = "-300px"
    form.style.transform = "translatex(0)"
    mascara.style.Visibility = "hidden"
   }



