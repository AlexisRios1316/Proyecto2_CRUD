const form = document.getElementById("form");
const inputNombre = document.getElementById("Nombre");
const inputEmail = document.getElementById("Email");
const inputPassword = document.getElementById("Password");
const content = document.getElementById("content");

// crear la clase registro
class Registration {
  Nombre;
  Email;
  Password;

  constructor(Nombre, Email, Password) {
    this.Nombre = Nombre;
    this.Email = Email;
    this.Password = Password;
  }

  SaveRegistro() {
    let newRegistro = new Registration(this.Nombre, this.Email, this.Password);
    localStorage.setItem("user", JSON.stringify(newRegistro));

    //localStorage.setItem("Nombre", JSON.stringify(this.Nombre));
    //localStorage.setItem("Email", JSON.stringify(this.Email));
    //localStorage.setItem("Password", JSON.stringify(this.Password));
  }
}

// AGREGAR EL EVENTO AL FORMULARIO
form.addEventListener("submit", function (evt) {
  evt.preventDefault(); //recargar la pagina
  let newRegistro = new Registration(
    inputNombre.value,
    inputEmail.value,
    inputPassword.value
  );

  window.location.href = "index.html";
  newRegistro.SaveRegistro();
  console.log(newRegistro);
});
