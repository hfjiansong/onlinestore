const emailInput = document.querySelector("#emailInput");
const passwordInput = document.querySelector("#passwordInput");
const registerButton = document.querySelector("#registerButton");
const apiResponseMsg = document.querySelector("#apiResponseMsg");

const handleRegisterClick = async () => {
  try {
    const requestBody = {
      email: emailInput.value,
      password: passwordInput.value,
    };
    const response = await fetch("http://localhost:2345/api/users", {
      method: "POST",
      body: JSON.stringify(requestBody),
    });
    const data = await response.json();
    if (data.isErrored) {
      throw new Error();
    }
    emailInput.value = "";
    passwordInput.value = "";
    apiResponseMsg.textContent = "User has been registered.";
  } catch (error) {
    apiResponseMsg.textContent = "Email has been used.";
  }
};

registerButton.addEventListener("click", handleRegisterClick);

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});
