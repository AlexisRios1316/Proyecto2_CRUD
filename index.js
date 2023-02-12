const Email = document.getElementById("Email");
const Password = document.getElementById("Password");
const login_form = document.getElementById("login-form");
console.log(Swal);

//Mandar a llamar el registro o validacion del usuario

// JSON.PARSE PARA CONVERTIR UN STRING A UN OBJETO
const User = JSON.parse(localStorage.getItem("user"));
console.log(User);
//

//EVENTO
login_form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  if (Email.value === User.Email && Password.value === User.Password) {
    console.log("SON IGUALES");
    window.location.href = "App/app.html";
  } else {
    console.log("NO SON IGUALES ");
    Swal.fire("Any fool can use a computer");
  }
});
