const express = require("express");
const router = require("./routes");
const app = express();

const port = 3001;

app.use("/translate", router);
app.use("*", ((req, res) => {
    res.status(404).json({ errors: { body: ["Not found"] } })
}));

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});