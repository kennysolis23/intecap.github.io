
/*Creacion de la variable arrays de dos dimenciones llamada tabla*/
let tabla=[]

/*La variable tabla contendra los datos del formulario*/

tabla[0,0]="Nombre"
tabla[0,1]="correo"
tabla[0,2]="Num. de telefono"
tabla[0,3]="fecha de nacimiento"
tabla[0,4]="genero"
tabla[0,5]="Direccion 1"
tabla[0,6]="Direccion 2"
tabla[0,7]="Pais"
tabla[0,8]="Cuidad"
tabla[0,9]="region"
tabla[0,10]="Codigo postal"
/*
su orden y estructura sera el siguiente:

       0       1            2                   3              4          5             6           7       8          9           10 
  0  Nombre  Correo  Num. de telefono   fecha de nacimiento  Genero   Direccion 1  direccion 2    Pais    Ciudad    Region    Codigo postal 

  1    v1      v2           v3                  v4             v5         v6           v7          v8        v9       v10          v11
*/

/*en la fila 1 estaran los datos y se identican conla variable v seguido de numero del dato que corresponde */

/*se crea la variable fecha para almacenar la fecha actual*/
let fecha = new Date()
dia=fecha.getDate()
mes=fecha.getMonth()+1 //se suma uno al mes para que encaje con el calendrio
año=fecha.getFullYear()

//se utiliza la funcion autentificar para el login

function autenticacion() 
{
    //entrada
    let usuario=document.getElementById("txtusuario").value;
    let  email=document.getElementById("txtemail").value;
    let contraseña=document.getElementById("txtcontraseña").value;

    //comprobacion de los dos ususrios rejistrados
    if(( usuario=="kenny solis" && email=="kjse20@gmail.com" && contraseña=="123456") || ( usuario=="Gus" && email=="galh@gmail.com" && contraseña=="010906"))
        {

           window.location.href="inicio/inicio.html"

        }
        else{

            alert("error, correo , usuario o contraseña incorrectos ")
        }

}

//usuarios nuevos
function nuevo(){
   window.location.href="inicio/inicio.html"
}

//acceder al formulario
function entrar(){

    window.location.href= "../Formulario/index.html"

}

//regresar a la pantalla de inicio 
function inicio(){

    window.location.href= "../inicio/inicio.html"

}

//guardar los datos del formulario
function capturar(){
    let v1=document.getElementById("d1").value
    let v2=document.getElementById("d2").value
    let v3=document.getElementById("d3").value
    let v4=document.getElementById("d4").value
    let v5=document.querySelector('input[name="Genero"]:checked') //saber que radio button fue el seleccionado
    let v6=document.getElementById("d6").value
    let v7=document.getElementById("d7").value
    let v8=document.getElementById("d8").value
    let v9=document.getElementById("d9").value
    let v10=document.getElementById("d10").value
    let v11=document.getElementById("d11").value

    //llenar la tabla del array
    tabla[1,0]=v1
    tabla[1,1]=v2
    tabla[1,2]=v3
    tabla[1,3]=v4
    tabla[1,4]=v5.value
    tabla[1,5]=v6
    tabla[1,6]=v7
    tabla[1,7]=v8
    tabla[1,8]=v9
    tabla[1,9]=v10
    tabla[1,10]=v11

    //mensaje de aviso
    alert("se envio exitosamnete")
}

//funcion para descargar en pdf el formulario
function mostrar(){

    //entrada
    let v1=document.getElementById("d1").value
    let v2=document.getElementById("d2").value
    let v3=document.getElementById("d3").value
    let v4=document.getElementById("d4").value
    let v5=document.querySelector('input[name="Genero"]:checked')
    let v6=document.getElementById("d6").value
    let v7=document.getElementById("d7").value
    let v8=document.getElementById("d8").value
    let v9=document.getElementById("d9").value
    let v10=document.getElementById("d10").value
    let v11=document.getElementById("d11").value

    //datos guardados en el array
    tabla[1,0]=v1
    tabla[1,1]=v2
    tabla[1,2]=v3
    tabla[1,3]=v4
    tabla[1,4]=v5.value
    tabla[1,5]=v6
    tabla[1,6]=v7
    tabla[1,7]=v8
    tabla[1,8]=v9
    tabla[1,9]=v10
    tabla[1,10]=v11


    //creacio del documento pdf
   var doc=new jsPDF();  //se utiliza la libreria de jspdf


   //se va creando linea por linea el documento, el numero izauiero determina el amrgen del los lados y el de la derecha determina el margen de arriba
   doc.text(80,20,"Formulario De Rejistro")
   doc.text(20,30,"Documento con los datos de rejistro para la futura documentacion y uso de:")
   doc.text(20,50,"Nombre completo")
   doc.text(40,60,tabla[1,0])
   doc.text(20,70,"Correo Electronico")
   doc.text(40,80,tabla[1,1])
   doc.text(20,90,"Numero De Telefono")
   doc.text(40,100,tabla[1,2])
   doc.text(120,90,"Fecha de Nacimiento")
   doc.text(140,100,tabla[1,3])
   doc.text(20,110,"Genero")
   doc.text(40,120,tabla[1,4])
   doc.text(20,130,"Direciones")
   doc.text(40,140,tabla[1,5])
   doc.text(40,150,tabla[1,6])
   doc.text(20,160,"País")
   doc.text(40,170,tabla[1,7])
   doc.text(120,160,"Ciudad")
   doc.text(140,170,tabla[1,8])
   doc.text(20,180,"Region")
   doc.text(40,190,tabla[1,9])
   doc.text(20,200,"Codigo Postal")
   doc.text(40,210,tabla[1,10])
   doc.text(100,280,dia+"/"+mes+"/"+año)

   //se gurada el pdef con la palabra reservada save y se le coloca un nombre al archivo
   doc.save("Formulario-Intecap.pdf")
}


