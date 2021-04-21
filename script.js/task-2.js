const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const tagUl = document.getElementById("ingredients");

ingredients.forEach(function (ingredients) {
  const tagLi = document.createElement("li");

  tagLi.prepend(ingredients);
  tagUl.prepend(tagLi);
});

//console.log(tagUl);
