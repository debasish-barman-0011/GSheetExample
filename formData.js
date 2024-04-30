
const scriptURL = "https://script.google.com/macros/s/AKfycbwieG4yS1vUBFg201plJIW8OlvfYGblWb_R8hAl0AaC_dH5s75TEHt_iKY8089NF13Z/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent To The ADMIN";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 4000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
