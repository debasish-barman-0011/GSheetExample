// JavaScript code to handle form submission and show confirmation messages

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Retrieve form data
    let studentName = document.getElementById("studentName").value;
    let department = document.getElementById("department").value;
    let randomID = generateRandomID(); // Function to generate random Student ID
    // Calculate physical verification date
    let registrationDate = new Date();
    let verificationDate = new Date(registrationDate);
    verificationDate.setDate(registrationDate.getDate() + 3);
    // Display confirmation message
    document.getElementById("confirmationName").textContent = studentName;
    document.getElementById("confirmationDepartment").textContent = department;
    document.getElementById("confirmationID").textContent = randomID;
    document.getElementById("verificationDate").textContent =
      verificationDate.toDateString();
    document.getElementById("confirmationMessage").style.display = "block";
    document
      .getElementById("confirmationMessage")
      .scrollIntoView({ behavior: "smooth" });
  });

// Function to generate random ID
function generateRandomID() {
  return Math.floor(Math.random() * 1000000) + 1; // it Generates a random number between 1 and 1000000
}
