const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients"); // ustawienie stałej list w wyszukanej kategorii ingredients
ingredients.forEach((ingredient) => {  // dla każdego elementu tablicy ingredients
  const lastItem = document.createElement("li"); //ustaw last item - utwórz element li
  lastItem.textContent = ingredient; // w tym samym elemencie dodaj tekst ze słowem właśnie przetwarzanego elementu
  lastItem.classList.add("Item")//dodaj klasę item
  list.append(lastItem); // dodaj na końcu powyżej przetworzony element z tablicy ingredients
})
