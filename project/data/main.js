const request = new XMLHttpRequest();
request.open("GET", "data.json");
request.setRequestHeader("Content-type", "application/json");
request.send();

request.onload = () => {
  const data = JSON.parse(request.response);
  const personsBlock = document.querySelector(".characters");

  data.forEach((person) => {
    const personCard = document.createElement("div");
    personCard.setAttribute("class", "person-card");
    personCard.innerHTML = `
      <div class="person-image">
        <img src="${person.photo}" alt="${person.name}">
      </div>
      <h2>${person.name}</h2>
      <p>age: ${person.age}</p>
    `;
    personsBlock.appendChild(personCard);
  });
};

function part2() {
  const request = new XMLHttpRequest();
  request.open("GET", "part2.json");
  request.setRequestHeader("Content-type", "application/json");
  request.send();

  request.onload = () => {
    const { name, age, favoriteGame, amountGame } = JSON.parse(
      request.response
    );
    console.log(
      "name" + " " + name + ",",
      age + " " + "year" + ",",
      favoriteGame + " " + "favoriteGame" + ",",
      amountGame + " " + "amountGame"
    );
  };
}

part2();
