const express = require("express");
const app = express();

app.get("/", (_req, res) => {
  return res.send("Ruuning");
});
app.get("/post", async (_req, res) => {
  res.send(await postGenerator());
});

const postGenerator = async () => {
  const post = [];
  for (let index = 0; index < 20; index++) {
    const rawData = await fetch("https://api.chucknorris.io/jokes/random");
    const jsonData = await rawData.json();
    post.push(jsonData);
  }
  return post;
};

module.exports = app;
