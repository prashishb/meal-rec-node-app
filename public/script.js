console.log("scrip.js loaded");

document.querySelector("#btnLoad").addEventListener("click", () => {
  if (document.querySelector("#mealName") !== null) {
    document.querySelector("#mealName").remove();
  }
  if (document.querySelector("#mealImage") !== null) {
    document.querySelector("#mealImage").remove();
  }
  getMeal();
});

async function getMeal() {
  const response = await fetch("/meal");
  const data = await response.json();
  let meals = data.meals[0];
  let mealName = meals.strMeal;
  let mealImage = meals.strMealThumb;

  let mealNameDiv = document.createElement("div");
  mealNameDiv.id = "mealName";
  mealNameDiv.textContent = mealName;
  document.querySelector("#mealWrapper").appendChild(mealNameDiv);

  let img = document.createElement("img");
  img.id = "mealImage";
  img.src = mealImage;
  img.alt = mealName;
  document.querySelector("#mealWrapper").appendChild(img);

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meals[`strIngredient${i}`]) {
      ingredients.push(
        `${meals[`strIngredient${i}`]} - ${meals[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }

  ingredientsUl.innerHTML = "<li>" + ingredients.join("</li><li>") + "</li>";
}
