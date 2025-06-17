const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { readdirSync } = require("fs");

const app = express();
const port = 3001;

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

readdirSync("./routes").map((item) =>
  app.use("/api", require("./routes/" + item))
);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
