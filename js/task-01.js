const categories = document.querySelectorAll(".item"); // Categories zostaje ustawione i zebrane wszystkie calsy item
console.log("Number of categories: " + categories.length); //wyśiwetl "Number of categories: " i dlugość tablicy obiektów item
categories.forEach((cls) => {
  //dla każdego elementu "cls" w tablicy obiektów categories
  console.log("Category: " + cls.querySelector("h2").textContent); // wyświetl "Category: " oraz wartość tekstu elementu z tagu h2
  console.log("Elements: " + cls.querySelectorAll("li").length); // wyświetl "Elements: "  otraz ilość alamentów tablicy obiektów li w elemencie cls
})
