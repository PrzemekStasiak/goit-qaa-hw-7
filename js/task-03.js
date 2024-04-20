const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const gallery = document.querySelector(".gallery"); // ustawienie parent na wyszukanym id gallery
const items = images.map((image) => { //mapowanie każdego elementu images
    return `<li><img src=${image.url} /> alt ="${image.alt}" </li>`; //zwróć do tablicy o podanej frazie
  }).join(" "); // wywołaj funkcję join
gallery.insertAdjacentHTML("beforeend", items); /// dodaj w dziecku na końcu łańcucha ww. stworzoną nową tablicę i sformatowaną do HTML
