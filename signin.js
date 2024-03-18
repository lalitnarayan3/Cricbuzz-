let signinbtn = document.getElementById("signinbtn");
let success = document.getElementById("success");

signinbtn.addEventListener("click", (e) => {
  e.preventDefault();
  success.innerText = "You have successfully Logged";
  setTimeout(() => {
    window.location.href = "index.html";
  }, 2000);
});
