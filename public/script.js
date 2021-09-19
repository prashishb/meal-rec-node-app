console.log("scrip.js loaded");

document.querySelector("#btnLoad").addEventListener("click", () => {
  getMeal();
});

async function getMeal() {
  const response = await fetch("/meal");
  const data = await response.json();
  let mealName = data.meals[0].strMeal;
  let mealImage = data.meals[0].strMealThumb;
  console.log(mealName);
  document.querySelector("#mealName").textContent = mealName;
  console.log(mealImage);

  if (document.querySelector("#mealImage") !== null) {
    document.querySelector("#mealImage").remove();
  }

  let img = document.createElement("img");
  img.id = "mealImage";
  img.src = mealImage;
  img.alt = mealName;
  document.querySelector("body").appendChild(img);
}
