const express = require("express");
const cors = require("cors");

const router = require("./routes");
const app = express();
const port = 3001;

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
  }

app.use(cors( corsOptions ));
app.use(express.json());


app.use("/translate", router);
app.use("*", ((req, res) => {
    res.status(404).json({ errors: { body: ["Not found"] } })
}));

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});