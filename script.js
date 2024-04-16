// 1

const listWithId = document.querySelector('#categories'); // listWithId zostaje ustawione w wyszukanym id categories
const menuItemsByTagName = listWithId.querySelectorAll(".item"); // Nastepnie menuItemsByTagName zostaje ustawione w listWithId w wyszukanej klasie item
console.log("Number of categories: " + menuItemsByTagName.length); //wyśiwetl Number of categories: i dlugość tablicy obiektów menuItemsByTagName
menuItemsByTagName.forEach((cls) => {  //dla każdego elementu "cls" w tablicy obiektów menuItemsByTagName
  console.log("Category: " + cls.querySelector("h2").textContent); // wyświetl "Category: " oraz wartość tekstu elementu z tagu h2
  console.log("Elements: " + cls.querySelectorAll("li").length); // wyświetl "Elements: "  otraz ilość alamentów tablicy obiektów li w elemencie cls
});

//2

const ingredients = [  // odgórnie ustalona tablica z zadania
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients"); // ustawienie stałej list w wyszukanej kategorii ingredients
ingredients.forEach((ingredient) => {  // dla każdego elementu tablicy ingredients
  const lastItem = document.createElement("li"); //ustaw last item - utwórz element li
  lastItem.textContent = ingredient; // w tym samym elemencie dodaj tekst ze słowem właśnie przetwarzanego elementu
  lastItem.classList.add("Item")//dodaj klasę item
  list.append(lastItem); // dodaj na końcu powyżej przetworzony element z tablicy ingredients
})
console.log(list)


//3

const images = [
  {
    url: "<https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260>",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "<https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260>",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "<https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260>",
    alt: "Group of Horses Running",
  },
];

const parent = document.querySelector(".gallery"); // ustawienie parent na wyszukanym id gallery
images.forEach((image) => {  //dla każdego elementu mage z images
  tekst = ("<li><img>" + "<url>" + image.url + "</url>" + "</img>" + "alt= " + image.alt + "</li>") //stówrz tekst o podanym formacie
  parent.insertAdjacentHTML("beforeend", tekst)/// dodaj w dziecku na końcu łańcucha ww. tekst
})


