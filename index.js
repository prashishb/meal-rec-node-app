import fetch from "node-fetch";
import express from "express";
const app = express();
const port = 3000;

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/meal", async (request, response) => {
  const fetchApi = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php",
    {
      method: "GET",
    }
  );

  const mealResponse = await fetchApi.json();
  console.log(mealResponse);
  response.json(mealResponse);
});
