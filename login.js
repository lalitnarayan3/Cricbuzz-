let errorMessage = document.getElementById("errorMessage");
let login = document.getElementById("sub");

login.addEventListener("click", (e) => {
  e.preventDefault();
  errorMessage.innerText =
    "You don't have any account. Please create an account.";
  setTimeout(() => {
    errorMessage.innerText = " ";
  }, 3000);
});
