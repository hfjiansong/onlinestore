const nameInput = document.querySelector("#nameInput");
const priceInput = document.querySelector("#priceInput");
const addButton = document.querySelector("#addButton");
const apiResponseMsg = document.querySelector("#apiResponseMsg");

const handleAddClick = async () => {
  try {
    const requestBody = {
      name: nameInput.value,
      price: priceInput.value,
    };
    const response = await fetch("http://localhost:2345/api/products", {
      method: "POST",
      body: JSON.stringify(requestBody),
    });
    await response.json();
    nameInput.value = "";
    priceInput.value = "";
    apiResponseMsg.textContent = "Product has been added.";
  } catch (error) {
    console.log(error);
    apiResponseMsg.textContent =
      "Something went wrong. Product has not been added.";
  }
};

addButton.addEventListener("click", handleAddClick);
