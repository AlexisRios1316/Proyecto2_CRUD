//VARIABLES
const btn_Guardar = document.querySelector("#btn-Guardar");
const input_IDproducto = document.getElementById('txtidProducto');
const input_Nombre = document.getElementById('txtNombre');
const input_Marca = document.getElementById('txtMarca');
const input_Modelo = document.getElementById('txtModelo');
const input_Talla = document.getElementById('txtTalla');
const input_Estado = document.getElementById('txtEstado');
const input_Cmn = document.getElementById('txtComentarios');



//BOTON GUARDAR
function Guardar() {
    console.log("PRESIONO GUARDAR");
    var objProducto = JSON.stringify({
      // secuenciador de incrementos IDFORM
idProducto : (idForm > 0)? idForm: (tablaProducto.length + 1),
Nombre: input_Marca.value,
Marca : input_Marca.value,
Modelo : input_Modelo.value,
Talla : input_Talla.value,
Estado : input_Estado.value,
Comentarios : input_Cmn.value,
    });
    console.log(objProducto);
// BOTON _____ EDITAR PACIENTE 
if(idForm > 0){
  for(const i in tablaProducto){
    var varProducto = JSON.parse(tablaProducto[i]);
    if(varProducto.idProducto == idForm){
      tablaProducto[i]= objProducto;
      break;
    }
  }
}else{
  // AGREGAR NUEVOS PACIENTES //
//PUSH SIRVE PARA AÑADE UNO O MAS ELEMENTOS AL FINAL DE UN ARRAY 
//DEVOLVIENDO UNA LONGITUD DEL ARRAR
tablaProducto.push(objProducto);


}
  
localStorage.setItem("TablaProductoStorage",JSON.stringify(tablaProducto));
window.location.replace("app.html")
  }
//BOTON GUARDAR
btn_Guardar.addEventListener("click", () => Guardar());

//TABLA PRODUCTO GUARDAR EN LA TABLA
var tablaProducto = localStorage.getItem("TablaProductoStorage");
tablaProducto = JSON.parse(tablaProducto);
if(tablaProducto == null){
  var tablaProducto = [];
}
  var idForm = localStorage.getItem("idForm");
  idForm = JSON.parse(idForm);
  if(idForm === null){
    var idForm = 0;
  }

  CargarPagina();

  function CargarPagina(){
    if(idForm > 0){
        // SACAR DATOS DE LA FILA DE LA TABLA 
        // SIRVE PARA INTERACTUAR CON EL INCREMENTO DE LA TABLA 
        for(const i in tablaProducto){
          var varProducto = JSON.parse(tablaProducto[i]);
          if(varProducto.idProducto == idForm){
//EXTRAER LA INFORMACION DE LOS INPUT Y MOSTRAR EN LA TABLA 
            document.getElementById('txtidProducto').value = varProducto.idProducto;
            document.getElementById("txtNombre").value = varProducto.Nombre;
            document.getElementById("txtMarca").value = varProducto.Marca;
            document.getElementById("txtModelo").value = varProducto.Modelo;
            document.getElementById("txtTalla").value = varProducto.Talla;
            document.getElementById("txtEstado").value = varProducto.Estado;
            document.getElementById("txtComentarios").value = varProducto.Comentarios;

            
        
        }
    }
  }
  }
