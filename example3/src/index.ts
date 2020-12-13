import * as express from "express";

const app = express();

app.get("/", (_, res) => {
    res.send("<h1>Hello, world!</h1>");
});

app.listen(8080, () => {
    console.log("Started listening to port 8080");
});
