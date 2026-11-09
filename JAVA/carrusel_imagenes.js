 //                  0                1            2
let imagenes=["imagenes/imagen-1.png","imagenes/imagen-2.png","imagenes/imagen-3.png"];//crea una variable con todas las imagenes 
let btnAnterior=document.getElementById("btnAnterior");// mediante el id obtiene el boton anterior
let btnSiguiente=document.getElementById("btnSiguiente");// mediante el id obtiene el boton anterior

let posicion=0; //posicion en el iten 0 (imagen 1)

btnSiguiente.addEventListener("click", function(){   //evento de hacer click
    let slider = document.getElementById("slider");  //crea la variable de slider (oea la imagen)
    posicion++; //aumenta posicioon de de 1 en 1
    if (posicion >= imagenes.length){  //cuando la posicion sea mayor a la totalidad de imagenes
        posicion = 0;                    // la posicion inicia de nuevo en 0
    }
    slider.src = imagenes[posicion];     
});

btnAnterior.addEventListener("click",function(){ //evento de hacer click
    let slider=document.getElementById("slider");
    posicion--;//disminuye la posicion de 1 en 1
    if(posicion<0){ //si la posicion es mayor a 0 muestre la ultima
        posicion=imagenes.length-1;  
    }
    slider.src=imagenes[posicion]; //posicion actual
})