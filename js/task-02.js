const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulingredients = document.querySelector("#ingredients"); // ustawienie stałej list w wyszukanej kategorii ingredients
//stworzymy nową tablicę z tablicy ingredients
let items = ingredients.map((ingredient) => {
  const li = document.createElement("li"); // dla stałej li tworzymy element li HTML
  li.textContent = ingredient; // do li dodajemy tekst w postaci elementu tablicy ingredients
  li.classList.add("item"); // do stalej li przypisujemy klase item
  return li; //zwracamy li do nowej tablicy
});

ulingredients.append(...items); // dodajemy wszystkie nowo utworzoną tablicę do HTML
