const searchButton = document.querySelector("#searchButton");
const searchInput = document.querySelector("#searchInput");
const searchResultList = document.querySelector("#searchResultList");

const handleSearchClick = async () => {
  try {
    const response = await fetch(
      `http://localhost:2345/api/products/${searchInput.value}`
    );
    const data = await response.json();
    if (data.length) {
      data.map((ele) => {
        const newRow = document.createElement("li");
        newRow.innerText = `Product Name: ${ele.name}, Price: ${ele.price}`;
        searchResultList.appendChild(newRow);
      });
    } else {
      while (searchResultList.firstChild) {
        searchResultList.removeChild(searchResultList.firstChild);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

searchButton.addEventListener("click", handleSearchClick);
