const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

const usuarios = [
    {
        nome: "Jujuzona do Grau",
        endereco: "Rua: Rua da Saudade 333",
    },
    {
        nome: "Batatinha 123",
        endereco: "casa do café",
    },
    {
        nome: "Camz",
        endereco: "Av.Ivinhema",
    },
];

app.get("/", (req, res) => {
    res.render("home", { usuarios });
});

app.get("/cadastro", (req, res) => {
    res.render("formCadastro",{usuarios})
});

app.put("/cadastro", (req, res)=>{
    req.render(usuarios.push)
})

app.get("/usuario/:id", (req, res) => {
    let usuario = {
        nome: "Jujuzona do Grau",
        endereco: "Rua: Rua da Saudade 333",
    };
    res.render("usuarios", {
        usuario,
        id: req.params.id,
    });
});


app.listen(8000, () => {
    console.log("Servidor está rodando corretamente!")
    console.log("http://localhost:8000/")
})