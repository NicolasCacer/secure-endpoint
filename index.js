const express = require('express');

const app =express();
const PORT=8080;

const loginRouter= require("./routes/login");

const profileRouter= require("./routes/profile");

const formRouter= require("./routes/form");

const contactsRouter= require("./routes/contacts");

app.get("/", (req, res) => {
    res.send("DarekAlma - juanpablomoreno Funcionando :)");
  });

app.use("/login",loginRouter);

app.use("/profile",profileRouter);

app.use("/form",formRouter);

app.use("/contacts",contactsRouter);

app.listen(PORT, () => {
  console.log(`Servidor esta vivito y corriendo en ${PORT}`);
});



  