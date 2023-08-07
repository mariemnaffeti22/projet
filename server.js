const express = require('express');
const app = express();
const mysql= require('mysql')

const db= mysql.createConnection({
    user: 'root',
    host:'localhost',
    password:'',
    database:'tachessystem'
})
app.post('/create',(req,res)=>{
const nom= req.body.nom
const description= req.body.description
const createur= req.body.createur
const developpeurs= req.body.developpeurs
const priorite= req.body.priorite
const avancement= req.body.avancement
const dateLimite= req.body.dateLimite

db.query('INSERT INTO taches(nom,description,createur,developpeurs,priorite,avancement,dateLimite)VALUES (?,?,?,?,?,?,?)',
[nom,description,createur,developpeurs,priorite,avancement,dateLimite],
(err,result) =>{
if (err) {
    console.log(err)
}
else {
    res.send("tache inserer")
}
}
);

})

app.listen(4000,() => {
console.log("your server is running on port 4000");
});