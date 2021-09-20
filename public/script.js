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
  let mealName = data.meals[0].strMeal;
  let mealImage = data.meals[0].strMealThumb;

  let mealNameDiv = document.createElement("div");
  mealNameDiv.id = "mealName";
  mealNameDiv.textContent = mealName;
  document.querySelector("#mealWrapper").appendChild(mealNameDiv);

  let img = document.createElement("img");
  img.id = "mealImage";
  img.src = mealImage;
  img.alt = mealName;
  document.querySelector("#mealWrapper").appendChild(img);
}
