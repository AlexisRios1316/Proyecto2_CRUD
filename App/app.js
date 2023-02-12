const button1 = document.querySelector("#button");
const btn_Buscar = document.getElementById("btn_Buscar");
const btn_delete_full = document.getElementById("btn_delete_full");

//TABLA PRODUCTO GUARDAR EN LA TABLA
var tablaProducto = localStorage.getItem("TablaProductoStorage");
tablaProducto = JSON.parse(tablaProducto);
if(tablaProducto == null){
  var tablaProducto = [];
}


// BOTON GUARDAR
btn_Buscar.addEventListener("click", () => lista());


function lista() {
  console.log("INGRESANDO LISTA");
  //CREAR UNA CADENA 
  var dataFile = '';
// VISUALIZAR  DATOS A LA TABLA 
  if(tablaProducto.length > 0){
    for(const i in tablaProducto){
   var varProducto = JSON.parse(tablaProducto[i]);
   dataFile += "<tr>";
   dataFile += "<td>" + varProducto.idProducto+"</td>";
   dataFile += "<td>" + varProducto.Nombre+"</td>";
   dataFile += "<td>" + varProducto.Marca+"</td>";
   dataFile += "<td>" + varProducto.Modelo+"</td>";
   dataFile += "<td>" + varProducto.Talla+"</td>";
   dataFile += "<td>" + varProducto.Estado+"</td>";
   dataFile += "<td>" + varProducto.Comentarios+"</td>";
   dataFile += "<td>" +
"<buttton type='button' class='btn btn-dark' onclick='abrirForm("+varProducto.idProducto+")'>EDITAR </button>"+ "</td>";
   dataFile += "</tr>";}
    document.getElementById("dataProducto").innerHTML = dataFile
  }

}




//BOTON NUEVO
button1.addEventListener("click", (e) => {
  //e.preventDefault();
  abrirForm(0);
});
// //
function abrirForm(idForm) {
  localStorage.setItem("idForm", JSON.stringify(idForm));
  window.location.replace("productos_form.html");
}



//FUNCION Y BOTON PARA ELIMINAR TODO 
function Delete_full_()
{
  localStorage.setItem("TablaProductoStorage", JSON.stringify([]));
  window.location = "app.html";
console.log("Borrar TODO ")
}  // BOTON PARA ELIMINAR TODO
 

btn_delete_full.addEventListener("click",() => {
Delete_full_();
})
